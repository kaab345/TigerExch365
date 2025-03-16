import React, { useState } from 'react';

const LorD = () => {
  const [clearExpanded, setClearExpanded] = useState(false);
  
  const toggleClear = () => {
    setClearExpanded(!clearExpanded);
  };

  return (
    <section className="w-full">
      <div className="w-full">
        {/* Header Row with Lena and Dena on same line with 10px gap */}
        <div className="flex flex-col sm:flex-row w-full gap-0 sm:gap-2.5 mb-0">
          <div className="w-full sm:w-1/2 border border-gray-300 bg-yellow-400 text-black p-2 font-bold text-base flex justify-between mb-2.5 sm:mb-0">
            <div>Lena</div>
            <div className="text-red-600 text-right" id="lenaTotal">0.00</div>
          </div>
          <div className="w-full sm:w-1/2 border border-gray-300 bg-yellow-400 text-black p-2 font-bold text-base flex justify-between">
            <div>Dena</div>
            <div className="text-green-600 text-right" id="denaTotal">0.00</div>
          </div>
        </div>
        
        {/* Tables Row with 10px gap */}
        <div className="flex flex-col sm:flex-row w-full gap-0 sm:gap-2.5">
          {/* Lena Table */}
          <div className="w-full sm:w-1/2 mb-2.5 sm:mb-0">
            <div className="overflow-x-auto border border-gray-300">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="bg-blue-600 text-white p-2 border-r border-gray-300">User Detail</th>
                    <th className="bg-blue-800 text-white p-2 border-r border-gray-300">Balance</th>
                    <th className="bg-blue-600 text-white p-2">Action</th>
                  </tr>
                </thead>
                <tbody id="lenaList">
                  {/* Dynamic content will go here */}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Dena Table */}
          <div className="w-full sm:w-1/2">
            <div className="overflow-x-auto border border-gray-300">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="bg-blue-600 text-white p-2 border-r border-gray-300">User Detail</th>
                    <th className="bg-blue-800 text-white p-2 border-r border-gray-300">Balance</th>
                    <th className="bg-blue-600 text-white p-2">Action</th>
                  </tr>
                </thead>
                <tbody id="denaList">
                  {/* Dynamic content will go here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Clear Section */}
        <div className="flex flex-col sm:flex-row w-full mt-4">
          <div className="w-full sm:w-1/2">
            <div 
              className="border border-gray-300 bg-yellow-400 text-black p-2 font-bold text-base flex justify-between cursor-pointer"
              onClick={toggleClear}
            >
              <div>Clear</div>
              <div className="text-right">
                <i className="text-xl">{clearExpanded ? '▲' : '▼'}</i>
              </div>
            </div>
            {clearExpanded && (
              <div className="overflow-x-auto border-l border-r border-b border-gray-300">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-blue-600 text-white p-2 border-r border-gray-300">User Detail</th>
                      <th className="bg-blue-800 text-white p-2 border-r border-gray-300">Balance</th>
                      <th className="bg-blue-600 text-white p-2">Action</th>
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
      </div>
    </section>
  );
};

export default LorD;