import React from 'react';
import { cleanup, render } from 'react-testing-library';
import BudgetItemTable from './index.js';
import 'jest-dom/extend-expect';

describe('BudgetItemTable test', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(<BudgetItemTable />).toBeDefined();
  });

  test('headerText gets rendered as part of the component', () => {
    const { getByText } = render(<BudgetItemTable headerText={`I'm Batman`} />);

    expect(getByText(`I'm Batman`)).toBeInTheDocument();
  });

  test('totalEstimate gets rendered as part of the component', () => {
    const { getByText } = render(<BudgetItemTable totalEstimate={1} />);

    expect(getByText(/1/)).toBeInTheDocument();
  });

  test('totalActual gets rendered as part of the component', () => {
    const { getByText } = render(<BudgetItemTable totalActual={1} />);

    expect(getByText(/1/)).toBeInTheDocument();
  });

  test('lines gets rendered as part of the component', () => {
    const mockLines = [
      {
        text: `I'm Batman`,
        estimated: 1,
        actual: 99,
      },
    ];

    const { getByText } = render(<BudgetItemTable lines={mockLines} />);

    expect(getByText(/I'm Batman/)).toBeInTheDocument();
    expect(getByText(/1/)).toBeInTheDocument();
    expect(getByText(/99/)).toBeInTheDocument();
  });
});
