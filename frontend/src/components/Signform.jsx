import React from "react";
import { LockKeyhole, Eye, Mail, ArrowRight, MapPin, User } from "lucide-react";

const Signform = () => {
  return (
    <form>
      <div className="flex flex-col px-2 py-4 gap-1 justify-center relative">
        <User className="absolute left-4 top-[64%] -translate-y-1/2 text-gray-400" />
        <label className="font-semibold pb-0.5">Full Name</label>
        <input
          type="text"
          placeholder="Alexa Rivera"
          className="w-full border border-[#d1d5db] rounded-lg py-2 pl-9 pr-3"
          required
        />
      </div>
      <div className="flex flex-col px-2  gap-1 justify-center relative">
        <label className="font-semibold pb-0.5">Email Address</label>
        <Mail
          size={18}
          className="absolute ml-1 left-4 top-[72%] -translate-y-1/2 text-gray-400"
        />
        <input
          type="email"
          placeholder="name@company.com"
          className="w-full border border-[#d1d5db] rounded-lg py-2 pl-8 pr-3"
          required
        />
      </div>
      <div className="flex flex-col px-2 pt-4 pb-3 gap-1 justify-center relative">
        <label className="font-semibold pb-0.5">Primary Skill Area</label>
        <MapPin
          size={20}
          className="absolute left-4 top-[66%] -translate-y-1/2 text-gray-400"
        />
        <select
          name="Select an area"
          className="w-full border border-[#d1d5db] pl-6 py-2 text-[#6b7280] rounded-lg"
        >
          <option disabled selected>
            Select an area
          </option>
          <option value="Design & Creative">Design & Creative</option>
          <option value="Development & IT">Development & IT</option>
          <option value="Business & Marketing">Business & Marketing</option>
          <option value="Language">Language</option>
          <option value="Lifestyles & wellness">Lifestyles & wellness</option>
        </select>
      </div>
      <div className="flex flex-col px-2 justify-center gap-1">
        <label className="font-semibold pb-0.5">Password</label>
        <div className="relative">
          <LockKeyhole
            className="absolute left-3 top-[50%] -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Enter your password"
            className="w-full border border-[#d1d5db] pl-8 py-2 text-[#6b7280] rounded-lg"
            required
          />
          <Eye className="absolute right-3 top-[50%] -translate-y-1/2 text-gray-400 cursor-pointer" />
        </div>
        <p className="text-xs">
          Minimum 8 characters with at least one symbol.
        </p>
      </div>
      <div className="p-2">
        <button className="w-full py-2 bg-[#4f46e5] shadow-gray-300 shadow-2xl focus:scale-90 text-white rounded-lg hover:bg-[#4338ca] mt-2 flex items-center justify-center">
          Sign In <ArrowRight className="ml-1" size={18} />
        </button>
      </div>
    </form>
  );
};

export default Signform;
