import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const ExtraFeatures = () => {
  useEffect(() => {
     console.log("aos is working");
    Aos.init({ duration: 1000 });
   
  }, []);
  return (
    <section className="bg-indigo-600 py-20" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">
          Ready to Expand Your Horizon?
        </h1>

        <p className="mt-4 leading-8">
          Join SkillSwap members already sharing, learning, and building
          community through skill exchange.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/login"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Join the Collective Today
          </a>

          <a
            href="/signup"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-indigo-500"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExtraFeatures;
