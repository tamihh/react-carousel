import { LOADING_APP, LOADED_APP, FAILED_APP } from 'Redux/actions/app';

const initialState = {
  loadedApp: true,
  loadingApp: false,
  errorApp: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_APP:
      return {
        ...state,
        loadingApp: true
      };
    case LOADED_APP:
      return {
        ...state,
        loadedApp: true,
        loadingApp: false,
        errorApp: false
      };
    case FAILED_APP:
      return {
        ...state,
        loadingApp: false,
        errorApp: true
      };

    default:
      return state;
  }
};