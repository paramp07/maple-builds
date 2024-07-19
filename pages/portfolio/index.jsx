import Image from "next/image";
import React from "react";
import { NextSeo } from "next-seo";

function Portfolio(props) {
  const SEO = {
    title: "Portfolio",
    description: "Portfolio for Maple Builds",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <section className="pt-[10rem]">
        <section className="w-[90%] mx-auto">
          <div className="">
            <h2 className="uppercase text-neutral-600">
              Take a look at our work
            </h2>
            <h1 className="text-6xl mt-3 font-semibold text-neutral-800  tracking-[-4px]">
              Our Portfolio
            </h1>
          </div>
        </section>
        <section className="w-full max-w-4xl mt-28">
          <Image
            className="object-cover w-full mt-10 h-[100svh]"
            alt="image"
            quality={100}
            width={1920}
            height={1080}
            src={
              "https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/3519495f-1d0e-4b95-8691-50247272778b/9.JPG?format=2500w"
            }
          />
        </section>
      </section>
    </>
  );
}

export default Portfolio;
