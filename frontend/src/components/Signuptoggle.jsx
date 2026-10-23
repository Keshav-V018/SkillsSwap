import { useState } from "react";

const Signuptoggle = ({ role, setRole}) => {
  return (
    <div className="w-100 bg-gray-300 rounded-lg mt-2">
      <button
        className={`w-1/2 h-10 rounded-lg transition-all cursor-pointer ${
          role == "learner"
            ? "bg-indigo-600 text-white"
            : "bg-transparent text-gray-700"
        }`}
        onClick={() => setRole("learner")}
      >
        Join as Learner
      </button>
      <button
        className={`w-1/2 h-10 rounded-lg transition-all cursor-pointer ${
          role == "mentor"
            ? "bg-indigo-600 text-white"
            : "bg-transparent text-gray-700"
        }`}
        onClick={() => setRole("mentor")}
      >
        Join as Mentor
      </button>
    </div>
  );
};

export default Signuptoggle;
