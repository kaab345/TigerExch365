import React, { useState } from "react";
import "./Un_Setted.css";
import { FaSpinner, FaSort, FaSearch } from "react-icons/fa";

const UnSetted = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // Sample data - replace with actual API data
  const sampleData = [
    {
      id: 1,
      eventType: "Cricket",
      eventName: "India vs Australia",
      marketType: "Match Odds",
      runner: "India",
      rate: 1.85,
      status: "Pending",
      stake: 1000,
      commIn: 2,
      commOut: 0,
      profit: 850,
      loss: 0,
      dateTime: "2025-03-15 14:30"
    },
    {
      id: 2,
      eventType: "Soccer",
      eventName: "Manchester United vs Chelsea",
      marketType: "Over/Under",
      runner: "Over 2.5",
      rate: 2.1,
      status: "Pending",
      stake: 500,
      commIn: 2,
      commOut: 0,
      profit: 550,
      loss: 0,
      dateTime: "2025-03-15 20:00"
    }
  ];

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredData = sampleData.filter(bet => 
    Object.values(bet).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    if (sortDirection === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  const TableHeader = ({ label, field }) => (
    <th 
      className="px-4 py-3 cursor-pointer hover:bg-orange-600 transition"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-2">
        {label}
        <FaSort className={sortField === field ? "opacity-100" : "opacity-50"} />
      </div>
    </th>
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Un-settled Bets</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search bets..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-orange-500">
            <tr className="text-white text-left">
              <TableHeader label="NO" field="id" />
              <TableHeader label="EVENT TYPE" field="eventType" />
              <TableHeader label="EVENT NAME" field="eventName" />
              <TableHeader label="MARKET TYPE" field="marketType" />
              <TableHeader label="RUNNER" field="runner" />
              <TableHeader label="RATE" field="rate" />
              <TableHeader label="STATUS" field="status" />
              <TableHeader label="STAKE" field="stake" />
              <TableHeader label="COMM IN" field="commIn" />
              <TableHeader label="COMM OUT" field="commOut" />
              <TableHeader label="PROFIT" field="profit" />
              <TableHeader label="LOSS" field="loss" />
              <TableHeader label="DATE/TIME" field="dateTime" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="13" className="px-4 py-8 text-center">
                  <FaSpinner className="animate-spin inline-block mr-2" />
                  Loading bets...
                </td>
              </tr>
            ) : sortedData.length === 0 ? (
              <tr>
                <td colSpan="13" className="px-4 py-8 text-center text-gray-500">
                  No un-settled bets found
                </td>
              </tr>
            ) : (
              sortedData.map((bet) => (
                <tr 
                  key={bet.id} 
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3">{bet.id}</td>
                  <td className="px-4 py-3">{bet.eventType}</td>
                  <td className="px-4 py-3">{bet.eventName}</td>
                  <td className="px-4 py-3">{bet.marketType}</td>
                  <td className="px-4 py-3">{bet.runner}</td>
                  <td className="px-4 py-3">{bet.rate}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      {bet.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{bet.stake}</td>
                  <td className="px-4 py-3">{bet.commIn}%</td>
                  <td className="px-4 py-3">{bet.commOut}%</td>
                  <td className="px-4 py-3 text-green-600">
                    {bet.profit > 0 ? bet.profit : '-'}
                  </td>
                  <td className="px-4 py-3 text-red-600">
                    {bet.loss > 0 ? bet.loss : '-'}
                  </td>
                  <td className="px-4 py-3">{bet.dateTime}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnSetted;
