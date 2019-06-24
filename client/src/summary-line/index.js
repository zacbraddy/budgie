import React from 'react';
import CurrencyField from '../currency-field';
import './summary-line.css';

export default ({ text, value, isHeader }) => (
  <div
    className={`summary-line-container ${
      isHeader ? 'summary-line-header' : ''
    }`}
  >
    {isHeader ? (
      <h4 className="summary-line-text">{text}</h4>
    ) : (
      <div className="summary-line-text">{text}</div>
    )}
    <CurrencyField value={value} isHeader={isHeader} />
  </div>
);
