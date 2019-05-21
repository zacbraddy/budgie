import React, { useState } from 'react';
import { TextInput } from 'react-materialize';

export default ({ value }) => {
  const [isInEditMode, setIsInEditMode] = useState(false);

  return (
    <>
      {isInEditMode ? (
        <TextInput type="text" value={value} />
      ) : (
        <div onClick={() => setIsInEditMode(true)}>{value}</div>
      )}
    </>
  );
};
