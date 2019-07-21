import React, { useReducer } from 'react';
import SummaryLine from '../summary-line';
import SummaryLineColumn from '../summary-line-column';
import Separator from '../separator';
import BudgetItemTable from '../budget-item-table';
import reducer from './logic';
import initialState from './logic/budget.initial';
import './budget.css';

export default () => {
  const [state] = useReducer(reducer, initialState);
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

  const incomeTotals = calculateTotals(state.income.lines);
  const debtTotals = calculateTotals(state.debt.lines);
  const expensesTotals = calculateTotals(state.expenses.lines);
  const savingsTotals = calculateTotals(state.savings.lines);

  const moneyToAllocate =
    state.beginningOfMonth +
    incomeTotals.totalActual -
    state.totalSavingsLastMonth;

  const savingsToAllocate =
    moneyToAllocate - debtTotals.totalActual - expensesTotals.totalActual;

  return (
    <div className="budget-container">
      <SummaryLine text="Bank Balance as at 1st of the Month" isHeader>
        <SummaryLineColumn value={state.beginningOfMonth} isInHeader />
      </SummaryLine>
      <Separator text="plus" />
      <BudgetItemTable {...state.income} {...incomeTotals} />
      <Separator text="minus" />
      <SummaryLine text="Total Savings from last month" isHeader>
        <SummaryLineColumn value={state.totalSavingsLastMonth} isInHeader />
      </SummaryLine>
      <Separator text="equals" />
      <SummaryLine text="Money to allocate this month" isHeader>
        <SummaryLineColumn
          headerText="Left to allocate"
          value={moneyToAllocate}
          isInHeader
        />
        <SummaryLineColumn
          headerText="Total"
          value={moneyToAllocate}
          isInHeader
        />
      </SummaryLine>
      <Separator text="minus" />
      <BudgetItemTable {...state.debt} {...debtTotals} />
      <BudgetItemTable {...state.expenses} {...expensesTotals} />
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
      <BudgetItemTable {...state.savings} {...savingsTotals} />
    </div>
  );
};
