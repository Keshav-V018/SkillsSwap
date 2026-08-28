import React,{ useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 400});
    },[]);
  return (
    <footer className="bg-[#f8f9fa] text-black border-t border-gray-200" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + short info */}
          <div className="mb-3">
            <h2 className="text-[#4f46e5] font-bold text-2xl">SkillSwap</h2>
            <p className="mt-2 text-sm text-gray-600">
              Teach what you know. Learn what you don’t. Swap skills, not money.
            </p>
          </div>

          {/* Info links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Explore</h3>
            <ul className="space-y-2 text-sm flex gap-6">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/browse" className="hover:underline">
                  Browse
                </a>
              </li>
              <li>
                <a href="/works" className="hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/safety" className="hover:underline">
                  Safety
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal + social */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-sm flex gap-6">
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>

            {/* Optional social */}
            {/* <div className="mt-4 flex gap-4 text-sm">
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">LinkedIn</a>
            </div> */}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-3 border-t border-gray-200 text-center text-xs text-gray-500">
          © 2026 SkillSwap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;