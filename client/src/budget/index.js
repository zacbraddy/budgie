import React from 'react';
import SummaryLine from '../summary-line';
import SummaryLineColumn from '../summary-line-column';
import Separator from '../separator';
import BudgetItemTable from '../budget-item-table';
import './budget.css';

export default () => {
  const mockState = {
    beginningOfMonth: 990,
    totalSavingsLastMonth: 20,
    income: {
      headerText: 'Income',
      lines: [
        {
          text: 'Salary',
          estimated: 992,
          actual: 991,
        },
        {
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
          text: 'Credit Card',
          estimated: 992,
          actual: 991,
        },
        {
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
          text: 'Rent',
          estimated: 992,
          actual: 991,
        },
        {
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
          text: 'Family Holidays',
          estimated: 992,
          actual: 991,
        },
        {
          text: 'Nest Egg',
          estimated: 992,
          actual: 993,
        },
      ],
    },
  };

  const calculateTotals = lines => {
    let totalEstimate = 0;
    let totalActual = 0;

    lines.forEach(line => {
      totalEstimate += line.estimated;
      totalActual += line.actual;
    });

    return {
      totalEstimate,
      totalActual,
    };
  };

  const incomeTotals = calculateTotals(mockState.income.lines);
  const debtTotals = calculateTotals(mockState.debt.lines);
  const expensesTotals = calculateTotals(mockState.expenses.lines);
  const savingsTotals = calculateTotals(mockState.savings.lines);

  const moneyToAllocate =
    mockState.beginningOfMonth +
    incomeTotals.totalActual -
    mockState.totalSavingsLastMonth;

  const savingsToAllocate =
    moneyToAllocate - debtTotals.totalActual - expensesTotals.totalActual;

  return (
    <div className="budget-container">
      <SummaryLine text="Bank Balance as at 1st of the Month" isHeader>
        <SummaryLineColumn value={mockState.beginningOfMonth} isInHeader />
      </SummaryLine>
      <Separator text="plus" />
      <BudgetItemTable {...mockState.income} {...incomeTotals} />
      <Separator text="minus" />
      <SummaryLine text="Total Savings from last month" isHeader>
        <SummaryLineColumn value={mockState.totalSavingsLastMonth} isInHeader />
      </SummaryLine>
      <Separator text="equals" />
      <SummaryLine text="Money to allocate this month" isHeader>
        <SummaryLineColumn
          headerText="Left to allocate"
          value={91}
          isInHeader
        />
        <SummaryLineColumn
          headerText="Total"
          value={moneyToAllocate}
          isInHeader
        />
      </SummaryLine>
      <Separator text="minus" />
      <BudgetItemTable {...mockState.debt} {...debtTotals} />
      <BudgetItemTable {...mockState.expenses} {...expensesTotals} />
      <Separator text="equals" />
      <SummaryLine text="Savings to allocate this month" isHeader>
        <SummaryLineColumn
          headerText="Left to allocate"
          value={91}
          isInHeader
        />
        <SummaryLineColumn
          headerText="Total"
          value={savingsToAllocate}
          isInHeader
        />
      </SummaryLine>
      <BudgetItemTable {...mockState.savings} {...savingsTotals} />
    </div>
  );
};
