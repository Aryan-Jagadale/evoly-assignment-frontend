import React, { useState } from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import Tooltip from "../followreminder/components/Tooltip";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <>
      <nav className="w-full  p-2 md:p-4">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-10">
          <div>
            <div className="flex items-center justify-end py-3 md:py-5 md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    
                  ) : (
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className=" text-slate-500 hover:text-slate-900 relative">
                  <div
                    onMouseEnter={() => setTooltipVisible(true)}
                    onMouseLeave={() => {
                      setTooltipVisible(false);
                    }}
                  >
                    <AiOutlineInfoCircle className="cursor-pointer" />
                  </div>
                  {
                    tooltipVisible && <Tooltip/>
                  }
                </li>
                <li className="text-slate-400 hover:text-slate-900 ">
                  <button className="group relative px-4 py-2 text-sm overflow-hidden rounded-md bg-blue-500  font-bold text-white cursor-not-allowed">
                    Settings
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr className="w-4/5 mx-auto h-[1px] border bg-black" />
    </>
  );
};

export default Navbar;
