import React from 'react';
import { cleanup, render } from 'react-testing-library';
import SummaryLine from './index.js';
import 'jest-dom/extend-expect';

describe('Summary line', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(<SummaryLine />).toBeDefined();
  });

  test('text gets rendered as part of the component', () => {
    const { getByText } = render(<SummaryLine text={`I'm Batman`} />);

    expect(getByText(`I'm Batman`)).toBeInTheDocument();
  });
});
