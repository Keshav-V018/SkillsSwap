import React from "react";
import Signupleft from "../components/Signupleft";
import Signuptoggle from "../components/Signuptoggle";
import Signform from "../components/Signform";

const SignUp = () => {
  return (
    <div className="flex ">
      <Signupleft />
      <div className="h-screen flex justify-center items-center w-3/4">
        <div className="w-100">
          <div className="">
            <h1 className="py-1 text-2xl">Create your account</h1>
            <p className="text-md">Start your learning journey today.</p>
          </div>
          <Signuptoggle />
          <Signform />
          <div className="text-center">
            <p>
              Already have an account?
              <a href="/login" className="text-[#4f46e5]">
                Login In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
