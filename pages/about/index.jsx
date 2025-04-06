import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NextSeo } from "next-seo";
import { TeamMembers } from "@/components/component/team-members";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { translate, fadeUp, reveal, textFadeUp } from "@/animations/pageAnimations";
import { MenuContext } from "@/components/layout/menuContext";
import { useRouter } from 'next/router';

function AboutPage(props) {
  const body = useRef(null);
  const { menuExited } = useContext(MenuContext);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (menuExited) {
      setShouldAnimate(true);
    }
  }, [menuExited]);

  console.log('Render - menuExited:', menuExited, 'shouldAnimate:', shouldAnimate);

  const SEO = {
    title: "About",
    description: "About Maple Builds",
  };

  return (
    <>
      <AnimatePresence mode="">
        <NextSeo {...SEO} />
        <Head>
          <meta name="theme-color" content="#FFFFFF" />
        </Head>
        <div className="font-mulish pt-[10rem] antialiased" ref={body}>
          <div className="px-[20px]">
            <div className="overflow-hidden">
              <motion.h2
                variants={translate}
                initial="initial"
                animate={shouldAnimate ? "animate" : "initial"}
                
                className="overflow-hidden font-thin uppercase text-neutral-600"
              >
                Unique tailored service
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={fadeUp}
                initial="initial"
                animate={shouldAnimate ? "animate" : "initial"}
                className="text-6xl mt-3  font-semibold text-neutral-800 tracking-[-4px]"
              >
                About Us
              </motion.h1>
            </div>
          </div>
          <div className="w-full h-[110svh] mt-28 relative overflow-hidden">
            <motion.div
              variants={reveal}
              initial="initial"
              animate={shouldAnimate ? "animate" : "initial"}
              className="relative w-full h-full"
            >
              <Image
                className="object-cover h-full"
                priority
                quality={100}
                width={1920}
                height={1080}
                src={
                  "https://st.hzcdn.com/simgs/pictures/kitchens/modern-condo-with-rustic-touch-home-style-img~668173580d742dd6_14-5573-1-a543317.jpg"
                }
              />
            </motion.div>
          </div>
          <section className="w-[90%] mx-auto mt-10">
            <div className="flex flex-col gap-1">
              <motion.div
                variants={textFadeUp}
                initial="initial"
                whileInView="animate"
              >
                <h2 className="overflow-hidden text-xl font-semibold text-gray-400 uppercase">
                  We are
                </h2>
                <h1 className="text-4xl font-bold tracking-tight uppercase text-neutral-800 font-manrope">
                  Maple Builds
                </h1>
              </motion.div>

              <motion.p
                variants={textFadeUp}
                initial="initial"
                whileInView="animate"
                className="mt-3 leading-relaxed tracking-wide text-gray-600 font-dmsans"
              >
                After five years honing his skills under his uncle at
                Metalsbetter, William’s passion for roofing, and for helping
                others, burned bright. He envisioned a company built not just on
                shingles and seams, but on integrity and a dedication to
                exceeding expectations. That’s when Klindworth Roofing was born.
                We take pride in our meticulous attention to detail, ensuring
                every house we touch receives the strength and security it
                deserves. We believe in building trust and relationships with
                our clients, understanding that a roof isn’t just an expense,
                it’s a shield for your family. One roof at a time, we build more
                than just shelter, we build peace of mind.
              </motion.p>
            </div>

            <Image
              className="object-cover w-full h-[300px] mt-6"
              alt="image"
              quality={100}
              width={1920}
              height={1080}
              src={
                "https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/0def4828-a456-448e-acd2-9f2358584b2e/12.jpg?format=2500w"
              }
            />
          </section>
          <section className="w-full mt-10 font-dmsans bg-neutral-100">
            <div className="w-[90%] mx-auto">
              <div className="py-10 space-y-4 text-center">
                <h1 className="w-full text-3xl font-semibold tracking-tight font-manrope">
                  Meet Our Team
                </h1>
                <p className="text-2xl tracking-wide ">
                  Maple Builds is committed to excellence, which is seen in the
                  remarkable quality, speed, and execution of each expertly
                  crafted luxury home.
                </p>
              </div>
              <div>
                <TeamMembers />
              </div>
            </div>
          </section>
        </div>
      </AnimatePresence>
    </>
  );
}

export default AboutPage;
