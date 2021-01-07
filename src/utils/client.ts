import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ErrorResponse, onError } from 'apollo-link-error';

// Instantiate required constructor fields
const cache = new InMemoryCache();

const link = createHttpLink({
  uri: 'https://cors-anywhere.herokuapp.com/https://demo.saleor.io/graphql/',
});

export const tokenLink = setContext((_, context) => {
  const authToken = localStorage.getItem('token');
  return {
    ...context,
    headers: {
      ...context.headers,
      Authorization: authToken ? `JWT ${authToken}` : null,
    },
  };
});

interface ResponseError extends ErrorResponse {
  networkError?: Error & {
    statusCode?: number;
    bodyText?: string;
  };
}

export const errorLink = onError((error: ResponseError) => {
  if (error.networkError && error.networkError.statusCode === 401) {
    console.warn('hello world , eeorr');
  }
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
