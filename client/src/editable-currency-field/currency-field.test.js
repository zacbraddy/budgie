import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import EditableCurrencyField from './index.js';
import 'jest-dom/extend-expect';

describe('Editable currency fields', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(<EditableCurrencyField />).toBeDefined();
  });

  test('value gets passed to the tag', () => {
    const { getByText } = render(<EditableCurrencyField value={1} />);

    expect(getByText('£1.00')).toBeInTheDocument();
  });

  test('value gets rounded to two decimal places like good currency values should', () => {
    const { getByText } = render(<EditableCurrencyField value={1.006} />);

    expect(getByText('£1.01')).toBeInTheDocument();
  });

  test('value gets passed to a tag after click', () => {
    const { getByText, getByDisplayValue } = render(
      <EditableCurrencyField value={1} />
    );

    fireEvent.click(getByText('£1.00'));

    expect(getByDisplayValue(/1/)).toBeInTheDocument();
  });
});
