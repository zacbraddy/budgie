import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Separator from './index.js';
import '@testing-library/jest-dom/extend-expect';

describe('Separator test', () => {
  afterEach(cleanup);

  test('that it renders without crashing', () => {
    expect(<Separator />).toBeDefined();
  });

  test('text gets rendered as part of the component', () => {
    const { getByText } = render(<Separator text={`I'm Batman`} />);

    expect(getByText(`I'm Batman`)).toBeInTheDocument();
  });
});
