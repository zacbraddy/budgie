import { CHANGE_BUDGET_ITEM_TABLE_LINE_ESTIMATED } from './actions-types';

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
