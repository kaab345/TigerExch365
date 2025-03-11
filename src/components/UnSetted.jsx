import React, { useState } from "react";
import "./Un_Setted.css";

const UnSetted = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 border-collapse">
        <thead>
          <tr className="bg-orange-500 text-white text-left">
            <th className="px-4 py-2">NO</th>
            <th className="px-4 py-2">EVENT TYPE</th>
            <th className="px-4 py-2">EVENT NAME</th>
            <th className="px-4 py-2">MARKET TYPE</th>
            <th className="px-4 py-2">RUNNER</th>
            <th className="px-4 py-2">RATE</th>
            <th
              className="px-4 py-2 cursor-pointer hover:bg-orange-600 transition"
              onClick={() => setShowContent(!showContent)}
            >
              UnSetted
            </th>
            <th className="px-4 py-2">STAKE</th>
            <th className="px-4 py-2">COMM IN</th>
            <th className="px-4 py-2">COMM OUT</th>
            <th className="px-4 py-2">PROFIT</th>
            <th className="px-4 py-2">LOSS</th>
            <th className="px-4 py-2">DATE/TIME</th>
          </tr>
        </thead>
        <tbody>
          {/* Ensure table always has at least one row */}
          <tr className="border-b">
            <td colSpan="13" className="px-4 py-2 text-center">
              Sample Data Row
            </td>
          </tr>

          {/* Conditionally render additional row */}
          {showContent && (
            <tr>
              <td colSpan="13" className="px-4 py-2 bg-gray-100 text-center">
                Additional content shown when "Un-Setted" is clicked
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UnSetted;
