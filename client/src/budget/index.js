import React from 'react';
import { connect } from 'react-redux';
import SummaryLine from '../summary-line';
import SummaryLineColumn from '../summary-line-column';
import Separator from '../separator';
import BudgetItemTable from '../budget-item-table';
import './budget.css';

export const BudgetComponent = ({ budget }) => {
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

  const incomeTotals = calculateTotals(budget.income.lines);
  const debtTotals = calculateTotals(budget.debt.lines);
  const expensesTotals = calculateTotals(budget.expenses.lines);
  const savingsTotals = calculateTotals(budget.savings.lines);

  const moneyToAllocate =
    budget.beginningOfMonth +
    incomeTotals.totalActual -
    budget.totalSavingsLastMonth;

  const savingsToAllocate =
    moneyToAllocate - debtTotals.totalActual - expensesTotals.totalActual;

  return (
    <div className="budget-container">
      <SummaryLine text="Bank Balance as at 1st of the Month" isHeader>
        <SummaryLineColumn value={budget.beginningOfMonth} isInHeader />
      </SummaryLine>
      <Separator text="plus" />
      <BudgetItemTable {...budget.income} {...incomeTotals} />
      <Separator text="minus" />
      <SummaryLine text="Total Savings from last month" isHeader>
        <SummaryLineColumn value={budget.totalSavingsLastMonth} isInHeader />
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
      <BudgetItemTable {...budget.debt} {...debtTotals} />
      <BudgetItemTable {...budget.expenses} {...expensesTotals} />
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
      <BudgetItemTable {...budget.savings} {...savingsTotals} />
    </div>
  );
};

const mapStateTobudget = state => ({ ...state });

export default connect(mapStateTobudget /*mapDispatchTobudget*/)(
  BudgetComponent
);
