import React from 'react';
import './summary-line.css';

export default ({ children, text, value, isHeader }) => (
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
    <div className="summary-line-column-container">{children}</div>
  </div>
);
