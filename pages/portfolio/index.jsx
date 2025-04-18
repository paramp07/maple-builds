import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import { ProjectsGallery } from "@/components/component/projects-gallery";
import {
  getAllProjects,
  getAllRemodels,
  getRemodelsPage,
} from "@/src/app/lib/sanity";
import { AnimatePresence, motion } from "framer-motion";
import { MenuContext } from "@/components/layout/menuContext";
import {
  translate,
  fadeUp,
  reveal,
  textFadeUp,
} from "@/animations/pageAnimations";

function Portfolio(props) {
  const { projects, remodelsPage } = props;
  const { menuExited } = useContext(MenuContext);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (menuExited) {
      setShouldAnimate(true);
    }
  }, [menuExited]);

  console.log('Render - menuExited:', menuExited, 'shouldAnimate:', shouldAnimate);

  const SEO = {
    title: "Portfolio",
    description: "Portfolio for Maple Builds",
  };
  console.log(projects);

  return (
    <>
      <NextSeo {...SEO} />
      <AnimatePresence mode="">
        <section className="pt-[10rem] font-dmsans">
          <section className="w-[90%] mx-auto">
            <div className="font-mulish">
              <div className="overflow-hidden">
                <motion.h2
                  variants={translate}
                  initial="initial"
                  animate={shouldAnimate ? "animate" : "initial"}
                  className="overflow-hidden uppercase text-neutral-600"
                >
                  Take a look at our work
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={fadeUp}
                  initial="initial"
                  animate={shouldAnimate ? "animate" : "initial"}
                  className="text-6xl mt-3  font-semibold text-neutral-800 tracking-[-4px]"
                >
                  Our Portfolio
                </motion.h1>
              </div>
            </div>
          </section>
          <section className="w-full max-w-4xl mt-28">
            <div className="w-full h-[110svh] relative overflow-hidden">
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
                    "https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/3519495f-1d0e-4b95-8691-50247272778b/9.JPG?format=2500w"
                  }
                />
              </motion.div>
            </div>
          </section>
          <section className="mt-10 w-[90%] mx-auto space-y-4">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl font-medium">Our Projects</h1>
              <p>
                Trust us to elevate your visitors' experience through memorable
                and immersive experiential design. With over 100 years of
                experience across 40 countries, we are experts in designing and
                building world-class interior and museum fit-outs, large events,
                brand experiences and exhibitions
              </p>
            </div>
            <span className="block border-t border-neutral-300 w-100"></span>
            <ProjectsGallery projects={projects} />
          </section>
        </section>
      </AnimatePresence>
    </>
  );
}

export default Portfolio;

export async function getStaticProps() {
  const projects = await getAllProjects();
  const remodelsPage = await getRemodelsPage();

  return {
    props: {
      projects,
      remodelsPage,
    },
  };
}
