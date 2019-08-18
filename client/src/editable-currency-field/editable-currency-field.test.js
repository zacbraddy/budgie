import React from 'react';
import { cleanup, fireEvent, render, wait } from '@testing-library/react';
import EditableCurrencyField from './index.js';
import '@testing-library/jest-dom/extend-expect';

describe('Editable currency fields', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(render(<EditableCurrencyField />)).toBeDefined();
  });

  test('value gets passed to the tag', () => {
    const { getByText } = render(<EditableCurrencyField value={1} />);

    expect(getByText('£1.00')).toBeInTheDocument();
  });

  test('value gets rounded to two decimal places like good currency values should', () => {
    const { getByText } = render(
      <EditableCurrencyField value={1.006} />
    );

    expect(getByText('£1.01')).toBeInTheDocument();
  });

  test('value gets passed to a tag after click', () => {
    const { getByText, getByDisplayValue } = render(
      <EditableCurrencyField value={1} />
    );

    fireEvent.click(getByText('£1.00'));

    expect(getByDisplayValue(/1/)).toBeInTheDocument();
  });

  test('an input box to be focused after a click event', async () => {
    const { getByText, getByDisplayValue } = render(
      <EditableCurrencyField value={1} />
    );

    fireEvent.click(getByText('£1.00'));

    await wait(() =>
      expect(document.activeElement).toEqual(getByDisplayValue(/1/))
    );
  });
});
