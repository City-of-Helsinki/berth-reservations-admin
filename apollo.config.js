// eslint-disable-next-line
require('dotenv').config({ path: '.env.development.local' });

module.exports = {
  client: {
    excludes: ["**/__tests__/**"],
    includes: ["./src/**/*.tsx?", "./schema.json"],
    service: 'Venepaikka Admin Interface',
    url: process.env.REACT_APP_API_URI
  },
};
