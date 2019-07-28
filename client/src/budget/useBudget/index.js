import React, { useReducer } from 'react';
import { assocPath, find, findIndex, path } from 'ramda';

import { CHANGE_BUDGET_ITEM_TABLE_LINE_ESTIMATED } from './actions/actions-types';
import initialState from './budget.initial';

const reducer = (state = initialState, action) => {
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

let useBudgetInstance;

// Note, this isn't what I want. This will create a new useReducer for every hook but I want one to rule them all!!!!

export default () => {
  if (!useBudgetInstance) useBudgetInstance = useReducer(reducer, initialState);
  return useReducer(reducer, initialState);
};
