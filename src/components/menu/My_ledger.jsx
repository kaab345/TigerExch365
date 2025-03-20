import React, { useState } from 'react';
import './Ledger.css'; // Import the CSS file

const My_ledger = () => {
  const [startDate, setStartDate] = useState('2025-03-01');
  const [endDate, setEndDate] = useState('2025-03-16');
  const [entryType, setEntryType] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample data - in a real app, this would come from an API
  const [tableData, setTableData] = useState([]);
  
  // Mock totals - in a real app, these would be calculated from the data
  const [lenaTotal, setLenaTotal] = useState('0.00');
  const [denaTotal, setDenaTotal] = useState('0.00');
  const [balanceText, setBalanceText] = useState('0 Lena Hai');
  
  const handleSubmit = () => {
    // In a real app, this would fetch data based on the filter criteria
    console.log("Filtering with:", { startDate, endDate, entryType });
    // For now, we're just keeping the mock data
  };
  
  return (
    <div className="lena-dena-container p-4 sm:p-6 container mx-auto">
      {/* Header */}
      <div className="lena-dena-header text-xl font-semibold mb-4">
        Company Lena Dena
      </div>
      
      {/* Filter section */}
      <div className="filter-container grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="form-group w-full">
          <label htmlFor="dateFrom">Date From</label>
          <input 
            id="dateFrom"
            type="date" 
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        
        <div className="form-group w-full">
          <label htmlFor="dateTo">Date To</label>
          <input 
            id="dateTo"
            type="date" 
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        
        <div className="form-group w-full">
          <label htmlFor="entryType">Entry Type</label>
          <select 
            id="entryType"
            className="form-control"
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Settlement">Settlement</option>
          </select>
        </div>
        
        <button 
          className="btn-submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      
      {/* Summary section */}
      <div className="summary-container grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="summary-item text-center">
          <span className="summary-label">Lena:</span>
          <div className="summary-value white-text">
            {lenaTotal}
          </div>
        </div>
        
        <div className="summary-item text-center">
          <span className="summary-label">Dena:</span>
          <div className="summary-value green-text">
            {denaTotal}
          </div>
        </div>
        
        <div className="summary-item text-center">
          <span className="summary-label">Balance:</span>
          <div className="summary-value white-text">
            {balanceText}
          </div>
        </div>
      </div>
      
      {/* Table section */}
      <div className="table-container overflow-x-auto mt-4 rounded border">
        <table className="data-table min-w-full">
          <thead>
            <tr style={{color:'black'}}>
              <th className="dark orange-header" style={{color:'black'}}>Date</th>
              <th className="white-header" style={{color:'black'}}>Collection Name</th>
              <th className="white-header" style={{color:'black'}}>Debit</th>
              <th className="White-header" style={{color:'black'}}>Credit</th>
              <th className="white-header" style={{color:'black'}}>Balance</th>
              <th className="white-header" style={{color:'black'}}>Payment Type</th>
              <th className="white-header" style={{color:'black'}}>Remark</th>
              <th className="white-header" style={{color:'black'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '15px' }}>No data available</td>
              </tr>
            ) : (
              tableData.map((row, index) => (
                <tr key={index}>
                  {/* Table rows would go here */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="pagination-container flex justify-center items-center mt-4">
        <div className="page-item disabled">«</div>
        <div className="page-item disabled">‹</div>
        <div className="page-item active">1</div>
        <div className="page-item disabled">›</div>
        <div className="page-item disabled">»</div>
      </div>
    </div>
  );
};

export default My_ledger;