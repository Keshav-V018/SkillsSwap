import React from "react";
import Navbar from "../components/Navbar";
import { Search, MapPin } from "lucide-react";

const Browse = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />
      <div className="w-full pt-7 px-10">
        <h1 className="text-4xl font-bold py-2">Browse SKills</h1>
        <p className="text-base leading-relaxed">
          Find the Perfect Exchange partner. Search by Skill,Category, or
          location to <br /> discover people eager to trade knowlegde.
        </p>
      </div>

      <div className="py-7 px-10">
        <div className="w-full bg-white p-8 rounded-2xl shadow-xl">
          <div className="relative">
            <Search className="absolute top-3 left-4 p-1" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search for Skills (e.g. 'Spanish','Python','Guitar')"
              className="px-12 w-full border border-black py-3 rounded-xl focus:shadow-[0_0_15px_rgba(59,130,246,0.5)] focus:shadow-blue-200 outline-none focus:border-none transition-all duration-200 font-medium"
            />
          </div>
          <div className="flex justify-between gap-2 py-3">
            <div className="border pr-3 border-black rounded-xl">
              <select
                name="category"
                className="px-4 w-80 py-2  bg-transparent outline-none"
              >
                <option value="All  Category" defaultChecked>
                  All Category
                </option>
                <option value="Technology">Technology</option>
                <option value="Languages">Languages</option>
                <option value="Arts&Musics">Arts & Musics</option>
                <option value="LifeStyle">LifeStyle</option>
              </select>
            </div>
            <div className="border pr-3 border-black rounded-xl">
              <select
                name="Any Mode"
                className="px-4 w-80  py-2 bg-transparent outline-none"
              >
                <option value="Any Mode" defaultChecked>
                  Any Mode
                </option>
                <option value="Online">Online</option>
                <option value="Offine">In Person</option>
              </select>
            </div>
            <div>
              <div className="relative">
                <MapPin
                  strokeWidth={2}
                  size={18}
                  className="absolute top-3 left-3"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="px-10 py-2 border border-gray-100 w-90 rounded-xl focus:shadow-[0_0_15px_rgba(59,130,246,0.5)] focus:shadow-blue-200 transition-all duration-200 outline-none"
                />
              </div>
            </div>
            <div>
              <button
                className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-xl"
                type="submit"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-11 py-2 bg w-full font-semibold">
        <h3>Showing results for your search</h3>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Browse;
