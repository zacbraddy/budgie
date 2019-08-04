import { combineReducers } from 'redux';
import auth from './auth-reducers';
import budget from '../budget/budget.reducer';

export default combineReducers({
  auth,
  budget,
});
