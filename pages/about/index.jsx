import ShortInfoImage from "@/components/sections/ShortInfoImage";
import TeamMembersSection from "@/components/team/TeamMembersSection";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import CTA from "@/components/sections/CTA";
import { getAllTeamMembers } from "@/src/app/lib/sanity";
import { getAboutPage } from "@/src/app/lib/sanity";
import { urlFor } from "@/src/app/lib/urlFor";
import { NextSeo } from "next-seo";
import { useContext } from "react";
import { MenuContext } from "@/components/layout/menuContext";

function AboutPage(props) {
  const { members, aboutPage } = props;

  const { dark, setDark } = useContext(MenuContext);

  setDark(false)

  const SEO = {
    title: "About",
    description: "About Maple Builds",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="font-mulish pt-[10rem] bg-white">
        <div className="px-[20px]">
          <h2 className="font-thin uppercase text-neutral-600">
            Unique tailored service
          </h2>
          <h1 className="text-6xl mt-3 font-semibold text-neutral-800 tracking-[-4px]">
            About Us
          </h1>
        </div>
        <div className="w-full h-[110svh] mt-28">
          <Image
            className="object-cover h-full"
            quality={100}
            width={1920}
            height={1080}
            src={
              "            https://st.hzcdn.com/simgs/pictures/kitchens/modern-condo-with-rustic-touch-home-style-img~668173580d742dd6_14-5573-1-a543317.jpg"
            }
          />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
