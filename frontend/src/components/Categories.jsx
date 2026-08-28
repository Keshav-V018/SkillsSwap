import React, { useEffect } from "react";
import { ArrowRight, Dumbbell, Globe, PenTool } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  return (
    <section data-aos="fade-up">
      <div className="bg-[#f8f9fa] py-10">
        <div className="flex justify-between">
          <div className="px-8">
            <h1 className="text-2xl font-semibold py-1">Explore Categories</h1>
            <p className="text-xm text-gray-600">
              Whatever you want to learn, there's a swapper for it.
            </p>
          </div>
          <div>
            <a
              href="/signin"
              className="flex items-center px-7 pt-10 text-[#433be2]"
            >
              View All Categories{" "}
              <ArrowRight
                color="#433be2"
                strokeWidth={1.5}
                size={18}
                className="ml-1"
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-3 gap-2 h-147.5 mt-10 px-6">
          <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?w=1200&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Text */}
            <div className="relative z-10 flex h-full flex-col justify-end p-6">
              <h1 className="text-3xl font-bold text-white">Programming</h1>

              <p className="mt-1 text-gray-200">
                Python, React, Data Science & more
              </p>
            </div>
          </div>

          <div className="group relative col-span-2 row-span-1 overflow-hidden rounded-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=3840&q=100')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Text */}
            <div className="relative z-10 flex h-full flex-col justify-end p-6">
              <h1 className="text-3xl font-bold text-white">Music</h1>

              <p className="mt-1 text-gray-200">
                Guitar, Piano, Voice training
              </p>
            </div>
          </div>

          <div className="bg-emerald-200 rounded-2xl hover:shadow-2xl transition-all duration-400">
            <div className="flex my-15 justify-center items-center flex-col">
              <Globe size={36} color="#000000" strokeWidth={1.5} />
              <h1 className="py-2 text-xl">Languages</h1>
            </div>
          </div>

          <div className="bg-violet-600 rounded-2xl hover:shadow-2xl transition-all duration-400">
            <div className="flex my-15 justify-center items-center flex-col">
              <PenTool size={36} color="#ffffff" strokeWidth={1.5} />
              <h1 className="py-2 text-xl text-white">Design</h1>
            </div>
          </div>

          <div className="group relative col-span-1 overflow-hidden rounded-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215842964-222b430dc094?w=3840&q=100')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Text */}
            <div className="relative z-10 flex h-full flex-col justify-end p-6">
              <h1 className="text-3xl font-bold text-white">Business</h1>
            </div>
          </div>

          <div className="bg-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-400">
            <div className="flex my-15 justify-center items-center flex-col">
              <Dumbbell color="#433be2" strokeWidth={1.5} size={36} />
              <h1 className="py-2 text-xl">Fitness</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
