export const LOADING_APP = 'loading_app';
export const LOADED_APP = 'loaded_app';
export const FAILED_APP = 'failed_app';

export const loadApp = () => dispatch => dispatch(loadedApp());

export const loadingApp = () => ({
  type: LOADING_APP
});

export const loadedApp = () => ({
  type: LOADED_APP,
});

export const failedApp = () => ({
  type: FAILED_APP
});
