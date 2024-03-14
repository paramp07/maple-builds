import Link from "next/link"
import { useState } from "react"; // import state
import HamburgerMenuOpen from "../sections/HamburgerMenuOpen";
import React from 'react';
import PopoverDemo from "./sub-sections/PopoverPortfolio";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  return (
      <div className="relative z-50 flex items-center justify-between w-full px-8 py-2 mx-auto border-b-2 header border-slate-100">
      <a href="/">
        <img src='/images/black-logo.svg' className="w-[6rem]" alt="logo" />
      </a>
      <nav>
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="space-y-[6px] HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 bg-gray-900"></span>
            <span className="block h-0.5 w-8 bg-gray-900"></span>
            <span className="block h-0.5 w-8 bg-gray-900"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="absolute top-0 right-0 px-8 py-8 CROSS-ICON"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <HamburgerMenuOpen />
          </div>
        </section>

        <ul className="items-center hidden space-x-8 text-xl text-gray-950 DESKTOP-MENU lg:flex font-montserrat nav-items">
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/process">PROCESS</a>
          </li>
          <li className="z-40 flex items-center">
            <PopoverDemo>
            </PopoverDemo>
          </li>
          <li className="px-6 py-2 font-semibold text-gray-800 transition duration-300 ease-linear bg-transparent border-[2px] border-gray-950 hover:bg-gray-950 hover:text-white hover:border-transparent">
            <a href="/contact" className="nav-button">CONTACT</a>
          </li>
        </ul>
    </nav>

      <style>{`

      
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }

      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes fadeOut {
        100% { opacity: 1; }
        0% { opacity: 0; }
        
      }
    `}</style>
    </div>
  );
}



