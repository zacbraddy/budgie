import React, { useEffect, useRef, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import roundTo2DP from '../common/round-to-2-dp';
import { changeBudgetItemTableLineEstimate } from '../budget/actions';

export const EditableCurrencyFieldComponent = ({ value, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    if (isEditing) {
      setEditingValue(value);
      inputEl.current.focus();
    }
  }, [isEditing, value]);

  const onEditingComplete = () => {
    setIsEditing(!isEditing);
  };

  return isEditing ? (
    <input
      type="text"
      onBlur={onEditingComplete}
      onChange={ev => setEditingValue(ev.target.value)}
      ref={inputEl}
      value={editingValue}
    />
  ) : (
    <div onClick={() => setIsEditing(!isEditing)}>
      £{roundTo2DP(value).toFixed(2)}
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeBudgetItemTableLineEstimate }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(EditableCurrencyFieldComponent);
