import React from 'react';
import { cleanup } from '@testing-library/react';
import SummaryLineColumn from './index';

describe('Summary line column', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(<SummaryLineColumn />).toBeDefined();
  });
});
