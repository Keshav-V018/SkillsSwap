import React from "react";
import { Handshake, BadgeCheck } from "lucide-react";

const Signupleft = () => {
  return (
    <div className="bg-[#4f46e5] w-1/2 h-screen">
      <div className="flex flex-col justify-between h-full">
        <div className="flex p-6">
          <Handshake className="bg-white rounded p-2" size={40} />
          <h1 className="text-white text-3xl px-3">Skills Swap Collective</h1>
        </div>
        <div className="p-6 text-white ">
          <h1 className="text-4xl py-2">
            Master anything through mutual growth.
          </h1>
          <p className="pt-3">
            Join a community where your expertise is currency.
          </p>
          <p>
            Connect, learn, and teach in a supportive ecosystem of <br />{" "}
            lifelonging learners.
          </p>
        </div>
        <div className="p-6">
          <h1 className="text-gray-200 py-2">Community Trust</h1>
          <div className="flex gap-2">
            <BadgeCheck fill="#00ff00" />
            <h3 className="text-green-300 font-bold">Verfied Swappers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signupleft;
