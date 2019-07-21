export const initialState = {
  beginningOfMonth: 990,
  totalSavingsLastMonth: 20,
  income: {
    headerText: 'Income',
    lines: [
      {
        id: 1,
        text: 'Salary',
        estimated: 992,
        actual: 991,
      },
      {
        id: 2,
        text: 'Random Income',
        estimated: 992,
        actual: 993,
      },
    ],
  },
  debt: {
    headerText: 'Debt',
    lines: [
      {
        id: 1,
        text: 'Credit Card',
        estimated: 992,
        actual: 991,
      },
      {
        id: 2,
        text: 'Loan',
        estimated: 992,
        actual: 993,
      },
    ],
  },
  expenses: {
    headerText: 'Expenses',
    lines: [
      {
        id: 1,
        text: 'Rent',
        estimated: 992,
        actual: 991,
      },
      {
        id: 2,
        text: 'Beer',
        estimated: 992,
        actual: 993,
      },
    ],
  },
  savings: {
    headerText: 'Savings',
    lines: [
      {
        id: 1,
        text: 'Family Holidays',
        estimated: 992,
        actual: 991,
      },
      {
        id: 2,
        text: 'Nest Egg',
        estimated: 992,
        actual: 993,
      },
    ],
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
