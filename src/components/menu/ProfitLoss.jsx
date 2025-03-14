import React, { useState } from 'react';
import './ProfitLoss.css';

const mockData = {
  summary: {
    totalBets: 25,
    totalStake: 15000,
    totalProfit: 2500,
    winRate: '68%'
  },
  transactions: [
    {
      id: 1,
      date: '2024-01-20',
      time: '14:30',
      event: 'Manchester United vs Liverpool',
      type: 'sports',
      stake: 1000,
      result: 'Won',
      profitLoss: 2500
    },
    {
      id: 2,
      date: '2024-01-20',
      time: '16:45',
      event: 'Blackjack Table 1',
      type: 'casino',
      stake: 500,
      result: 'Lost',
      profitLoss: -500
    },
    {
      id: 3,
      date: '2024-01-20',
      time: '18:20',
      event: 'Real Madrid vs Barcelona',
      type: 'sports',
      stake: 1000,
      result: 'Won',
      profitLoss: 1950
    }
  ]
};

const ProfitLoss = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventType, setEventType] = useState('all');

  const filteredTransactions = mockData.transactions.filter(transaction => {
    if (eventType !== 'all' && transaction.type !== eventType) {
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

  const calculateSummary = (transactions) => {
    return transactions.reduce((acc, curr) => {
      acc.totalStake += curr.stake;
      acc.totalProfit += curr.profitLoss;
      acc.totalBets += 1;
      acc.wins += curr.result === 'Won' ? 1 : 0;
      return acc;
    }, {
      totalStake: 0,
      totalProfit: 0,
      totalBets: 0,
      wins: 0
    });
  };

  const summary = calculateSummary(filteredTransactions);
  const winRate = summary.totalBets > 0 ? ((summary.wins / summary.totalBets) * 100).toFixed(1) + '%' : '0%';

  return (
    <div className="profit-loss-container">
      <div className="profit-loss-header">
        <h1>PROFIT & LOSS</h1>
      </div>

      <div className="profit-loss-content">
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
            <label className="filter-label">Event Type</label>
            <select
              className="filter-select"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              <option value="all">All Events</option>
              <option value="sports">Sports Only</option>
              <option value="casino">Casino Only</option>
            </select>
          </div>
        </div>

        <div className="summary-section">
          <div className="summary-card">
            <div className="summary-label">Total Bets</div>
            <div className="summary-value">{summary.totalBets}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Total Stake</div>
            <div className="summary-value">₹{summary.totalStake.toLocaleString()}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Total P/L</div>
            <div className={`summary-value ${summary.totalProfit >= 0 ? 'profit' : 'loss'}`}>
              ₹{Math.abs(summary.totalProfit).toLocaleString()}
              {summary.totalProfit >= 0 ? ' Profit' : ' Loss'}
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Win Rate</div>
            <div className="summary-value">{winRate}</div>
          </div>
        </div>

        {filteredTransactions.length > 0 ? (
          <table className="profit-loss-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Event</th>
                <th>Type</th>
                <th>Stake</th>
                <th>Result</th>
                <th>P/L</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.time}</td>
                  <td>{transaction.event}</td>
                  <td>
                    <span className={`event-type ${transaction.type}`}>
                      {transaction.type.toUpperCase()}
                    </span>
                  </td>
                  <td>₹{transaction.stake.toLocaleString()}</td>
                  <td>{transaction.result}</td>
                  <td className={`amount ${transaction.profitLoss >= 0 ? 'profit' : 'loss'}`}>
                    ₹{Math.abs(transaction.profitLoss).toLocaleString()}
                  </td>
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

export default ProfitLoss;
