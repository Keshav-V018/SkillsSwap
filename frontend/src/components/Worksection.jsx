import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { UserPlus, Search, CircleStar, HeartHandshake } from "lucide-react";

const Worksection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);
  return (
    <section data-aos="fade-up">
      <div className="bg-white py-16 max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-gray-900 text-2xl font-semibold p-2">
            How it Works
          </h1>
          <p>
            Joining our collections is simple. Follow these four steps to start
            your <br /> growth journey.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20 pl-8">
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          <div>
            <div>
              <div className="bg-[#D1FAE5] w-fit p-3 my-2 rounded-lg hover:scale-120 transition-all duration-400">
                <UserPlus size={30} className="text-emerald-700 " />
              </div>
              <h1 className="text-xl py-2 font-semibold">1. Create Profile</h1>
              <p className="text-sm text-gray-600 leading-6">
                Sign Up and list the expertise you're willing <br /> to share
                with the community
              </p>
            </div>
          </div>
          <div className="">
            <div className="bg-[#EDE9FE] w-fit p-3 my-2 rounded-lg hover:scale-120 transition-all duration-400">
              <Search size={30} className="text-violet-700" />
            </div>
            
            <h1 className="text-xl py-2 font-semibold">2. Discover</h1>
            <p className="text-sm text-gray-600 leading-6">
              Browse our marketplace to find the people <br /> teaching the
              specific skills you want to <br />
              learn.
            </p>
          </div>
          <div className="">
            <div className="bg-[#FFEDD5] w-fit p-3 my-2 rounded-lg hover:scale-120 transition-all duration-400">
              <HeartHandshake size={30} className="text-orange-700" />
            </div>
            <h1 className="text-xl py-2 font-semibold">3. Propose Swap</h1>
            <p className="text-sm text-gray-600 leading-6">
              Send a message and agree on a session <br />
              scheduled that works for both of you.
            </p>
          </div>
          <div>
            <div className="bg-emerald-100 w-fit p-3 my-2 rounded-lg hover:scale-120 transition-all duration-400">
              <CircleStar size={30} className="text-emerald-700" />
            </div>
            <h1 className="text-xl py-2 font-semibold">4. Complete & Grow</h1>
            <p className="text-sm text-gray-600 leading-6">
              Complete your sessions, leave feedback, <br /> and build your
              community reputation.
            </p>
          </div>
          <div className="absolute top-80 left-0 right-0 h-0.5 bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Worksection;
