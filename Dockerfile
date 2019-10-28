# ===============================================
FROM helsinkitest/node:12-slim as appbase
# ===============================================
# Offical image has npm log verbosity as info. More info - https://github.com/nodejs/docker-node#verbosity
ENV NPM_CONFIG_LOGLEVEL warn

# We will use the `node` user which comes with the official node alpine image
ENV HOME /home/node

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Global npm deps in a non-root user directory
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# Yarn
ENV YARN_VERSION 1.19.1
RUN yarn policies set-version $YARN_VERSION

# UID and GID mapping
RUN groupmod -g 999 node && usermod -u 999 -g 999 node

# Create a node_modules directory and set it's permissions
RUN mkdir -p $HOME/app/node_modules && chown -R node:node $HOME/app

# Create app directory
WORKDIR $HOME/app

# Use non-root user
USER node

# Copy package.json and package-lock.json/yarn.lock files
COPY package*.json *yarn* ./

# Install npm depepndencies
RUN yarn && yarn cache clean --force
ENV PATH $HOME/node_modules/.bin:$PATH

# =============================
FROM appbase as development
# =============================

# copy in our source code last, as it changes the most
WORKDIR $HOME/app
COPY --chown=node:node . .

# Bake package.json start command into the image
CMD ["react-scripts", "start"]
