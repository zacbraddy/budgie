import React from 'react';
import SummaryLine from '../summary-line';
import SummaryLineColumn from '../summary-line-column';
import Separator from '../separator';
import BudgetItemTable from '../budget-item-table';
import './budget.css';

export default () => {
  return (
    <div className="budget-container">
      <SummaryLine text="Bank Balance as at 1st of the Month" isHeader>
        <SummaryLineColumn value={991} isInHeader />
      </SummaryLine>
      <Separator text="plus" />
      <BudgetItemTable header="Income" headerValue={991} />
    </div>
  );
};
