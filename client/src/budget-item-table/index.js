import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import SummaryLine from '../summary-line';
import SummaryLineColumn from '../summary-line-column';

import './budget-item-table.css';

export default ({ headerText, lines = [], totalEstimate, totalActual }) => {
  return (
    <Collapsible className="budget-item-table-container">
      <CollapsibleItem
        header={
          <SummaryLine text={headerText} isHeader>
            <SummaryLineColumn
              value={totalEstimate}
              headerText="Estimated"
              isInHeader
            />
            <SummaryLineColumn
              value={totalActual}
              headerText="Actual"
              isInHeader
            />
          </SummaryLine>
        }
        expanded
      >
        {lines.map((line, idx) => (
          <SummaryLine key={idx} text={line.text}>
            <SummaryLineColumn value={line.estimated} />
            <SummaryLineColumn value={line.actual} />
          </SummaryLine>
        ))}
      </CollapsibleItem>
    </Collapsible>
  );
};
