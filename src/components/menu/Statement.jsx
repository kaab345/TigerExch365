import React from "react";
import "./Statement.css";
const Statement = () => {
  return (
    <div className="p-4 bg-orange-50 min-h-screen">
      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block text-sm font-semibold">SPORT</label>
          <select className="border-b-2 w-full p-1">
            <option>All</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold">TYPE</label>
          <select className="border-b-2 w-full p-1">
            <option>All</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold">DURATION</label>
          <select className="border-b-2 w-full p-1">
            <option>Yesterday</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2">NO</th>
              <th className="p-2">DATE</th>
              <th className="p-2">COMM IN</th>
              <th className="p-2">COMM OUT</th>
              <th className="p-2">AMOUNT</th>
              <th className="p-2">TOTAL</th>
              <th className="p-2">BALANCE</th>
              <th className="p-2">TYPE</th>
              <th className="p-2">D/C</th>
              <th className="p-2">DESC</th>
              <th className="p-2">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="border-t text-center">
              <td className="p-2">1</td>
              <td className="p-2">2025-02-26</td>
              <td className="p-2">100</td>
              <td className="p-2">50</td>
              <td className="p-2">500</td>
              <td className="p-2">450</td>
              <td className="p-2">900</td>
              <td className="p-2">Bet</td>
              <td className="p-2">C</td>
              <td className="p-2">Win</td>
              <td className="p-2 text-blue-600 cursor-pointer">View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statement;
