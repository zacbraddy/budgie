import React from 'react';
import { BudgetComponent } from './index';

describe('Budget tests', () => {
  test('renders without crashing', () => {
    expect(<BudgetComponent />).toBeDefined();
  });
});
