import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Button } from "flowbite-react";

export default function Footer() {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  const currentYear = getCurrentYear();

  return (
    // <div className="flex flex-col-reverse mx-auto px-3 justify-between max-w-[500px] md:max-w-none w-full text-gray-950 space-y-4 items-center md:px-[9rem] py-6 md:py-12 md:flex-row md:space-y-0 bg-white ">
    //   <div className="text-2xl font-semibold tracking-tighter font-montserrat opacity-90">
    //     maple builds
    //   </div>
    //   <p className="mt-0 text-sm opacity-60">
    //     Copyright © {currentYear} Maple Builds LLC
    //   </p>
    //   <div className="w-full md:w-auto">
    //     <ul className="flex justify-between px-10 ul-list md:space-x-5 md:px-0">
    //       <li className="social-links">
    //         <a target="_blank" href="https://www.instagram.com/maple.builds/">
    //           <i class="fa-brands fa-instagram fa-xl"></i>
    //         </a>
    //       </li>
    //       <li className="social-links">
    //         <a target="_blank" href="https://www.facebook.com/maplebuildsllc/">
    //           <i class="fa-brands fa-square-facebook fa-xl"></i>
    //         </a>
    //       </li>
    //       <li className="social-links">
    //         <a target="_blank" href="https://www.youtube.com/@MapleBuilds">
    //           <i class="fa-brands fa-youtube fa-xl"></i>
    //         </a>
    //       </li>
    //       <li className="social-links">
    //         <a target="_blank" href="https://www.tiktok.com/@maplebuilds">
    //           <i class="fa-brands fa-tiktok fa-xl"></i>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <style>
    //     {`
    //           .social-links a {
    //            cursor: pointer;
    //            height: 20px;
    //           }
    //           `}
    //   </style>
    // </div>
    <div>
      <div className="flex flex-col items-center justify-center px-6 space-y-8 py-14 bg-neutral-800 text-neutral-200 font-dmsans">
        <Image src="/images/white-logo.svg" width={96} height={96} alt="logo" />
        <p className="tracking-wider text-center">
          Maple Builds, your Austin home builder, listens and delivers on your
          vision, crafting dream homes with custom details and flexible
          amenities tailored to your lifestyle.
        </p>
        <div className="flex gap-6">
          <Link href="">
            <Icon icon={FaFacebook} />
          </Link>
          <Link href="">
            <Icon icon={FaInstagram} />
          </Link>
          <Link href="">
            <Icon icon={AiFillYoutube} />
          </Link>
          <Link href="">
            <Icon icon={IoLogoTiktok} />
          </Link>
        </div>
      </div>
      <div className="bg-[#141414] text-neutral-200 py-0 lg:px-12 font-dmsans">
        <div className="flex flex-col lg:flex-row py-[5rem] mx-[1.1rem] space-y-12 lg:space-y-0 space-x-0 lg:space-x-2">
          <div className="flex flex-col space-x-0 space-y-12 flex-[3] lg:space-x-2 md:space-y-0 md:flex-row">
            <div className="flex-1">
              <h3 className="font-bold tracking-wide text-[1.5rem]">
                Quick Links
              </h3>
              <div className="space-y-4 mt-7">
                <CustomLink text="HOME" link="/" />
                <CustomLink text="ABOUT US" link="/about" />
                <CustomLink text="OUR PROCESS" link="/process" />
                <CustomLink text="CONTACT US" link="/contact" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold tracking-wide text-[1.5rem]">
                Services
              </h3>
              <div className="space-y-4 mt-7">
                <CustomLink text="CUSTOM HOMES" link="/" />
                <CustomLink text="REMODELS" link="/about" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold tracking-wide text-[1.5rem]">Contact</h3>
              <div className="space-y-2 tracking-wide mt-7">
                <Link href="mailto:hello@maplebuilds.com">
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
          <div className="flex flex-col">
            <p>Copyright © 2024 Maple Builds</p>
            <p>
              Website by{" "}
              <Link href="https://github.com/paramp07" className="font-bold underline">Param Patel</Link>
            </p>
          </div>
          <div className="mx-4 lg:mx-0">
            <ul className="flex justify-center">
              <li className="pr-4 ">
                <Link href={"/"}>Privacy Policy</Link>
              </li>
              <li className="pl-4 pr-4 border-l border-white/20">
                <Link href={"/"}>Terms and Conditions</Link>
              </li>
            </ul>
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
      className="flex gap-4 duration-300"
      href={`${link}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BsArrowRightCircleFill
        className="w-[15px] duration-300"
        color={isHovered ? "rgb(115,115,115)" : "rgb(157, 157, 157)"}
      />
      <p className="text-[.8rem] font-bold ml-[0px] duration-200 tracking-[0.175em] hover:ml-[5px] hover:text-neutral-500">
        {text}
      </p>
    </Link>
  );
}
