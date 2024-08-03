import { useState,useEffect } from "react";
import Link from "next/link";
import {
    ArrowUpRight
  } from "lucide-react";
const OutlineButtonCTA = ({ href, children, className = '', darkMode }) => {
    const [isDarkMode, setIsDarkMode] = useState(darkMode);
  
    useEffect(() => {
      setIsDarkMode(darkMode);
    }, [darkMode]);
  
    return (
      <Link href={href} className={`relative inline-block w-fit h-fit group ${className}`}>
            <button className={`relative px-3 py-1 border rounded-full whitespace-nowrap overflow-hidden ${isDarkMode ? 'border-neutral-100' : 'border-black/60'}`}>
          <span className={`absolute top-0 left-0 w-full h-0 transition-all duration-200 ease-out transform group-hover:h-full ${isDarkMode ? 'bg-neutral-100' : 'bg-neutral-950'} opacity-90`}></span>
          <span className={`relative flex items-center gap-2 ${isDarkMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>
            <p className={`text-sm font-normal truncate ${isDarkMode ? 'text-white group-hover:text-black' : 'group-hover:text-white'}`}>
              {children}
            </p>
            <ArrowUpRight size={20} strokeWidth={1.2} />
          </span>
        </button>
      </Link>
    );
  };
  
  
  OutlineButtonCTA.defaultProps = {
    href: "/",
    children: "Default Button Text",
    className: "",
    darkMode: false,
  };

  
export default OutlineButtonCTA