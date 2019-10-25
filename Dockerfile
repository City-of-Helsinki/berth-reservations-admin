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

# ===================================
FROM appbase as staticbuilder
# ===================================

COPY . /app
RUN yarn build

# =============================
FROM nginx:1.17 as production
# =============================

# Nginx runs with user "nginx" by default
COPY --from=staticbuilder --chown=nginx:nginx /app/build /usr/share/nginx/html

EXPOSE 80
