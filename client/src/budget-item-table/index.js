import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import SummaryLine from '../summary-line';
import SummaryLineColumn from '../summary-line-column';
import CurrencyField from '../currency-field';
import * as budgetActions from '../budget/actions';

import './budget-item-table.css';

export const BudgetItemTableComponent = ({
  headerText,
  budgetTableName,
  lines = [],
  totalEstimate,
  totalActual,
  changeBudgetItemTableLineEstimate,
}) => {
  return (
    <Collapsible className="budget-item-table-container">
      <CollapsibleItem
        header={
          <SummaryLine text={headerText} isHeader>
            <SummaryLineColumn>
              <CurrencyField
                value={totalEstimate}
                headerText="Estimated"
                isInHeader
              />
            </SummaryLineColumn>
            <SummaryLineColumn>
              <CurrencyField
                value={totalEstimate}
                headerText="Actual"
                isInHeader
              />
            </SummaryLineColumn>
          </SummaryLine>
        }
        expanded
      >
        {lines.map((line, idx) => (
          <SummaryLine key={idx} text={line.text}>
            <SummaryLineColumn>
              <CurrencyField
                value={line.estimated}
                budgetTableName={budgetTableName}
                budgetTableLineId={line.id}
                changeBudgetLineItem={changeBudgetItemTableLineEstimate}
              />
            </SummaryLineColumn>
            <SummaryLineColumn>
              <CurrencyField value={line.actual} />
            </SummaryLineColumn>
          </SummaryLine>
        ))}
      </CollapsibleItem>
    </Collapsible>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(budgetActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(BudgetItemTableComponent);
