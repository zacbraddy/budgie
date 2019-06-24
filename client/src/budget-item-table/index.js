import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import SummaryLine from '../summary-line';
import './budget-item-table.css';

export default ({ header, headerValue }) => (
  <Collapsible className="budget-item-table-container">
    <CollapsibleItem
      header={<SummaryLine text={header} value={headerValue} isHeader />}
      expanded
    >
      <SummaryLine text="Salary" value={991} />
      <SummaryLine text="Random Income" value={991} />
    </CollapsibleItem>
  </Collapsible>
);
