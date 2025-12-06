// src/Components/Common/Layout/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-8 border-gray-300 border-t-8 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-700">Loading, please wait...</p>
    </div>
  );
};

export default Loading;