// eslint-disable-next-line
require('dotenv').config({ path: '.env.development.local' });

module.exports = {
  client: {
    excludes: ['**/__tests__/**'],
    includes: ['./src/apollo/resolvers.ts", "./schema.json'],
    service: 'tutorial-zeukkari',
    url: process.env.REACT_APP_API_URI,
  },
};
