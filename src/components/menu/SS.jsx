import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const SS = () => {
  return (
    <div className="w-full border border-gray-300 p-4">
      {/* Search and New Member row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 bg-white p-2 rounded">
        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border border-gray-300 rounded-sm w-full sm:w-40"
          />
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded transition-colors">
            Search
          </button>
        </div>
        <button 
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded transition-colors w-full sm:w-auto"
          onClick={() => window.location.href = '/create-users'}
        >
          New Member
        </button>
      </div>
      
      {/* Table header */}
      <div className="w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 bg-gray-600 text-white text-left border-r border-gray-500">LOGIN</th>
              <th className="p-2 bg-red-600 text-white text-left border-r border-gray-500">NAME</th>
              <th className="p-2 bg-gray-600 text-white text-left border-r border-gray-500">BALANCE</th>
              <th className="p-2 bg-red-600 text-white text-left border-r border-gray-500">EXPOSURE</th>
              <th className="p-2 bg-gray-600 text-white text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty table body as shown in the image */}
            <tr>
              <td colSpan="5" className="p-6"></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Pagination controls */}
      <div className="flex justify-end p-2 bg-white border-t border-gray-300">
        <div className="flex">
          <button className="border border-gray-300 px-3 py-1 rounded-sm mr-1">
            <ChevronsLeft size={16} />
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-sm mr-1">
            <ChevronLeft size={16} />
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-sm mr-1 bg-green-600 text-white">
            1
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-sm mr-1">
            <ChevronRight size={16} />
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-sm">
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SS;
