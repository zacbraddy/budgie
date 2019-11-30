import { combineReducers } from 'redux';
import budget from '../budget/budget.reducer';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
  firebase: firebaseReducer,
  budget,
});
