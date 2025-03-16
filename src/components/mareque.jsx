import React from 'react';


const marquee = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md bg-blue-500 text-white rounded-2xl shadow-lg p-4 animate-pulse">
        <p className="text-center font-semibold">
          We have launched 4500+ games in the new I-casino. Please note: In the new I-casino, 1 point = 100 points.
        </p>
      </Card>
    </div>
  );
};

export default marquee;