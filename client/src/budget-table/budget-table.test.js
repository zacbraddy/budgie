import React from 'react';
import BudgetTable from './index';

describe('BudgetTable tests', () => {
  test('renders without crashing', () => {
    expect(<BudgetTable />).toBeDefined();
  });
});
