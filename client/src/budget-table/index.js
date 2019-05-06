import React from 'react';
import { Table } from 'react-materialize';

export default () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Budgeted</th>
            <th>Actual</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fuel</td>
            <td>100</td>
            <td>90</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
