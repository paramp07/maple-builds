import { MapleBuildsLogo } from "@/components/ui/logo";
import Image from "next/image";
import MapleLogo from "../../public/white_logo.svg";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../layout/menuContext";
import Link from "next/link";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [black, setBlack] = useState(false);
  const { open, setOpen } = useContext(MenuContext);
  const toggleMenu = () => {
    setOpen(!open);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 40) {
      console.log("black true");
      setBlack(true);
    } else {
      console.log("black false");
      setBlack(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={(hidden && !open) ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed w-full ${
        black ? "bg-neutral-900" : "bg-transparent"
      } transition-colors ease-in-out duration-300 z-[99] top-0 left-0`}
    >
      <nav className=" max-w-[1600px] mx-auto">
        {/* <MapleBuildsLogo /> */}
        <div className="flex items-center justify-between py-2 ">
          <Link href="/" className="px-4 w-fit">
            <Image priority src={MapleLogo} height={60} />
          </Link>
          <div className="p-[20px] block h-full" onClick={() => toggleMenu()}>
            <div class="hamburger-icon flex flex-col justify-between w-[3rem] h-[.6rem] cursor-pointer">
              <motion.span
                variants={{
                  closed: { y: "150%" },
                  opened: {
                    y: "50%",
                    transition: {
                      delay: 0.5,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                animate={open ? "closed" : "opened"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                class="h-0.5 w-full bg-white top-1/2 transform -translate-y-1/2"
              ></motion.span>
              <motion.span
                variants={{
                  closed: { y: "-100%" },
                  opened: { y: "50%", transition: {
                    delay: 0.5,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }, },
                }}
                animate={open ? "closed" : "opened"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                class="h-0.5 w-full bg-white bottom-1/2 transform -translate-y-1/2"
              ></motion.span>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

const collapse = {};
