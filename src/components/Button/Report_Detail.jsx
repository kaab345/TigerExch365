import React, { useState, useEffect } from 'react';
import './Report_Detail.css';

const Report_Detail = () => {
  const [userType, setUserType] = useState("-1");
  const [user, setUser] = useState("");
  const [reportType, setReportType] = useState("-1");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Initialize with today's date
    const today = new Date().toISOString().split('T')[0];
    setStartDate(today);
    setEndDate(today);
  }, []);

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    // In a real application, you would fetch users based on the selected user type
  };

  const handleShowReport = () => {
    // In a real application, you would fetch report data based on selected filters
    // For now, let's just set some dummy data
    const dummyData = [
      {
        sno: 1,
        parentId: "P001",
        parentName: "Admin",
        userName: "John Doe",
        userId: "U001",
        type: "CN",
        old: "OldValue",
        new: "NewValue",
        cOld: "OldComm",
        cNew: "NewComm",
        dateTime: "2025-03-18 10:30:45",
        doneBy: "Admin",
        ipAddress: "192.168.1.1",
        remark: "Name changed"
      }
    ];
    setReportData(dummyData);
    setTotalPages(1);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return (
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pages}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    );
  };

  return (
    <div className="report-container">
      <div className="report-header">
        <h5>Report Update Details</h5>
      </div>
      
      <div className="report-row">
        <div className="report-col-12">
          <div className="content-bg">
            <div className="report-col-3">
              <label className="report-label">User Type
                <select 
                  className="report-select"
                  value={userType}
                  onChange={handleUserTypeChange}
                >
                  <option value="-1">Select User Type</option>
                  <option value="4">SS</option>
                  <option value="5">SA</option>
                  <option value="6">SP</option>
                </select>
              </label>
            </div>
            
            <div className="report-col-3">
              <label className="report-label">User
                <select 
                  className="report-select"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                >
                  <option value="">Select User</option>
                  {/* Users would be populated based on user type selection */}
                </select>
              </label>
            </div>
            
            <div className="report-col-3">
              <label className="report-label">Report Type
                <select 
                  className="report-select"
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                >
                  <option value="-1">Select Type</option>
                  <option value="CN">Name</option>
                  <option value="PDC">Mobile App Charge</option>
                  <option value="DW">Limit</option>
                  <option value="MC">Match Commission</option>
                  <option value="SC">Session Commission</option>
                  <option value="CC">Casino Commission</option>
                  <option value="PR">Share</option>
                  <option value="ST">Status</option>
                </select>
              </label>
            </div>
            
            <div className="report-col-3">
              <label className="report-label">Date From
                <input 
                  type="date" 
                  className="report-date-input"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      
      <div className="report-row">
        <div className="report-col-12">
          <div className="content-bg">
            <div className="report-col-3">
              <label className="report-label">Date To
                <input 
                  type="date" 
                  className="report-date-input"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </label>
            </div>
            
            <div className="report-col-3">
              <label className="report-label">Action<br />
                <button 
                  type="button" 
                  className="report-btn"
                  onClick={handleShowReport}
                >
                  Show Report
                </button>
              </label>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      
      <div className="report-content">
        <div className="table-responsive">
          <table className="report-table">
            <thead>
              <tr>
                <th className="th-light">SNo.</th>
                <th className="th-dark">Parent ID</th>
                <th className="th-light">Parent Name</th>
                <th className="th-dark">User Name</th>
                <th className="th-light">User ID</th>
                <th className="th-dark">Type</th>
                <th className="th-light">Old</th>
                <th className="th-dark">New</th>
                <th className="th-light">COld</th>
                <th className="th-dark">CNew</th>
                <th className="th-dark">Date Time</th>
                <th className="th-light">Done By</th>
                <th className="th-dark">IP Address</th>
                <th className="th-dark">Remark</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr key={index}>
                  <td>{item.sno}</td>
                  <td>{item.parentId}</td>
                  <td>{item.parentName}</td>
                  <td>{item.userName}</td>
                  <td>{item.userId}</td>
                  <td>{item.type}</td>
                  <td>{item.old}</td>
                  <td>{item.new}</td>
                  <td>{item.cOld}</td>
                  <td>{item.cNew}</td>
                  <td>{item.dateTime}</td>
                  <td>{item.doneBy}</td>
                  <td>{item.ipAddress}</td>
                  <td>{item.remark}</td>
                </tr>
              ))}
              {reportData.length === 0 && (
                <tr>
                  <td colSpan="14" className="no-data">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="report-row">
        <div className="report-col-12">
          <div className="pagination-container">
            {renderPagination()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report_Detail;