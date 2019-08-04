import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import reducers from '../../reducers';

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
export const renderWithRedux = (
  ui,
  { initialState, store = createStore(reducers, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
};

export const renderWithReactRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

export const renderWithReactRouterAndRedux = ui => ({
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
}) => ({ initialState, store = createStore(reducers, initialState) }) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>,
      </Provider>
    ),
    history,
    store,
  };
};
