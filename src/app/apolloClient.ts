import ApolloClient from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';
import { ErrorLink, onError } from 'apollo-link-error';
import gql from 'graphql-tag';
import { ApolloLink } from 'apollo-link';
import { GraphQLError } from 'graphql';

import i18n from '../locales/i18n';
import authService from '../features/auth/authService';
import hdsToast from '../common/toast/hdsToast';

const typeDefs = gql`
  type CurrentUser {
    id: ID!
    name: String
    email: String
  }
  extend type Query {
    currentUser: CurrentUser
  }
`;

const cache = new InMemoryCache({
  fragmentMatcher: new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
      __schema: {
        types: [],
      },
    },
  }),
});
cache.writeData({ data: { currentUser: null } });

const authLink = setContext((_, { headers }) => {
  const apiTokens = authService.getTokens();
  return {
    headers: {
      ...headers,
      'Accept-Language': i18n.language,
      'Api-Tokens': apiTokens,
    },
  };
});

export const IGNORED_GRAPHQL_ERRORS = [
  // Ignore profile query:
  // extensions: {code: 'OBJECT_DOES_NOT_EXIST_ERROR',
  // serviceName: 'https://api.hel.fi/auth/helsinkiprofile',
  // query: 'query ($customerId: ID!) {\n  profile(id: $customer…d\n
  // variables: {…},
  // exception: {…}}
  // message: "Profile matching query does not exist."
  // path: ['profile']
  {
    serviceName: 'https://api.hel.fi/auth/helsinkiprofile',
    path: 'profile',
    code: 'OBJECT_DOES_NOT_EXIST_ERROR',
  },
];

const excludeIgnoredGraphQLErrors = (graphQLErrors: readonly GraphQLError[] | undefined): readonly GraphQLError[] => {
  if (!graphQLErrors) return [];
  const taostableErrors = [...graphQLErrors].filter(
    (error) =>
      !IGNORED_GRAPHQL_ERRORS.find(
        (ignorableEntry) =>
          error?.extensions?.serviceName === ignorableEntry.serviceName &&
          error?.extensions?.code === ignorableEntry.code &&
          error?.path?.includes(ignorableEntry.path)
      )
  );
  return taostableErrors;
};

export const errorHandler: ErrorLink.ErrorHandler = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // Ignore some errors being toasted...
    const toastableErrors = excludeIgnoredGraphQLErrors(graphQLErrors);
    hdsToast.graphQLErrors(toastableErrors);
  }
  if (networkError && networkError.name !== 'ServerError') {
    // An explicit id is passed here to the toast,
    // so it can be automatically dismissed on e.g. reconnection.
    hdsToast({
      autoDismiss: false,
      type: 'alert',
      labelText: 'toast.networkError.label',
      text: 'toast.networkError.description',
      toastId: 'networkErrorToast',
      translated: true,
    });
  }
};
export const errorLink = onError(errorHandler);

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_API_URL,
  headers: {
    'keep-alive': 'true',
  },
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, uploadLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
  cache,
  typeDefs,
  resolvers: {
    Query: {
      async currentUser() {
        const user = await authService.getUser();

        if (!user) return null;

        const { name, email, sub } = user.profile;

        return { __typename: 'CurrentUser', id: sub, name, email };
      },
    },
  },
});

export default apolloClient;
