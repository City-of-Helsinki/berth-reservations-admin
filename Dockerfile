# ===============================================
FROM helsinkitest/node:12-slim as appbase
# ===============================================

COPY yarn.lock /app/yarn.lock
COPY package.json /app/package.json
RUN yarn

# =============================
FROM appbase as development
# =============================

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
