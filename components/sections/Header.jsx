import { MapleBuildsLogo } from "@/components/ui/logo";
import Image from "next/image";
import MapleLogo from "../../public/white_logo.svg";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const [black, setBlack] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(latest)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 40) {
      console.log("black true")
      setBlack(true);
    } else {
      console.log("black false")
      setBlack(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed w-full ${black ? "bg-neutral-900": "bg-transparent"} transition-colors ease-in-out duration-300 z-[99] top-0 left-0`}
    >
      <nav className=" max-w-[1600px] mx-auto">
        {/* <MapleBuildsLogo /> */}
        <div className="flex items-center justify-between py-2 ">
          <div className="px-4 w-fit">
            <Image priority src={MapleLogo} height={60} />
          </div>
          <div className="px-[20px]">
            <div class="hamburger-icon flex flex-col justify-between w-[3rem] h-[.6rem] cursor-pointer">
              <span class="h-0.5 w-full bg-white top-1/2 transform -translate-y-1/2"></span>
              <span class="h-0.5 w-full bg-white bottom-1/2 transform -translate-y-1/2"></span>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
