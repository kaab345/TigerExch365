import React from 'react';
import './Dead_Users.css';

const Report = () => {
  return (
    <div className="report-settings-container">
      <div className="header">
        <h2>Report Settings</h2>
      </div>
      
      <div className="settings-grid">
        <button className="settings-button dark-button">
          Report Details
        </button>
        
        <button className="settings-button red-button">
          Total Report
        </button>
        
        <button className="settings-button dark-button">
          Show Details
        </button>
        
        <button className="settings-button red-button">
          Monitoring
        </button>
      </div>
    </div>
  );
};

export default Report;