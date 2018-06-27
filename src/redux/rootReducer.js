import { combineReducers } from 'redux';
import appReducer from 'Redux/reducers/app';

export default combineReducers({
  app: appReducer,
});