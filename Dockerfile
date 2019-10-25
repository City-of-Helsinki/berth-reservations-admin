# ===============================================
FROM helsinkitest/node:12-slim as appbase
# ===============================================

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

RUN yarn

# =============================
FROM appbase as development
# =============================

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY . /app
CMD ["yarn", "start"]

EXPOSE 3000
