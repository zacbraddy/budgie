import React from 'react';
import CurrencyField from '../currency-field';

export default ({ isInHeader, text, value, headerText }) => (
  <div className="summary-line-column">
    <CurrencyField
      value={value}
      headerText={headerText}
      isInHeader={isInHeader}
    />
  </div>
);
