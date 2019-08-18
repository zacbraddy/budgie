import React from 'react';
import roundTo2DP from '../common/round-to-2-dp';
import EditableCurrencyField from '../editable-currency-field';
import './currency-field.css';

export default ({
  value,
  budgetTableName,
  budgetTableLineId,
  changeBudgetLineItem,
  headerText,
  isInHeader,
}) => (
  <div className="currency-field-container">
    {headerText && <div className="currency-field-header">{headerText}</div>}
    {isInHeader ? (
      <h5>£{roundTo2DP(value).toFixed(2)}</h5>
    ) : (
      <EditableCurrencyField
        value={value}
        budgetTableName={budgetTableName}
        budgetTableLineId={budgetTableLineId}
        changeBudgetLineItem={changeBudgetLineItem}
      />
    )}
  </div>
);
