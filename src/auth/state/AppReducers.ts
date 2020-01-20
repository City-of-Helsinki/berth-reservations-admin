import { combineReducers } from 'redux-starter-kit';

import authenticationReducers from './AuthenticationReducers';

export default combineReducers({
  authentication: authenticationReducers,
});
