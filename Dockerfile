# ===============================================
FROM helsinkitest/node:14-slim as appbase
# ===============================================
# Offical image has npm log verbosity as info. More info - https://github.com/nodejs/docker-node#verbosity
ENV NPM_CONFIG_LOGLEVEL warn

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Global npm deps in a non-root user directory
ENV NPM_CONFIG_PREFIX=/app/.npm-global
ENV PATH=$PATH:/app/.npm-global/bin

# Yarn
ENV YARN_VERSION 1.19.1
RUN yarn policies set-version $YARN_VERSION

# Use non-root user
USER appuser

# Copy package.json and package-lock.json/yarn.lock files
COPY package*.json *yarn* ./

# Install npm dependencies
ENV PATH /app/node_modules/.bin:$PATH

USER root
RUN apt-install.sh build-essential

# Install the actual app dependencies
USER appuser
RUN yarn install && yarn cache clean --force

USER root
RUN apt-cleanup.sh build-essential

# =============================
FROM appbase as development
# =============================

# Set NODE_ENV to development in the development container
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# copy in our source code last, as it changes the most
COPY --chown=appuser:appuser . .

# Bake package.json start command into the image
CMD ["react-scripts", "start"]

# ===================================
FROM appbase as staticbuilder
# ===================================

ARG REACT_APP_ENV=development
ENV REACT_APP_ENV $REACT_APP_ENV

ARG REACT_APP_API_URL
ARG REACT_APP_BERTH_API_URL
ARG REACT_APP_SENTRY_DSN
ARG REACT_APP_SENTRY_ENVIRONMENT
ARG REACT_APP_SERVICE_MAP_URL
ARG REACT_APP_TUNNISTAMO_API_TOKEN_ENDPOINT
ARG REACT_APP_TUNNISTAMO_CLIENT_ID
ARG REACT_APP_TUNNISTAMO_LOGOUT_ENDPOINT
ARG REACT_APP_TUNNISTAMO_SCOPE_BERTHS
ARG REACT_APP_TUNNISTAMO_SCOPE_PROFILE
ARG REACT_APP_TUNNISTAMO_URI
ARG SASS_PATH="node_modules:src/assets/styles"

COPY . /app

# Replace tsconfig with production tsconfig that ignores test files
RUN rm -rf ./tsconfig.json
COPY .prod/tsconfig.json ./

RUN yarn build

# =============================
FROM nginx:1.26 as production
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
