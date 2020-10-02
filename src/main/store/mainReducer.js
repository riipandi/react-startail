import AuthReducer from 'library/common/reducers/AuthReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  authReducer: AuthReducer,
});
