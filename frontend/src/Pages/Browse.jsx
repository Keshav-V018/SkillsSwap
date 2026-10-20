import React from "react";
import Navbar from "../components/Navbar";
import { Search, MapPin, Star } from "lucide-react";
import Footer from "../components/Footer";

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
          <div className="flex flex-col md:flex-row justify-between gap-2 py-3">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6">
        <div className="w-100 rounded-2xl shadow-2xl">
          <div className="h-30 w-100 bg-red-300 rounded-t-2xl"></div>
          <div className="flex justify-between pt-3">
            <div className="relative">
              <h3 className="px-2 font-semibold text-lg">Keshav V</h3>
              <MapPin className="absolute left-1" size={18} />
              <p className="px-6">Bengaluru, Karnataka</p>
            </div>
            <div className="bg-[#38ec83] h-fit rounded-sm mr-2">
              <div className="flex gap-1 relative p-2">
                <Star size={20} strokeWidth={1} className="pt-1 text-black" />
                <p> 4.9 (12)</p>
              </div>
            </div>
          </div>
          <div className="pt-4 px-4">
            <h1 className="text-gray-500 font-medium">TEACHES</h1>
            <div className="flex pt-2 gap-2">
              <h3 className="bg-blue-200 p-2 rounded-2xl text-blue-900 font-semibold">
                Graphic Designer
              </h3>
              <h3 className="bg-blue-200 p-2 rounded-2xl text-blue-900 font-semibold">
                Figma
              </h3>
            </div>
          </div>
          <div className="pt-4 px-4">
            <h1 className="text-gray-500 font-medium">WANTS TO LEARN</h1>
            <div className="flex pt-2 gap-2 pb-4">
              <h3 className="bg-blue-200 p-2 rounded-2xl font-semibold">
                Communication
              </h3>
            </div>
            <hr />
          </div>
          <div className="flex gap-2 p-4 justify-around">
            <button className="px-8 py-2 bg-white border border-blue-500 text-blue-400 rounded-xl font-semibold active:scale-95">
              View Profile
            </button>
            <button className="px-8 py-2 bg-blue-600 text-white rounded-xl font-semibold active:scale-95">
              Propose Swap
            </button>
          </div>
        </div>
        <div className="w-100 rounded-2xl shadow-2xl">
          <div className="h-30 w-100 bg-red-300 rounded-t-2xl"></div>
          <div className="flex justify-between pt-3">
            <div className="relative">
              <h3 className="px-2 font-semibold text-lg">Keshav V</h3>
              <MapPin className="absolute left-1" size={18} />
              <p className="px-6">Bengaluru, Karnataka</p>
            </div>
            <div className="bg-[#38ec83] h-fit rounded-sm mr-2">
              <div className="flex gap-1 relative p-2">
                <Star size={20} strokeWidth={1} className="pt-1 text-black" />
                <p> 4.9 (12)</p>
              </div>
            </div>
          </div>
          <div className="pt-4 px-4">
            <h1 className="text-gray-500 font-medium">TEACHES</h1>
            <div className="flex pt-2 gap-2">
              <h3 className="bg-blue-200 p-2 rounded-2xl text-blue-900 font-semibold">
                Graphic Designer
              </h3>
              <h3 className="bg-blue-200 p-2 rounded-2xl text-blue-900 font-semibold">
                Figma
              </h3>
            </div>
          </div>
          <div className="pt-4 px-4">
            <h1 className="text-gray-500 font-medium">WANTS TO LEARN</h1>
            <div className="flex pt-2 gap-2 pb-4">
              <h3 className="bg-blue-200 p-2 rounded-2xl font-semibold">
                Communication
              </h3>
            </div>
            <hr />
          </div>
          <div className="flex gap-2 p-4 justify-around">
            <button className="px-8 py-2 bg-white border border-blue-500 text-blue-400 rounded-xl font-semibold active:scale-95">
              View Profile
            </button>
            <button className="px-8 py-2 bg-blue-600 text-white rounded-xl font-semibold active:scale-95">
              Propose Swap
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
