import { gql } from 'apollo-boost';

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

export const TOGGLE_CART = gql`
  mutation addOrRemoveFromCart($launchId: ID!) {
    addOrRemoveFromCart(id: $launchId) @client
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }

  extend type BerthTypeNode {
    isInCart: Boolean!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [BerthTypeNode]
  }
`;

export const resolvers = {
  Launch: {
    isInCart: (launch, _, { cache }) => {
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });
      return cartItems.includes(launch.id);
    },
  },
  Mutation: {
    addOrRemoveFromCart: (_, { id }, { cache }) => {
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });
      const data = {
        cartItems: cartItems.includes(id)
          ? cartItems.filter(i => i !== id)
          : [...cartItems, id],
      };
      cache.writeQuery({ query: GET_CART_ITEMS, data });
      return data.cartItems;
    },
  },
};
