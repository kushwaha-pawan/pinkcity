import React from 'react';
import { FaHotel } from 'react-icons/fa';

const LuxuryHotels = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center p-10">
      <div>
        <FaHotel className="text-pink-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-2">Luxury Hotels</h1>
        <p className="text-lg text-gray-700">Top-tier stays</p>
      </div>
    </div>
  );
};

export default LuxuryHotels;