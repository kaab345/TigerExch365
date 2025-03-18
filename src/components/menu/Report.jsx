import React from 'react';
import './Report.css';

const Report = () => {
  return (
    <div className="report-settings-container">
      <div className="header">
        <h2>Report Settings</h2>
      </div>
      
      <div className="settings-grid">
        <a 
          href="/Report_Detail" 
          className="settings-link blue-button"
          aria-label="Report Details"
        >
          Report Details
        </a>
        
        <a 
          href="/total-report" 
          className="settings-link gray-button"
          aria-label="Total Report"
        >
          Total Report
        </a>
        
        <a 
          href="/Shown" 
          className="settings-link blue-button"
          aria-label="Show Details"
        >
          Show Details
        </a>
        
        <a 
          href="/Moniotor" 
          className="settings-link gray-button"
          aria-label="Monitoring"
        >
          Monitoring
        </a>
      </div>
    </div>
  );
};

export default Report;