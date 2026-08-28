import React from "react";
import { ArrowRight, Mail, LockKeyhole, Eye } from "lucide-react";

const SignInform = () => {
  return (
    <form action="" className="">
      <div className="flex flex-col px-2 py-4 gap-1 justify-center relative">
        <label className="font-semibold pb-0.5">Email Address</label>
        <Mail
          size={18}
          className="absolute ml-1 left-3 top-[66%] -translate-y-1/2 text-gray-400"
        />
        <input
          type="email"
          placeholder="name@company.com"
          className="w-full border border-[#d1d5db] rounded-lg py-2 pl-8 pr-3"
          required
        />
      </div>
      <div className="flex flex-col px-2 justify-center gap-1 relative">
        <label className="font-semibold pb-0.5">Password</label>
        <LockKeyhole
          className="absolute left-4 top-[69%] -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Enter your password"
          className="w-full border border-[#d1d5db] pl-8 py-2 text-[#6b7280] rounded-lg"
          required
        />
        <Eye className="absolute right-5 top-[70%] -translate-y-1/2 text-gray-400 cursor-pointer" />
      </div>
      <div className="px-2 pt-2 flex justify-between">
        <div className="flex gap-1 px-1">
          <input type="checkbox" />
          <p className="text-[#111827]">Remember me</p>
        </div>
        <a href="/SigUp" className="text-[#4f46e5] font-medium">
          forget password?
        </a>
      </div>
      <div className="p-2">
        <button className="w-full py-2 bg-[#4f46e5] shadow-gray-300 shadow-2xl focus:scale-90 text-white rounded-lg hover:bg-[#4338ca] my-3 flex items-center justify-center">
          Sign In <ArrowRight className="ml-1" size={18} />
        </button>
      </div>
    </form>
  );
};

export default SignInform;
