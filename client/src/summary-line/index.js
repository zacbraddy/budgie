import React from 'react';
import './summary-line.css';

export default ({ children, text, isHeader }) => (
  <div
    className={`summary-line-container ${
      isHeader ? 'summary-line-header' : ''
    }`}
  >
    {isHeader ? (
      <h5 className="summary-line-text">{text}</h5>
    ) : (
      <div className="summary-line-text">{text}</div>
    )}
    <div className="summary-line-column-container">{children}</div>
  </div>
);
