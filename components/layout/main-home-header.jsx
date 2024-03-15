import Link from "next/link";
import { useState } from "react"; // import state
import styles from "./main-header.module.css";
import { Button, Navbar } from "flowbite-react";
import HamburgerMenuOpen from "../sections/HamburgerMenuOpen";
import PopoverDemo from "./sub-sections/PopoverPortfolio";
import Image from "next/image";



export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrollbarHidden, setIsScrollbarHidden] = useState(false);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const handleButtonClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const hideScrollbar = () => {
    setIsScrollbarHidden(!isScrollbarHidden);
  };

  return (
    <div className="items-center justify-center text-stone-200 ">
      <div className="flex items-center justify-center px-4 py-2 bg-zinc-950">
        <div className="flex items-center w-full justify-end gap-5 lg:max-w-[1550px] px-4">
          <p className="text-sm font-bold font-raleway">
            Call Today: 512.698.6491
          </p>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <a href="/contact">Request Pricing</a>
          </button>
        </div>
      </div>
      <div className="absolute w-full px-4 bg-black/50">
        <div className="flex flex-row-reverse px-4 items-center lg:max-w-[1550px] justify-between w-full mx-auto lg:flex-row bg-black/0">
          <nav className="lg:w-1/3">
            <section className="flex MOBILE-MENU lg:hidden">
              <div
                className="space-y-[6px] HAMBURGER-ICON"
                onClick={() => {
                  handleButtonClick();
                  hideScrollbar();
                }}
              >
                <span className="block h-0.5 w-8 bg-gray-100"></span>
                <span className="block h-0.5 w-8 bg-gray-100"></span>
                <span className="block h-0.5 w-8 bg-gray-100"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8 CROSS-ICON"
                  onClick={() => {
                    handleButtonClick();
                    hideScrollbar();
                  }}
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

            <ul className="items-center hidden space-x-8 text-white text-md DESKTOP-MENU lg:flex font-montserrat nav-items">
              <li>
                <a href="/about" className="nav-button">ABOUT</a>
              </li>
              <li>
                <a href="/process" className="nav-button">PROCESS</a>
              </li>
              <li className="z-40 flex items-center">
                <PopoverDemo home={true}></PopoverDemo>
              </li>
            </ul>
          </nav>
          <a href="/" className="lg:w-1/3 ">
            <Image src="/images/white-logo.svg" width={112} height={112} alt="logo" className="mx-auto my-2" />
          </a>
          <div className="justify-end hidden lg:w-1/3 lg:flex">
            <div className="px-6 py-2 font-proxima font-semibold text-white transition duration-300 ease-linear bg-transparent border-[2px] border-white hover:bg-white hover:text-black hover:border-transparent">
              <a href="/contact" className="contact-button">
                CONTACT
              </a>
            </div>
          </div>

          {isScrollbarHidden && (
            <style>
              {`
            body {
              overflow: hidden;
            }
          `}
            </style>
          )}

          <style>{`

      .nav-button {
        padding: .7rem 0 .7rem 0;
        height: 100%;
      }
      .nav-button {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
      }
      .nav-button:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        right: 0;
        top: 0;
        background: #fafafa;
        height: 2px;
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }
      .nav-button:hover:before, .nav-button:focus:before, .nav-button:active:before {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }

     
      
      .hideMenuNav {
        display: none;
        animation: fadeOut .2s;
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
        animation: fadeIn .2s;
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
      </div>
    </div>
  );
}
