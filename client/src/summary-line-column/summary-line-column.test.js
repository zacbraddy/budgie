import React from 'react';
import { cleanup, render } from 'react-testing-library';
import SummaryLineColumn from './index.js';
import 'jest-dom/extend-expect';

describe('Summary line column', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(<SummaryLineColumn />).toBeDefined();
  });

  test('value gets rendered as part of the component', () => {
    const { getByText } = render(<SummaryLineColumn value={1} />);

    expect(getByText(/1/)).toBeInTheDocument();
  });

  test('headerText gets rendered as part of the component', () => {
    const { getByText } = render(
      <SummaryLineColumn headerText={`I'm Batman`} />
    );

    expect(getByText(`I'm Batman`)).toBeInTheDocument();
  });
});
