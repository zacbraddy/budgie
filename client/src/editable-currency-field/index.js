import React, { useEffect, useRef, useState } from 'react';
import roundTo2DP from '../common/round-to-2-dp';

export default ({
  value,
  budgetTableName,
  budgetTableLineId,
  dispatch,
  changeBudgetLineItem,
}) => {
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
    changeBudgetLineItem(
      budgetTableLineId,
      budgetTableName,
      Number(editingValue)
    );
    setIsEditing(!isEditing);
  };

  return isEditing ? (
    <input
      type="number"
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
