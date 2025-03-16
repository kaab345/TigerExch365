import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';

const SelectUpline = () => {
  const [selectedOption, setSelectedOption] = useState('-1');
  const navigate = useNavigate();

  const redirectToNext = () => {
    if (selectedOption === '-1') {
      alert('Please select a valid Upline.');
      return;
    }
    navigate('/userform');
  };

  return (
    <div className="select-upline-container">
      <div className="header">
        <h2>Select Upline</h2>
      </div>
      
      <div className="content-section">
        <div className="form-row">
          <div className="label-container">
            <label>Select Type</label>
          </div>
          
          <div className="dropdown-container">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="dropdown"
            >
              <option value="-1">Select Parent</option>
              <option value="sst315387">sst315387 (Ddemo)</option>
            </select>
          </div>
          
          <div className="button-container">
            <button
              onClick={redirectToNext}
              className="submit-button"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUpline;