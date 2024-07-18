import { MapleBuildsLogo } from "@/components/ui/logo";
import Image from "next/image";
import MapleLogo from "../../public/white_logo.svg";
import { motion, useScroll, useMotionValueEvent, color } from "framer-motion";
import React, { use, useContext, useEffect, useState } from "react";
import { MenuContext } from "../layout/menuContext";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [colored, setColored] = useState(false);
  const [ isHome, setIsHome] = useState(true);
  const { dark, setDark } = useContext(MenuContext);
  const { open, setOpen } = useContext(MenuContext);
  const router = useRouter();
  const pathname = router.pathname;

  const handleClick = (e) => {
    if (open) {
      e.preventDefault(); // Prevent the default link behavior
      setOpen(false);
      router.push('/'); // Navigate programmatically
    }
    // If open is false, let the link navigate normally
  };

  useEffect(() => {
    console.log('Current pathname:', pathname);
    if (pathname === "/") {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, [pathname]);

  const printBackgroundColor = () => {
    const bgColor = colored
      ? dark
        ? "bg-neutral-900"
        : "bg-white"
      : dark
      ? "bg-neutral-900"
      : open
      ? "bg-transparent"
      : "bg-transparent";
    console.log("Background color:", bgColor);
  };

  const toggleMenu = () => {
    setOpen(!open);
    console.log("Menu open:", !open);

    if (!colored) {
      return;
    }

    if (scrollY > 40) {
      setColored(!colored);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 40) {
      setColored(true);
    } else {
      setColored(false);
    }
  });
  useEffect(() => {
    printBackgroundColor();
  }, [colored, dark, open, hidden]);

  const className = `fixed w-full transition-colors  h-[78px] z-[9] ease-in-out duration-300 top-0 left-0 ${isHome ? (colored ? "bg-neutral-900" : "bg-transparent") : "bg-white"}`;

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !open ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`flex fixed w-full top-0 z-10 ${isHome ? "text-white" : "mix-blend-exclusion"} left-0 items-center justify-between  py-2 `}
      >
        <Link href="/" className="px-4 w-fit " onClick={handleClick}>
          <Image
            priority
            src={MapleLogo}
            className="mix-blend-exclusion"
            height={60}
          />
        </Link>
        <div className="p-[20px] block h-full" onClick={() => toggleMenu()}>
          <div class="hamburger-icon flex flex-col justify-between w-[3rem] h-[.6rem] mix-blend-exclusion cursor-pointer">
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
              class="h-0.5 w-full bg-white bottom-1/2 transform -translate-y-1/2"
            ></motion.span>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !open ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={className}
      >
        <nav className=" max-w-[1600px] mx-auto">
          {/* <MapleBuildsLogo /> */}
        </nav>
      </motion.div>
    </>
  );
}

const collapse = {};
