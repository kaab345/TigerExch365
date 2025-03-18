import React, { useState } from 'react';
import './UnSettledBets.css';

const mockBets = {
  sports: [
    {
      id: 1,
      event: 'Manchester United vs Liverpool',
      market: 'Match Odds',
      selection: 'Manchester United',
      odds: 2.5,
      stake: 1000,
      type: 'back',
      placedAt: '2024-01-20 14:30'
    },
    {
      id: 2,
      event: 'Real Madrid vs Barcelona',
      market: 'Over/Under 2.5',
      selection: 'Over 2.5',
      odds: 1.95,
      stake: 500,
      type: 'lay',
      placedAt: '2024-01-20 16:45'
    }
  ],
  casino: [
    {
      id: 3,
      event: 'Blackjack Table 1',
      market: 'Player Hand',
      selection: 'Player Win',
      odds: 2.0,
      stake: 200,
      type: 'back',
      placedAt: '2024-01-20 18:15'
    }
  ]
};

const UnSettledBets = () => {
  const [activeTab, setActiveTab] = useState('sports');

  const renderBetsTable = (bets) => {
    if (!bets || bets.length === 0) {
      return (
        <div className="empty-message">
          No unsettled bets found for this category.
        </div>
      );
    }

    return (
      <div className="table-container">
        <table className="bets-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Market</th>
              <th>Selection</th>
              <th>Type</th>
              <th>Odds</th>
              <th>Stake</th>
              <th>Placed At</th>
            </tr>
          </thead>
          <tbody>
            {bets.map((bet) => (
              <tr key={bet.id}>
                <td data-label="Event">{bet.event}</td>
                <td data-label="Market">{bet.market}</td>
                <td data-label="Selection">{bet.selection}</td>
                <td data-label="Type">
                  <span className={`bet-type ${bet.type}`}>
                    {bet.type.toUpperCase()}
                  </span>
                </td>
                <td data-label="Odds">{bet.odds}</td>
                <td data-label="Stake">₹{bet.stake.toLocaleString()}</td>
                <td data-label="Placed At">{bet.placedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="unsettled-bets-container">
      <div className="unsettled-header">
        <h1>UNSETTLED BETS</h1>
      </div>

      <div className="tabs-container">
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'sports' ? 'active' : ''}`}
            onClick={() => setActiveTab('sports')}
          >
            Sports
          </button>
          <button
            className={`tab-button ${activeTab === 'casino' ? 'active' : ''}`}
            onClick={() => setActiveTab('casino')}
          >
            Casino
          </button>
        </div>

        {renderBetsTable(mockBets[activeTab])}
      </div>
    </div>
  );
};

export default UnSettledBets;