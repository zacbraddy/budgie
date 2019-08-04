import { find } from 'ramda';
import useBudget from './index';
import { renderHook, act } from '@testing-library/react-hooks';
import { changeBudgetItemTableLineEstimate } from './actions';
import { INCOME } from './dictionary';
import initialState from './budget.initial';

describe('Budget reducer', () => {
  test(`that when I send and action that the reducer doesn't know about and I haven't passed state, initialState is returned`, () => {
    const { result } = renderHook(() => useBudget());

    act(() => result.current[1]({ type: `I'm Joker` }));

    expect(result.current[0]).toStrictEqual(initialState);
  });

  test('that I can update a line in a category', () => {
    const { result } = renderHook(() => useBudget());

    act(() => {
      result.current[1](changeBudgetItemTableLineEstimate(1, INCOME, 9001));
    });

    expect(
      find(line => line.id === 1, result.current[0].income.lines).estimated
    ).toBe(9001);
  });
});
