import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { ArrowUpRight } from "lucide-react";
import { Button } from "flowbite-react";
import { motion, useScroll } from "framer-motion";
import MapleLogo from "../../public/whitetopdownlogo.svg";

export default function Footer() {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  const currentYear = getCurrentYear();

  return (
   
    <div>
      <div className="bg-[#141414] text-neutral-200 py-0 lg:px-12 font-dmsans">
      
        <div className="flex flex-col lg:flex-row py-[5rem] mx-[1.1rem] space-y-12 lg:space-y-0 space-x-0 lg:space-x-2">
        <Image priority className="w-[159px]" src={MapleLogo} height={400} />
          <div className="flex flex-col space-x-0 space-y-12 flex-[3] lg:space-x-2 md:space-y-0 md:flex-row">
            <div className="flex-1">
              <div className="w-full space-y-4 mt-7">
                <CustomLink text="HOME" link="/" />
                <CustomLink text="ABOUT" link="/about" />
                <CustomLink text="PROCESS" link="/process" />
                <CustomLink text="CONTACT" link="/contact" />
                <CustomLink text="PORTFOLIO" link="/portfolio" />
              </div>
            </div>
            <div className="flex-1">
              
              <div className="space-y-4 mt-7">
                <CustomLink
                  text="CUSTOM HOMES"
                  link="/portfolio/custom-homes"
                />
                <CustomLink text="REMODELS" link="/portfolio/remodels" />
              </div>
            </div>
            <div className="flex-1">
              <div className="space-y-2 tracking-wide mt-7">
                <Link className="" href="mailto:hello@maplebuilds.com">
                  hello@maplebuilds.com
                </Link>
                <p>512 598-6491</p>
                <p>www.maplebuilds.com</p>
              </div>
            </div>
          </div>

          <div className="flex-[1] space-y-7">
            <h3 className="font-bold tracking-wide text-[1.5rem]">
              Request Pricing
            </h3>
            <div className="space-y-5 tracking-wide">
              <p>
                We would love to assist you with any questions you may have.
              </p>
              <button
                type="button"
                class="text-white bg-blue-700 tracking-wide duration-200 hover:bg-blue-800 font-medium rounded-lg text-md px-6 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <Link href="/contact">Get In Touch With Us</Link>
              </button>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-white/10"></hr>
        
          <div className="flex flex-col items-center justify-between py-4 space-y-6 text-sm text-center lg:space-y-0 lg:text-left lg:flex-row text-white/40">
          <motion.div
          initial={{ opacity: 0, x:20}}
          whileInView={{ opacity: 1, x:0}}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
            <div className="flex flex-col">
              <p>Copyright © 2024 Maple Builds</p>
              <p>
                Website by{" "}
                <Link
                  href="https://github.com/paramp07"
                  className="font-bold underline"
                >
                  Param Patel
                </Link>
              </p>
            </div>
            <div className="mx-4 lg:mx-0">
              <ul className="flex justify-center">
                <li className="pr-4 ">
                  <Link href={"/info/privacy-policy"}>Privacy Policy</Link>
                </li>
                <li className="pl-4 pr-4 border-l border-white/20">
                  <Link href={"/info/terms"}>Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            </motion.div>
          </div>
      </div>
    </div>
  );
}

function Icon({ icon: IconComponent, padding, backgroundColor, width }) {
  return (
    <div
      className={`flex p-[8px] rounded-full bg-neutral-600 w-fit hover:bg-transparent duration-300`}
    >
      <IconComponent className=".9rem" />
    </div>
  );
}

Icon.defaultProps = {
  padding: 8,
  backgroundColor: "neutral-500",
  width: ".9rem",
};


function CustomLink({ text, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-between gap-4 duration-300 group"
    >
      <span className="flex items-center">
        <p className="text-[1.5rem]  tracking-wide ml-0 duration-200 tracking-[0.175em] group-hover:ml-[5px] group-hover:text-neutral-500">
          {text}
        </p>
      </span>
      <span className="flex items-center">
        <ArrowUpRight
          size={35}
          strokeWidth={1}
          className={`duration-300 ${isHovered ? 'text-gray-500' : 'text-gray-300'}`}
        />
      </span>
    </Link>
  );
}