import { CHANGE_BUDGET_ITEM_TABLE_LINE_ACTUAL, CHANGE_BUDGET_ITEM_TABLE_LINE_ESTIMATED } from './actions-types';

export const changeBudgetItemTableLineEstimate = (
  id,
  budgetTableToChange,
  newEstimate
) => ({
  type: CHANGE_BUDGET_ITEM_TABLE_LINE_ESTIMATED,
  budgetTableToChange,
  newEstimate,
  id,
});

export const changeBudgetItemTableLineActual = (
  id,
  budgetTableToChange,
  newActual
) => ({
  type: CHANGE_BUDGET_ITEM_TABLE_LINE_ACTUAL,
  budgetTableToChange,
  newActual,
  id,
});
