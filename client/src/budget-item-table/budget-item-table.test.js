import React from 'react';
import { cleanup, render } from 'react-testing-library';
import BudgetItemTable from './index.js';
import 'jest-dom/extend-expect';

describe('BudgetItemTable test', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(<BudgetItemTable />).toBeDefined();
  });

  test('header gets rendered as part of the component', () => {
    const { getByText } = render(<BudgetItemTable header={`I'm Batman`} />);

    expect(getByText(`I'm Batman`)).toBeInTheDocument();
  });

  test('headervalue gets rendered as part of the component', () => {
    const { getByText } = render(<BudgetItemTable headerValue={1} />);

    expect(getByText(/1/)).toBeInTheDocument();
  });
});
