import React, { useState } from 'react';
import roundTo2DP from '../common/round-to-2-dp';

export default ({ value, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <input type="text" value={value} />
  ) : (
    <div onClick={() => setIsEditing(!isEditing)}>
      £{roundTo2DP(value).toFixed(2)}
    </div>
  );
};
