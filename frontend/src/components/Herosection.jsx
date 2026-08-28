import React,{ useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Herosection = () => {
  useEffect(()=>{
    Aos.init({ duration: 600});
  },[]);
  return (
    <section data-aos="zoom-out">
      <div className="relative w-full bg-[url('https://images.unsplash.com/photo-1639718773135-729b3069cecc?w=3840&q=100')] h-140 bg-cover bg-center bg-no-repeat flex flex-col justify-center px-20">
        <div className="absolute inset-0 bg-white/70 "></div>
        <div className="relative mt-20 p-4">
          <h1 className="text-4xl  font-semibold py-2">
            Swap Skills, Not Money
          </h1>
          <p className="pb-4 text-md">
            Tech whatever you know, Learn what you don't. Connect with people
            around you <br /> In a borderless marketplace of human potential.
          </p>
        </div>
        <div className="relative flex gap-4 px-4">
          <a
            href="/signup"
            className="px-6 py-3 rounded-lg shadow-2xl bg-[#4f46e5] text-white font-medium active:scale-95"
          >
            Get Started
          </a>
          <a
            href="/browse"
            className="px-6 py-3 rounded-lg shadow-2xl border border-[#c5bdbdbb] text-[#4f46e5] cursor:pointer font-bold active:scale-95 hover:bg-[#c5bdbdbb]"
          >
            Browse Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
