import React from 'react';

// Don't ask me about this crazyiness ask
// https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary#comment28521418_11832950

const roundTo2DP = num => Math.round((num + 0.00001) * 100) / 100;

export default ({ value }) => {
  console.log({ value });
  return <h1>£{roundTo2DP(value).toFixed(2)}</h1>;
};
