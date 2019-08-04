import { assocPath, find, findIndex, path } from 'ramda';

import { CHANGE_BUDGET_ITEM_TABLE_LINE_ESTIMATED } from './actions/actions-types';
import initialState from './budget.initial';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BUDGET_ITEM_TABLE_LINE_ESTIMATED:
      const { id, newEstimate: estimated } = action;
      const linesOfTableToChange = path(
        [action.budgetTableToChange, 'lines'],
        state
      );

      const lineToChange = find(line => line.id === id, linesOfTableToChange);
      const indexOfLineToChange = findIndex(
        line => line.id === id,
        linesOfTableToChange
      );
      return assocPath(
        [action.budgetTableToChange, 'lines', indexOfLineToChange],
        { ...lineToChange, estimated },
        state
      );
    default:
      return state;
  }
};
