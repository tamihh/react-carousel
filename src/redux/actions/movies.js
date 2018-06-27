import { getMovies } from 'services';

export const LOADING_MOVIES = 'loading_movies';
export const LOADED_MOVIES = 'loaded_movies';
export const FAILED_MOVIES = 'failed_movies';
export const NO_RESULT_MOVIES = 'no_result_movies';

export function loadMovies() {
  return dispatch => {
    dispatch(loadingMovies());
    getMovies()
      .then(data => (
        data.results.length > 0 ?
          dispatch(loadedMovies(data.results)) :
          dispatch(noResultMovies())
      ))
      .catch(error => dispatch(failedMovies()));
  };
}

export const loadingMovies = () => ({
  type: LOADING_MOVIES
});

export const loadedMovies = movies => ({
  type: LOADED_MOVIES,
  payload: movies
});

export const failedMovies = () => ({
  type: FAILED_MOVIES
});

export const noResultMovies = () => ({
  type: NO_RESULT_MOVIES
});