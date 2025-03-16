import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Create = () => {
  const [selectedOption, setSelectedOption] = useState('-1');
  
  const redirectToNext = () => {
    alert('Submitting form with value: ' + selectedOption);
  };
  
  return (
    <div className="w-full bg-gray-100">
      {/* Main content section - ibox */}
      <div className="w-full max-w-6xl mx-auto mt-4">
        <div className="bg-white shadow-md rounded">
          {/* ibox title - changed from black to dark orange */}
          <div className="bg-dark-orange-700 text-black p-3">
            <h5 className="m-0 font-medium">Select Upline</h5>
          </div>
          
          {/* ibox content */}
          <div className="p-4">
            <form className="my-4">
              <div className="flex flex-wrap items-center">
                <label className="w-full md:w-1/6 p-2 text-right font-medium">Select Type</label>
                <div className="w-full md:w-1/3 p-2 relative">
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                  >
                    <option value="-1">Select Parent</option>
                    <option value="sst315387">sst315387 (Ddemo)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown size={16} />
                  </div>
                </div>
                <div className="w-full md:w-1/4 p-2">
                  <button
                    onClick={redirectToNext}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded mx-2 my-1 shadow-sm"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;