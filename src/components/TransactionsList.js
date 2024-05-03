import React from "react";

function TransactionsList({ transactions, onDelete, onSort }) {
  const handleSort = (sortBy) => {
    onSort(sortBy);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <table className="table-icon">
      <thead>
        <tr>
          <th>
            <button onClick={() => handleSort("date")}>Date</button>
          </th>
          <th>
            <button onClick={() => handleSort("description")}>Description</button>
          </th>
          <th>
            <button onClick={() => handleSort("category")}>Category</button>
          </th>
          <th>
            <button onClick={() => handleSort("amount")}>Amount</button>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => handleDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;