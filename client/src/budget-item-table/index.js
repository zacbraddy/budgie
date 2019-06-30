import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import SummaryLine from '../summary-line';
import SummaryLineColumn from '../summary-line-column';

import './budget-item-table.css';

export default ({ header, headerValue }) => (
  <Collapsible className="budget-item-table-container">
    <CollapsibleItem
      header={
        <SummaryLine text={header} value={headerValue} isHeader>
          <SummaryLineColumn value={991} headerText="Estimated" isInHeader />
          <SummaryLineColumn value={991} headerText="Actual" isInHeader />
        </SummaryLine>
      }
      expanded
    >
      <SummaryLine text="Salary">
        <SummaryLineColumn value={991} />
        <SummaryLineColumn value={991} />
      </SummaryLine>
      <SummaryLine text="Random Income">
        <SummaryLineColumn value={991} />
        <SummaryLineColumn value={991} />
      </SummaryLine>
    </CollapsibleItem>
  </Collapsible>
);
