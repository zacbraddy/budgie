import { find } from 'ramda';
import budgetReducer from './budget.reducer';
import {
  changeBudgetItemTableLineActual,
  changeBudgetItemTableLineEstimate,
} from './actions';
import { INCOME } from './dictionary';
import initialState from './budget.initial';

describe('Budget reducer', () => {
  test(`that when I send an action that the reducer doesn't know about and I haven't passed state, initialState is returned`, () => {
    const newState = budgetReducer(initialState, { type: `I'm Joker` });

    expect(newState).toStrictEqual(initialState);
  });

  test('that I can update a line in a category estimate', () => {
    const newState = budgetReducer(
      initialState,
      changeBudgetItemTableLineEstimate(1, INCOME, 9001)
    );

    expect(find(line => line.id === 1, newState.income.lines).estimated).toBe(
      9001
    );
  });

  test('that I can update a line in a category actual', () => {
    const newState = budgetReducer(
      initialState,
      changeBudgetItemTableLineActual(1, INCOME, 9001)
    );

    expect(find(line => line.id === 1, newState.income.lines).actual).toBe(
      9001
    );
  });
});
