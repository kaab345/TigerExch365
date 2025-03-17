import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import './SS.css';

const SS = () => {
  return (
    <div className="member-container">
      {/* Search and New Member row */}
      <div className="action-bar">
        <div className="search-group">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <button className="search-button">
            Search
          </button>
        </div>
        <button
          className="new-member-button"
          onClick={() => window.location.href = '/create-users'}
        >
          New Member
        </button>
      </div>
      
      {/* Table header */}
      <div className="table-wrapper">
        <table className="member-table">
          <thead>
            <tr>
              <th className="header-gray">LOGIN</th>
              <th className="header-red">NAME</th>
              <th className="header-gray">BALANCE</th>
              <th className="header-red">EXPOSURE</th>
              <th className="header-gray no-border-right">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty table body as shown in the image */}
            <tr>
              <td colSpan="5" className="empty-row"></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Pagination controls */}
      <div className="pagination-bar">
        <div className="pagination-controls">
          <button className="page-button">
            <ChevronsLeft size={16} />
          </button>
          <button className="page-button">
            <ChevronLeft size={16} />
          </button>
          <button className="page-button active">
            1
          </button>
          <button className="page-button">
            <ChevronRight size={16} />
          </button>
          <button className="page-button">
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SS;