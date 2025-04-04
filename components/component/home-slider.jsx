import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUp, MoveLeft } from "lucide-react";
import { MoveRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ArrowDownLeft } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://st.hzcdn.com/simgs/pictures/kitchens/modern-renovation-for-a-1980s-rancher-tammie-ladd-design-inc-img~4811b6e006a7b479_14-7284-1-81c8891.jpg",
  "https://st.hzcdn.com/simgs/pictures/kitchens/modern-renovation-for-a-1980s-rancher-tammie-ladd-design-inc-img~4811b6e006a7b479_14-7284-1-81c8891.jpg",
  "https://st.hzcdn.com/simgs/pictures/kitchens/modern-renovation-for-a-1980s-rancher-tammie-ladd-design-inc-img~4811b6e006a7b479_14-7284-1-81c8891.jpg",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(true);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(images.length - 1); // Loop to the last image
    }
  };

  const onNextClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0); // Loop to the first image
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onNextClick();
    }, 15000); // 15000ms = 15 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [current]);

  return (
    <main className="flex flex-col items-center justify-between h-[100svh] ">
      <MotionConfig transition={{ ease: [0.37, 0, 0.63, 1], duration: 1 }}>
        <div className="relative flex items-center w-full h-full overflow-hidden">
          {/* List of images */}
          <motion.div
            className="flex w-auto w-full h-full flex-nowrap"
            animate={{ x: `calc(-${current * 100}%` }}
          >
            {[...images].map((image, idx) => (
              <Project />
            ))}
          </motion.div>
          <div className="absolute z-9 flex bottom-5 right-2 px-[15px]">
            
            {/* Left/right controls */}
            <AnimatePresence>
              {isFocus && (
                <motion.div className="flex w-full text-neutral-100">
                  <button onClick={onPrevClick}>
                    <ArrowDownLeft strokeWidth={1} className="w-8 h-8" />
                  </button>
                  <button onClick={onNextClick}>
                    <ArrowUpRight strokeWidth={1} className="w-8 h-8" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </MotionConfig>
    </main>
  );
}

// Import the RightIcon component

const Project = ({
  imageUrl,
  imageWidth,
  imageHeight,
  title,
  linkUrl,
  linkText,
}) => {
  return (
    <div className="relative w-screen h-full">
      <div className="absolute w-screen h-full overflow-y-hidden">
        <div className="z-[-1] absolute object-cover w-full h-full bg-black opacity-40"></div>
        <Image
          quality={100}
          className="object-cover relative w-full z-[-2] h-full"
          width={imageWidth}
          height={imageHeight}
          src={imageUrl}
        />
      </div>
      <div className="relative h-full text-white px-[20px] w-screen">
        <div className="flex flex-col justify-end h-full pb-[1rem] text-[2rem]">
          <h1 className="font-medium text-[1.5rem] tracking-[.04em] uppercase font-montserrat">
            {title}
          </h1>
          <Link
            href={linkUrl}
            className="flex items-center gap-2 py-2 text-base transition-all ease-in opacity-50 hover:opacity-80"
          >
            <p className="flex">{linkText}</p>
            <MoveRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

Project.defaultProps = {
  imageUrl:
    "https://st.hzcdn.com/simgs/pictures/kitchens/modern-renovation-for-a-1980s-rancher-tammie-ladd-design-inc-img~4811b6e006a7b479_14-7284-1-81c8891.jpg",
  imageWidth: 1920,
  imageHeight: 600,
  title: "Sedgefield Modern",
  linkUrl: "/",
  linkText: "See More",
};