import { useState } from "react";

const Signuptoggle = () => {
  const [isLearner, setIsLearner] = useState(true);
  return (
    <div className="w-100 bg-gray-300 rounded-lg mt-2">
      <button
        className={`w-1/2 h-10 rounded-lg transition-all cursor-pointer ${
          isLearner
            ? "bg-indigo-600 text-white"
            : "bg-transparent text-gray-700"
        }`}
        onClick={() => setIsLearner(true)}
      >
        Join as Learner
      </button>
      <button
        className={`w-1/2 h-10 rounded-lg transition-all cursor-pointer ${
          !isLearner
            ? "bg-indigo-600 text-white"
            : "bg-transparent text-gray-700"
        }`}
        onClick={() => setIsLearner(false)}
      >
        Join as Mentor
      </button>
    </div>
  );
};

export default Signuptoggle;
