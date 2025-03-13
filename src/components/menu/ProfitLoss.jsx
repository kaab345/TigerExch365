import React, { useState } from "react";
import "./ProfitLoss.css";

const ProfitLoss = () => {
  const [filters, setFilters] = useState({ sport: "All", duration: "Last Month" });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="profit-loss-container">
      

      <h2 className="page-title">Profit and Loss</h2>
      <div className="filters-container">
        {[{ label: "SPORT", name: "sport", options: ["All", "Football", "Cricket", "Tennis"] },
          { label: "DURATION", name: "duration", options: ["Last Month", "Last Week", "Today"] }]
          .map(({ label, name, options }) => (
            <div className="select-container" key={name}>
              <label className="select-label">{label}</label>
              <select
                className="select-box"
                name={name}
                value={filters[name]}
                onChange={handleFilterChange}
              >
                {options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfitLoss;
