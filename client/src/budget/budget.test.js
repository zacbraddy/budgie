import React from 'react';
import Budget from './index';

describe('Budget tests', () => {
  test('renders without crashing', () => {
    expect(<Budget />).toBeDefined();
  });
});
