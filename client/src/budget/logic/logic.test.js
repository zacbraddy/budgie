import { find } from 'ramda';
import logic from './index';
import { changeBudgetItemTableLineEstimate } from './actions';
import { INCOME } from './dictionary';
import initialState from './budget.initial';

describe('Budget reducer', () => {
  test(`that when I send and action that the reducer doesn't know about and I haven't passed state, initialState is returned`, () => {
    const result = logic(undefined, { type: `I'm Joker` });

    expect(result).toStrictEqual(initialState);
  });

  test('that I can update a line in a category', () => {
    const result = logic(
      initialState,
      changeBudgetItemTableLineEstimate(1, INCOME, 9001)
    );

    expect(find(line => line.id === 1, result.income.lines).estimated).toBe(
      9001
    );
  });
});
