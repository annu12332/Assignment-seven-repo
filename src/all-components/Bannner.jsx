import React from "react";
import Vector from "../assets/vector1.png";

const Banner = ({ inProgressCount, resolvedTaskCount }) => {
  return (
    <div className="grid grid-cols-1 mx-2 md:grid-cols-2 gap-4 mt-10">
     
      <div className="flex items-center justify-between bg-gradient-to-r from-[#5741e8] to-purple-600 rounded-md p-4">
        <img className="w-16 md:w-24 object-contain " src={Vector} alt="vector" />
        <div className="text-center">
          <h1 className="text-sm text-white">In-Progress</h1>
          <h2 className="text-white text-2xl font-bold">{inProgressCount}</h2>
        </div>
        <img className="w-16 md:w-24 h-fit object-contain scale-x-[-1]" src={Vector} alt="vector"
        />
      </div>

      
      <div className="flex items-center justify-between bg-gradient-to-r from-[#4bed7c] to-green-600 rounded-md p-4">
        <img className="w-16 md:w-24 object-contain" src={Vector} alt="vector" />
        <div className="text-center">
          <h1 className="text-sm text-white">Resolved</h1>
          <h2 className="text-white text-2xl font-bold">{resolvedTaskCount}</h2>
        </div>
        <img className="w-16 md:w-24 object-contain scale-x-[-1]"  src={Vector}  alt="vector"
        />
      </div>
    </div>
  );
};

export default Banner;

