import React from 'react';
import './separator.css';

export default ({ text }) => (
  <div className="separator-container">
    <hr className="separator-rule" />
    <div className="separator-text">{text}</div>
  </div>
);
