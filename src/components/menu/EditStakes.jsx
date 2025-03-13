import React, { useState } from "react";
import "./EditStake.css";
const EditStake = () => {
  const [stakes, setStakes] = useState([
    { label: 1, value: 20 },
    { label: 2, value: 600 },
    { label: 3, value: 500 },
    { label: 4, value: 750 },
    { label: 5, value: 1500 },
    { label: 6, value: 2500 },
    { label: 7, value: 3500 },
    { label: 8, value: 10000 },
  ]);

  const handleChange = (index, field, newValue) => {
    const updatedStakes = [...stakes];
    updatedStakes[index][field] = newValue;
    setStakes(updatedStakes);
  };

  return (
    <div className="bg-amber-50 p-6 max-w-2xl mx-auto rounded-lg shadow-lg">
      <div className="grid grid-cols-2 gap-4">
        {stakes.map((stake, index) => (
          <React.Fragment key={index}>
            <div>
              <label className="block font-semibold text-gray-600 mb-1">
                STAKE LABEL {stake.label}
              </label>
              <input
                type="number"
                value={stake.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-600 mb-1">
                STAKE VALUE {stake.label}
              </label>
              <input
                type="number"
                value={stake.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <button className="mt-6 w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition">
        SAVE
      </button>
    </div>
  );
};

export default EditStake;
