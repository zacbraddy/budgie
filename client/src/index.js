import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';

import App from './app';
import reducers from './reducers';
import budgetInitialState from './budget/budget.initial';
import Firebase, { FirebaseContext } from './firebase-auth';

const store = createStore(
  reducers,
  { budget: budgetInitialState },
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>,
  document.querySelector('#root')
);
