# ===============================================
FROM helsinkitest/node:12-slim as appbase
# ===============================================
# Offical image has npm log verbosity as info. More info - https://github.com/nodejs/docker-node#verbosity
ENV NPM_CONFIG_LOGLEVEL warn

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# Global npm deps in a non-root user directory
ENV NPM_CONFIG_PREFIX=/home/appuser/.npm-global
ENV PATH=$PATH:/home/appuser/.npm-global/bin

# Yarn
ENV YARN_VERSION 1.19.1
RUN yarn policies set-version $YARN_VERSION

# Use non-root user
USER appuser

# Copy package.json and package-lock.json/yarn.lock files
COPY package*.json *yarn* ./

# Install npm depepndencies
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn && yarn cache clean --force

# =============================
FROM appbase as development
# =============================

# copy in our source code last, as it changes the most
COPY --chown=appuser:appuser . .

# Bake package.json start command into the image
CMD ["react-scripts", "start"]
