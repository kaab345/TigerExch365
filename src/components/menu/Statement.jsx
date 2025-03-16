import React, { useState } from 'react';
import './Statement.css';

const mockTransactions = [
  {
    id: 1,
    date: '2024-01-20',
    time: '14:30',
    description: 'Deposit via UPI',
    type: 'credit',
    amount: 10000,
    balance: 10000
  },
  {
    id: 2,
    date: '2024-01-20',
    time: '15:45',
    description: 'Bet on Man Utd vs Liverpool',
    type: 'debit',
    amount: 1000,
    balance: 9000
  },
  {
    id: 3,
    date: '2024-01-20',
    time: '18:20',
    description: 'Won - Man Utd vs Liverpool',
    type: 'credit',
    amount: 2500,
    balance: 11500
  }
];

const Statement = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [transactionType, setTransactionType] = useState('all');

  const filteredTransactions = mockTransactions.filter(transaction => {
    if (transactionType !== 'all' && transaction.type !== transactionType) {
      return false;
    }
    if (startDate && transaction.date < startDate) {
      return false;
    }
    if (endDate && transaction.date > endDate) {
      return false;
    }
    return true;
  });

  return (
    <div className="statement-container">
      <div className="statement-header">
        <h1>STATEMENT</h1>
       
      </div>

      <div className="statement-content">
        <div className="filters-section">
          <div className="filter-group">
            <label className="filter-label">From Date</label>
            <input
              type="date"
              className="filter-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">To Date</label>
            <input
              type="date"
              className="filter-input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Transaction Type</label>
            <select
              className="filter-select"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="all">All Transactions</option>
              <option value="credit">Credits Only</option>
              <option value="debit">Debits Only</option>
            </select>
          </div>
        </div>

        {filteredTransactions.length > 0 ? (
          <table className="statement-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.time}</td>
                  <td>{transaction.description}</td>
                  <td>
                    <span className={`transaction-type ${transaction.type}`}>
                      {transaction.type.toUpperCase()}
                    </span>
                  </td>
                  <td className={`amount ${transaction.type}`}>
                    ₹{transaction.amount.toLocaleString()}
                  </td>
                  <td>₹{transaction.balance.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-message">
            No transactions found for the selected filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Statement;
