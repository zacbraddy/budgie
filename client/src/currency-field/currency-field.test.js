import React from 'react';
import { cleanup, render } from 'react-testing-library';
import CurrencyField from './index.js';
import 'jest-dom/extend-expect';

describe('Currency Field test', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(<CurrencyField />).toBeDefined();
  });

  test('value gets passed to the tag', () => {
    const { getByText } = render(<CurrencyField value={1} />);

    expect(getByText('£1.00')).toBeInTheDocument();
  });

  test('value gets rounded to two decimal places like good currency values should', () => {
    const { getByText } = render(<CurrencyField value={1.006} />);

    expect(getByText('£1.01')).toBeInTheDocument();
  });

  test('headerText gets passed to a tag', () => {
    const { getByText } = render(<CurrencyField headerText={`I'm Batman`} />);

    expect(getByText(`I'm Batman`)).toBeInTheDocument();
  });
});
