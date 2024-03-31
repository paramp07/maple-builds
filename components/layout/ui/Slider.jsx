import styles from "./slider.module.css";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Slider() {
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

  const backgroundStyle = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(/images/wide-house.jpg) center top/cover no-repeat",
  };
  const slides = [
    {
      url: "https://st.hzcdn.com/simgs/pictures/exteriors/custom-brookhaven-home-vincent-longo-custom-builders-img~a4d1405009e4d3e9_14-5918-1-3a8a3fe.jpg",
    },
    {
      url: "https://st.hzcdn.com/simgs/pictures/family-rooms/dining-room-norris-architecture-img~5cd1b6d3083f194c_14-9261-1-6ff0fc7.jpg",
    },
    {
      url: "https://st.hzcdn.com/simgs/10318bb700749fdf_14-2859/home-design.jpg",
    },

    {
      url: "https://st.hzcdn.com/simgs/pictures/kitchens/may-2016-southwest-florida-edition-home-and-design-magazine-naples-img~ff71bb220791272a_14-7601-1-6064ab0.jpg",
    },
    {
      url: "https://st.hzcdn.com/simgs/pictures/patios/custom-spanish-revival-california-style-k-smith-interiors-img~8db160860aff3dca_14-5031-1-94a9a0f.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  return (
    <>
      {/* <div style={backgroundStyle} className="w-full h-screen bg-black"></div> */}
      <div className="w-full h-[95vh] m-auto bg-black group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full duration-500 bg-center bg-cover"
        ></div>
        <div
          style={{ background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) center top/cover no-repeat` }}
          className="w-full h-full bg-center bg-cover mt-[-95vh]"
        ></div>
        
        <div className="flex justify-center py-2 mt-[-3rem]">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled
                color={currentIndex === slideIndex ? "#FFFFFF" : "#e8e8e890"}
                className="duration-500 drop-shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
