# ===============================================
FROM public.ecr.aws/docker/library/node:14-slim AS appbase
# ===============================================
USER root
WORKDIR /app

# Offical image has npm log verbosity as info. More info - https://github.com/nodejs/docker-node#verbosity
ENV NPM_CONFIG_LOGLEVEL=warn

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Global npm deps in a non-root user directory
ENV NPM_CONFIG_PREFIX=/app/.npm-global
ENV PATH=$PATH:/app/.npm-global/bin

# Yarn
ENV YARN_VERSION=1.19.1
RUN yarn policies set-version $YARN_VERSION

# Make sure appuser group and user exist
COPY ./setup_user.sh /setup_user.sh
RUN chmod a+x /setup_user.sh && /bin/sh -c /setup_user.sh && rm -f /setup_user.sh

# Copy package.json and package-lock.json/yarn.lock files
COPY package*.json *yarn* ./

# Install npm dependencies
ENV PATH=/app/node_modules/.bin:$PATH

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y --no-install-recommends build-essential

# Install the actual app dependencies
RUN yarn install && yarn cache clean --force

RUN apt-get remove -y build-essential \
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /var/cache/apt/archives

# =============================
FROM appbase AS development
# =============================

# Set NODE_ENV to development in the development container
ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

# copy in our source code last, as it changes the most
COPY --chown=appuser:appuser . .

USER appuser

# Bake package.json start command into the image
CMD ["react-scripts", "start"]

# ===================================
FROM appbase AS staticbuilder
# ===================================

ARG REACT_APP_ENV=development
ENV REACT_APP_ENV=$REACT_APP_ENV

ARG REACT_APP_API_URL
ARG REACT_APP_BERTH_API_URL
ARG REACT_APP_SENTRY_DSN
ARG REACT_APP_SENTRY_ENVIRONMENT
ARG REACT_APP_SERVICE_MAP_URL
ARG REACT_APP_OIDC_AUTHORITY
ARG REACT_APP_OIDC_AUDIENCES
ARG REACT_APP_OIDC_CLIENT_ID
ARG REACT_APP_OIDC_LOGOUT_ENDPOINT
ARG REACT_APP_OIDC_SCOPE
ARG REACT_APP_OIDC_RETURN_TYPE
ARG REACT_APP_OIDC_BERTH_API_CLIENT_ID
ARG REACT_APP_OIDC_PROFILE_API_CLIENT_ID
ARG REACT_APP_OIDC_SERVER_TYPE
ARG REACT_APP_OIDC_AUTOMATIC_SILENT_RENEW_ENABLED
ARG REACT_APP_OIDC_SESSION_POLLING_INTERVAL_MS
ARG REACT_APP_IDLE_TIMEOUT_IN_MS
ARG SASS_PATH="node_modules:src/assets/styles"

COPY . /app

# Replace tsconfig with production tsconfig that ignores test files
RUN rm -rf ./tsconfig.json
COPY .prod/tsconfig.json ./

RUN yarn build

# =============================
FROM public.ecr.aws/nginx/nginx:1.18 AS production
# =============================

# Nginx runs with user "nginx" by default
COPY --from=staticbuilder --chown=nginx:nginx /app/build /usr/share/nginx/html

COPY .prod/nginx.conf /etc/nginx/conf.d/default.conf

# OpenShift write accesses, runtime is created "/var/cache/nginx/client_temp"
USER root
RUN chgrp -R 0 /var/cache/nginx && chmod g+w -R /var/cache/nginx
RUN chgrp -R 0 /run && chmod g+w -R /run
USER appuser

EXPOSE 8080
