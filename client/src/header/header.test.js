import React from 'react';
import { renderWithReactRouterAndRedux } from '../test/utils';
import Header from './index.js';

describe('Header component', () => {
  test('should render without error', () => {
    renderWithReactRouterAndRedux(<Header />);
  });
});
