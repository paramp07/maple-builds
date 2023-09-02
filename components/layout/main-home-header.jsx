import Link from "next/link"
import { useState } from "react"; // import state
import styles from './main-header.module.css'
import { Navbar } from "flowbite-react";
import HamburgerMenuOpen from "../sections/HamburgerMenuOpen";
import PopoverDemo from "./sub-sections/PopoverPortfolio";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
      <div className="absolute flex items-center justify-between w-full px-8 py-2 mx-auto ">
      <a href="/">
        <img src='images/white-logo.svg' className="w-[6rem]" alt="logo" />
      </a>
      <nav>
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="space-y-[6px] HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 bg-gray-100"></span>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
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

        <ul className="items-center hidden space-x-8 text-xl text-white DESKTOP-MENU lg:flex font-montserrat nav-items">
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/process">PROCESS</a>
          </li>
          <li className="z-40 flex items-center">
            <PopoverDemo home={true}>
            </PopoverDemo>
          </li>
          <li className="px-6 py-2 font-semibold text-white transition duration-300 ease-linear bg-transparent border-[3px] border-white rounded hover:bg-white hover:text-black hover:border-transparent">
            <a href="/contact" className="nav-button">CONTACT</a>
          </li>
        </ul>
    </nav>

      <style>{`

      .nav-items a:hover:not(.nav-button) {
        color: #e8e9eb;
      }
      
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
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
    `}</style>
    </div>
  );
}