import React, { useState } from 'react';
import './Lena.css'; // Import the CSS file

const LorD = () => {
  const [clearExpanded, setClearExpanded] = useState(false);
  
  const toggleClear = () => {
    setClearExpanded(!clearExpanded);
  };

  return (
    <section className="lord-container">
      <div className="lord-content">
        {/* Header Row with Lena and Dena on same line */}
        <div className="header-row">
          <div className="card">
            <div>Lena</div>
            <div className="text-red" id="lenaTotal">0.00</div>
          </div>
          <div className="card">
            <div>Dena</div>
            <div className="text-green" id="denaTotal">0.00</div>
          </div>
        </div>
        
        {/* Tables Row */}
        <div className="tables-row">
          {/* Lena Table */}
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="table-header">User Detail</th>
                  <th className="table-header-dark">Balance</th>
                  <th className="table-header-last">Action</th>
                </tr>
              </thead>
              <tbody id="lenaList">
                {/* Dynamic content will go here */}
              </tbody>
            </table>
          </div>
          
          {/* Dena Table */}
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="table-header">User Detail</th>
                  <th className="table-header-dark">Balance</th>
                  <th className="table-header-last">Action</th>
                </tr>
              </thead>
              <tbody id="denaList">
                {/* Dynamic content will go here */}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Clear Section */}
        <div className="clear-section">
          <div className="card clear-toggle" onClick={toggleClear}>
            <div>Clear</div>
            <div>
              <i style={{ fontSize: '1.25rem' }}>{clearExpanded ? '▲' : '▼'}</i>
            </div>
          </div>
          {clearExpanded && (
            <div className="table-container" style={{ borderTop: 'none' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="table-header">User Detail</th>
                    <th className="table-header-dark">Balance</th>
                    <th className="table-header-last">Action</th>
                  </tr>
                </thead>
                <tbody id="clearList">
                  {/* Dynamic content will go here */}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LorD;