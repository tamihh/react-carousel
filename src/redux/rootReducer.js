import { combineReducers } from 'redux';
import appReducer from 'Redux/reducers/app';
import moviesReducer from 'Redux/reducers/movies';

export default combineReducers({
  app: appReducer,
  upcommingMovies: moviesReducer,
});