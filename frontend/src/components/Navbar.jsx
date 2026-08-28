import React,{ useEffect } from "react";
import {Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(()=>{
      Aos.init({ duration: 400});
    },[]);
  return (
    <div className="text-black bg-[#f8f9fa] h-full shadow-sm" data-aos="fade-down">
      <div className="flex justify-between items-center">
        <div className="p-2 flex items-center">
          <div className="ml-2 p-2">
            <h1 className="text-[#4f46e5] cursor-pointer font-bold text-3xl">
              SkillSwap
            </h1>
          </div>
          <div className="ml-6 p-3 text-md font-semibold flex gap-4">
            <Link to="/browse" className="hover:underline hover:text-[#4f46e5]">Browse</Link>
            <a href="/works" className="hover:underline hover:text-[#4f46e5]">How it Works</a>
          </div>
        </div>
        <div className="p-2">
          <a href="/login" className="px-8 text-md font-semibold">
            Log In
          </a>
          <a
            href="/signup"
            className="px-6  py-2 mr-4 bg-[#4f46e5] p-2 rounded-2xl active:scale-90 cursor-pointer text-[#ffffff] font-bold"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
