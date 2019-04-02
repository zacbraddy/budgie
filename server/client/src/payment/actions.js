import axios from 'axios';
import { FETCH_USER } from '../auth/action-types';

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
