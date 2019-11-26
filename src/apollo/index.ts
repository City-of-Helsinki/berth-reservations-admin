import ApolloClient, { InMemoryCache } from 'apollo-boost';

import { resolvers, typeDefs } from './resolvers';

const cache = new InMemoryCache();

const { REACT_APP_API_URI } = process.env;

export const createClient = () => {
  const client = new ApolloClient({
    cache: cache,
    resolvers: resolvers,
    typeDefs: typeDefs,
    uri: REACT_APP_API_URI,
  });

  cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem('token'),
      cartItems: [],
    },
  });

  return client;
};
