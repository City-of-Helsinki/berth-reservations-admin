import { ErrorResponse } from 'apollo-link-error';
import { GraphQLError } from 'graphql';
import * as hdsToast from '../../common/toast/hdsToast';
import { errorHandler } from '../apolloClient';

describe('apolloClient', () => {
  describe('errorHandler', () => {
    it('should show toasts for GraphQL errors', () => {
      const graphQLErrorsSpy = jest.spyOn(hdsToast.default, 'graphQLErrors');
      const mockGraphQLError = ({
        message: 'Error!',
        extensions: {
          code: 'error',
        },
      } as unknown) as GraphQLError;
      const mockError = ({
        graphQLErrors: [mockGraphQLError],
      } as unknown) as ErrorResponse;

      errorHandler(mockError);
      expect(graphQLErrorsSpy).toHaveBeenCalledWith([{ extensions: { code: 'error' }, message: 'Error!' }]);
    });

    it('should show toasts for network errors', () => {
      const hdsToastSpy = jest.spyOn(hdsToast, 'default');
      const mockNetworkError = ({
        statusCode: 500,
      } as unknown) as ErrorResponse['networkError'];
      const mockError = ({
        networkError: [mockNetworkError],
      } as unknown) as ErrorResponse;

      errorHandler(mockError);
      expect(hdsToastSpy).toHaveBeenCalledWith({
        autoDismiss: false,
        labelText: 'toast.networkError.label',
        text: 'toast.networkError.description',
        toastId: 'networkErrorToast',
        translated: true,
        type: 'alert',
      });
    });
  });
});
