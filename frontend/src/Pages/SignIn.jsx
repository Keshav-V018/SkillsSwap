import React from "react";
import { ArrowRight, Mail, LockKeyhole, Eye } from "lucide-react";
import SignInform from "../components/SignInform";

const SignIn = () => {
  return (
    <div className="flex w-full h-screen text-[#111827]">
      <div className="w-1/2 bg-[url('https://images.unsplash.com/photo-1482784160316-6eb046863ece?w=1200')] bg-cover bg-center"></div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="w-100">
          <div className="px-2 py-4">
            <h1 className="py-1 text-[#4f46e5] text-lg font-semibold">
              Skill Swap Collective
            </h1>
            <p>Welcome back! Please Enter your details</p>
          </div>
          <SignInform />
          <div className="text-center">
            <p>
              Don't have an account?
              <a href="/signup" className="text-[#4f46e5]">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
