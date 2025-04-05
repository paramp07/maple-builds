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
  const socialLinks = [
    {
      url: "https://www.instagram.com/maplebuilds",
      icon: FaInstagram,
      label: "Instagram",
      text: "INSTAGRAM",
    },
    {
      url: "https://www.facebook.com/maplebuilds",
      icon: FaFacebook,
      label: "Facebook",
      text: "FACEBOOK",
    },
    {
      url: "https://www.tiktok.com/@maplebuilds",
      icon: IoLogoTiktok,
      label: "TikTok",
      text: "TIKTOK",
    },
    {
      url: "https://www.youtube.com/@maplebuilds",
      icon: AiFillYoutube,
      label: "YouTube",
      text: "YOUTUBE",
    },
  ];

  const currentYear = getCurrentYear();

  return (
    <div
      className="relative h-[620px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="bg-[#141414] text-neutral-200 fixed bottom-0 h-[620px] w-full py-0 lg:px-12 font-dmsans">
        <div className="flex flex-col lg:flex-row py-[3rem] mx-[1.1rem] space-y-12 lg:space-y-0 space-x-0 lg:space-x-2">
          <Image priority className="w-[120px]" src={MapleLogo} />
          <div className="flex flex-col space-x-0flex-[3] space-y-[3rem] lg:space-x-2 md:space-y-0 md:flex-row">
            <div className="flex space-x-2">
              <div className="flex-1">
                <div className="w-full space-y-2 ">
                  <CustomLink text="HOME" link="/" />
                  <CustomLink text="ABOUT" link="/about" />
                  <CustomLink text="PROCESS" link="/process" />
                  <CustomLink text="CONTACT" link="/contact" />
                  <CustomLink text="PORTFOLIO" link="/portfolio" />
                </div>
              </div>
              <div className="flex-1">
                <div className="w-full space-y-2 uppercase">
                  {socialLinks.map((item, index) => (
                    <CustomLink key={index} text={item.label} link={item.url} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 ">
              <div className="space-y-2 text-[.9rem] text-white/30 tracking-wide">
                <Link className="" href="mailto:hello@maplebuilds.com">
                  hello@maplebuilds.com
                </Link>
                <p>512 598-6491</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-white/10"></hr>

        <div className="mx-[1.1rem] py-4 text-[.8rem] text-white/40">
          <div className="flex flex-col">
            <p>Copyright © {getCurrentYear()} Maple Builds</p>
            <p>
              Website by{" "}
              <Link href="https://github.com/paramp07" className="font-bold">
                Param Patel
              </Link>
            </p>
            <Link href="/info/privacy-policy">Privacy Policy</Link>
            <Link href="/info/terms">Terms and Conditions</Link>
          </div>
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
      <span className="flex items-center font-bold">
        <p className="text-[.9rem]  tracking-wide ml-0 duration-200 tracking-[0.175em] group-hover:ml-[5px] group-hover:text-neutral-500">
          {text}
        </p>
      </span>
    </Link>
  );
}
