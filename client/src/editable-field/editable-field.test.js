import React from 'react';
import { fireEvent, render, cleanup } from 'react-testing-library';
import EditableField from './index.js';
import 'jest-dom/extend-expect';

describe('Editable Field', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(<EditableField />).toBeDefined();
  });

  test('on first render value is put into a div', () => {
    const { getByText } = render(<EditableField value="I'm Batman" />);

    expect(getByText(`I'm Batman`)).toBeInTheDocument();
  });

  test('on div click the component instead renders a text box with the value in it', () => {
    const { getByText, getByDisplayValue } = render(
      <EditableField value="I'm Batman" />,
    );

    fireEvent.click(getByText(`I'm Batman`));

    expect(getByDisplayValue(`I'm Batman`)).toBeInTheDocument();
  });
});
