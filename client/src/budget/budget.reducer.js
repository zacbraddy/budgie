import { assocPath, find, findIndex, path } from 'ramda';

import {
  CHANGE_BUDGET_ITEM_TABLE_LINE_ACTUAL,
  CHANGE_BUDGET_ITEM_TABLE_LINE_ESTIMATED,
} from './actions/actions-types';
import initialState from './budget.initial';

const changeLineValue = (type, newValue, action, state) => {
  const { id, budgetTableToChange } = action;
  const linesOfTableToChange = path([budgetTableToChange, 'lines'], state);

  const lineToChange = find(line => line.id === id, linesOfTableToChange);
  const indexOfLineToChange = findIndex(
    line => line.id === id,
    linesOfTableToChange
  );

  if (indexOfLineToChange === -1)
    throw new Error(
      `A budget line that doesn't exist was just attempted to be changed`,
      { id, budgetTableToChange, newValue, type }
    );

  const updatedLine = assocPath([type], newValue, lineToChange);

  const result = assocPath(
    [action.budgetTableToChange, 'lines', indexOfLineToChange],
    updatedLine,
    state
  );

  return result;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BUDGET_ITEM_TABLE_LINE_ESTIMATED:
      return changeLineValue('estimated', action.newEstimate, action, state);
    case CHANGE_BUDGET_ITEM_TABLE_LINE_ACTUAL:
      return changeLineValue('actual', action.newActual, action, state);
    default:
      return state;
  }
};
