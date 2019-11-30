import { FETCH_USER, SIGN_OUT } from '../auth/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case SIGN_OUT:
      return action.payload || false;
    default:
      return state;
  }
};
