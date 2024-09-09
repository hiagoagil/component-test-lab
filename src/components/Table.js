import React, { useState } from 'react';

const Table = ({ customers, customerClickHandler }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedCustomers = React.useMemo(() => {
    let sortableCustomers = [...customers];
    if (sortConfig.key) {
      sortableCustomers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableCustomers;
  }, [customers, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig.key) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort('id')} className={getClassNamesFor('id')}>
            ID {getClassNamesFor('id') === 'ascending' ? '▲' : getClassNamesFor('id') === 'descending' ? '▼' : ''}
          </th>
          <th onClick={() => requestSort('name')} className={getClassNamesFor('name')}>
            Name {getClassNamesFor('name') === 'ascending' ? '▲' : getClassNamesFor('name') === 'descending' ? '▼' : ''}
          </th>
          <th onClick={() => requestSort('employees')} className={getClassNamesFor('employees')}>
            Employees {getClassNamesFor('employees') === 'ascending' ? '▲' : getClassNamesFor('employees') === 'descending' ? '▼' : ''}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedCustomers.map((customer) => (
          <tr key={customer.id} onClick={() => customerClickHandler(customer)}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.employees}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
  