import { getHomePage } from "@/src/app/lib/sanity";
import Image from "next/image";
import RightIcon from "@/components/icons/RightIcon";
import {
  ArrowUpRight,
  HardHat,
  MoveRight,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "@/components/component/home-slider";
import OutlineButtonCTA from "@/components/component/outline-button-cta";

function Home(props) {
  return (
    <div className="font-dmsans">
      <div className="h-[100svh] ">
        <Slider />
      </div>
      <div className=" px-[20px] mt-20 flex flex-col md:flex-row gap-16">
        <div className="flex flex-col gap-8 ">
          <h1 className="text-[2rem] font-medium leading-10">
            Maple Builds is a construction company dedicated to transforming
            clients.
          </h1>
          <span className="block border-t border-neutral-300 w-[35%]"></span>
          <p className="">
            Trust us to elevate your visitors' experience through memorable and
            immersive experiential design. With over 100 years of experience
            across 40 countries, we are experts in designing and building
            world-class interior and museum fit-outs, large events, brand
            experiences and exhibitions
          </p>
          <OutlineButtonCTA href={"/about"}>View More</OutlineButtonCTA>
        </div>
        <div className="hidden"></div>
        <div className="h-[60svh]">
          <div className="h-full px-1">
            <Image
              className="object-cover h-full"
              quality={100}
              width={1920}
              height={1080}
              src={
                "https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/5fbe2ab9-632b-49d1-965d-b73684a8e9af/8.jpg?format=2500w"
              }
            />
          </div>
        </div>
      </div>
      <div className="px-[20px] mt-12 flex flex-col  bg-neutral-200">
        <div className="flex flex-col gap-12 mb-16">
          <div className="flex flex-col gap-1 mt-12 text-center">
            <h1 className="text-[3.5rem] font-medium tracking-tight text-neutral-800">
              What We Do
            </h1>
            <p className="text-lg">
              Our signature approach is timeless, unconventional and authentic.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Service
              image={
                "https://st.hzcdn.com/simgs/pictures/exteriors/cotswold-house-exterior-james-s-collins-architect-img~c2f10786051adc8e_14-3912-1-9a4f5a0.jpg"
              }
            >
              Custom Home
            </Service>
            <Service>Remodeling</Service>
            <Service
              image={
                "https://st.hzcdn.com/simgs/pictures/sunrooms/contemporary-retreat-maguire-construction-inc-img~53314a9b0a709781_14-5668-1-7c5fbc3.jpg"
              }
            >
              Addition
            </Service>
            <Service
              image={
                "https://st.hzcdn.com/simgs/pictures/kitchens/north-hinsdale-show-kitchen-plain-and-posh-img~81d150150a919f5c_14-1693-1-fa5e6a4.jpg"
              }
            >
              Small Projects
            </Service>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-900 px-[20px] flex flex-col gap-6">
        <section class="py-12 text-neutral-100 sm:py-16 lg:py-20">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-4xl font-medium leading-tight text-neutral-100 sm:text-4xl xl:text-5xl font-pj">
                What Defines Our Excellence
              </h2>
            </div>

            <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
              <div class="md:p-8 lg:p-14">
                <Sparkles strokeWidth={1.5} size={46} className="mx-auto" />
                <h3 class="mt-12 text-xl text-neutral-200 font-pj">
                  Quality Materials
                </h3>
                <p class="mt-5 text-base text-neutral-400 font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
              <div class="md:p-8 lg:p-14">
                <HardHat strokeWidth={1.5} size={46} className="mx-auto" />
                <h3 class="mt-12 text-xl text-neutral-200 font-pj">
                  Skilled Workers
                </h3>
                <p class="mt-5 text-base text-neutral-400 font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
              <div class="md:p-8 lg:p-14">
                <ShieldCheck strokeWidth={1.5} size={46} className="mx-auto" />
                <h3 class="mt-12 text-xl text-neutral-200 font-pj">Warranty</h3>
                <p class="mt-5 text-base text-neutral-400 font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
              <div class="md:p-8 lg:p-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16.933333 21.1666675"
                  version="1.1"
                  width="70px"
                  height="70px"
                  className="flex items-center mx-auto fill-white"
                >
                  <g className="w-full h-full">
                    <path
                      d="m 8.4656292,2.3870643 c -1.2517305,0 -2.2691143,1.026858 -2.2691143,2.283063 0,0.816062 0.429686,1.534554 1.0738379,1.937866 -1.3347462,0.425307 -2.3838164,1.545164 -2.6835576,2.98018 a 0.26458399,0.26458399 0 0 0 0.2051553,0.312642 0.26458399,0.26458399 0 0 0 0.3126422,-0.205155 c 0.3345683,-1.601751 1.7351163,-2.744018 3.3610365,-2.744018 1.6259918,0 3.0291268,1.142174 3.3636188,2.744018 a 0.26458399,0.26458399 0 0 0 0.312126,0.205155 0.26458399,0.26458399 0 0 0 0.205156,-0.312642 c -0.299676,-1.4351 -1.349286,-2.554899 -2.6845926,-2.98018 0.6447286,-0.403312 1.0753856,-1.121804 1.0753856,-1.937866 0,-1.256205 -1.019966,-2.283063 -2.2716938,-2.283063 z m 0,0.529166 c 0.9641892,0 1.7425268,0.78213 1.7425268,1.753897 0,0.971767 -0.7783376,1.752348 -1.7425268,1.752348 -0.964192,0 -1.7399476,-0.780581 -1.7399476,-1.752348 0,-0.971767 0.7757556,-1.753897 1.7399476,-1.753897 z m 0.00103,5.248775 a 0.26389271,0.26532803 1.6833018e-4 0 0 -0.2361618,0.14831 L 7.5959146,9.6041933 6.177912,9.8114153 A 0.26389271,0.26532803 1.6833018e-4 0 0 6.0316689,10.263585 l 1.0257763,1.006658 -0.241845,1.41955 a 0.26389271,0.26532803 1.6833018e-4 0 0 0.3824049,0.279569 l 1.26814,-0.670242 1.2686559,0.670242 a 0.26389271,0.26532803 1.6833018e-4 0 0 0.382405,-0.279569 L 9.8758795,11.270243 10.90114,10.265135 A 0.26389271,0.26532803 1.6833018e-4 0 0 10.75541,9.8119333 L 9.3374101,9.6047093 8.7033388,8.3127993 A 0.26389271,0.26532803 1.6833018e-4 0 0 8.466661,8.1650053 Z m 0,0.864545 0.4588881,0.934828 A 0.26389271,0.26532803 1.6833018e-4 0 0 9.1239848,10.10959 l 1.0262922,0.14986 -0.7425901,0.727604 A 0.26389271,0.26532803 1.6833018e-4 0 0 9.3317229,11.2227 l 0.1751832,1.027326 -0.9172548,-0.485759 a 0.26389271,0.26532803 1.6833018e-4 0 0 -0.2459805,5.19e-4 L 7.4258987,12.24951 7.6015979,11.222181 A 0.26389271,0.26532803 1.6833018e-4 0 0 7.5256334,10.987572 L 6.7835618,10.25945 7.8088222,10.10959 A 0.26389271,0.26532803 1.6833018e-4 0 0 8.0077756,9.9643783 Z m -5.1583386,0.681614 a 0.26532803,0.26389271 89.999915 0 0 -0.2361618,0.14831 L 2.4370557,11.150868 1.0195716,11.357574 A 0.26532803,0.26389271 89.999915 0 0 0.87332584,11.81026 l 1.02577896,1.006139 -0.241845,1.419553 a 0.26532803,0.26389271 89.999915 0 0 0.3824049,0.279569 l 1.26814,-0.669726 1.2686559,0.670242 A 0.26532803,0.26389271 89.999915 0 0 4.9588655,14.235952 L 4.7175364,12.816399 5.7427968,11.811294 A 0.26532803,0.26389271 89.999915 0 0 5.5970696,11.358092 L 4.179067,11.150868 3.5449983,9.8594743 a 0.26532803,0.26389271 89.999915 0 0 -0.2366777,-0.14831 z m 10.3166834,0 a 0.26532803,0.26389271 89.999915 0 0 -0.236162,0.14831 l -0.634587,1.2913937 -1.418,0.206706 a 0.26532803,0.26389271 89.999915 0 0 -0.14573,0.452686 l 1.025261,1.006139 -0.241845,1.419553 a 0.26532803,0.26389271 89.999915 0 0 0.382407,0.279569 l 1.268138,-0.669726 1.268658,0.670242 a 0.26532803,0.26389271 89.999915 0 0 0.382405,-0.280085 L 15.03422,12.816399 16.05948,11.811294 A 0.26532803,0.26389271 89.999915 0 0 15.913753,11.358092 L 14.49575,11.150868 13.861682,9.8594743 a 0.26532803,0.26389271 89.999915 0 0 -0.236678,-0.14831 z M 3.3083206,10.575711 3.767206,11.510537 a 0.26532803,0.26389271 89.999915 0 0 0.1984375,0.145211 l 1.0262949,0.14986 -0.7425901,0.728123 a 0.26532803,0.26389271 89.999915 0 0 -0.075965,0.235127 l 0.1751832,1.027327 -0.9172575,-0.48524 a 0.26532803,0.26389271 89.999915 0 0 -0.2459778,0 L 2.2675583,13.795669 2.4432575,12.76834 A 0.26532803,0.26389271 89.999915 0 0 2.367293,12.533731 L 1.6252187,11.806127 2.6504791,11.656264 a 0.26532803,0.26389271 89.999915 0 0 0.1989535,-0.145727 z m 10.3171994,0 0.458369,0.934826 a 0.26532803,0.26389271 89.999915 0 0 0.198438,0.145211 l 1.026295,0.14986 -0.74259,0.728123 a 0.26532803,0.26389271 89.999915 0 0 -0.07597,0.235127 l 0.175183,1.027327 -0.917257,-0.48524 a 0.26532803,0.26389271 89.999915 0 0 -0.24598,0 l -0.917774,0.484724 0.175702,-1.027329 a 0.26532803,0.26389271 89.999915 0 0 -0.07597,-0.234609 l -0.742074,-0.727604 1.025261,-0.149863 a 0.26532803,0.26389271 89.999915 0 0 0.198953,-0.145727 z"
                      fill-rule="evenodd"
                      className="w-full h-full mt-2 text-white"
                      stroke-width="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <h3 class="mt-6 text-xl text-neutral-200 font-pj">
                  Client Experience
                </h3>
                <p class="mt-5 text-base text-neutral-400 font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
              <div class="md:p-8 lg:p-14">
                <Rocket strokeWidth={1.5} size={46} className="mx-auto" />
                <h3 class="mt-12 text-xl text-neutral-200 font-pj">
                  Innovative
                </h3>
                <p class="mt-5 text-base text-neutral-400 font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className=" mt-12 px-[20px] flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="pr-[2rem] text-neutral-800">
            <h1 className="text-4xl font-medium leading-tight tracking-tight">
              Recent Projects
            </h1>
          </div>
          <div className="flex">
            <Link
              href="/"
              className="relative inline-block px-3 py-1 overflow-hidden border rounded-full group w-fit h-fit border-black/60 whitespace-nowrap" // Added whitespace-nowrap class
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-neutral-900 group-hover:h-full opacity-90"></span>
              <span className="relative flex items-center gap-2 group-hover:text-white">
                <p className="text-sm font-normal truncate">See Our Projects</p>{" "}
                {/* Added truncate class */}
                <ArrowUpRight size={20} strokeWidth={1.2} />
              </span>
            </Link>
          </div>
        </div>
        <span className="block w-full border-t border-neutral-300"></span>
        <div className="flex flex-col gap-8">
          <ProjectCard title={"Eden Branch"} type={"Kitchen Remodel"} />
          <ProjectCard
            title={"Pearl Street"}
            type={"Kitchen & Bathroom Remodel"}
            imageUrl={
              "https://st.hzcdn.com/simgs/cfb12f3a02d585eb_14-2368/home-design.jpg"
            }
          />
          <ProjectCard
            title={"Longdraw"}
            type={"Custom Project"}
            imageUrl={
              "https://st.hzcdn.com/simgs/pictures/kitchens/plateau-updated-urban-restoration-img~687153960a343259_14-5353-1-3d98fd3.jpg"
            }
          />
        </div>
      </div>
      <div className=" mt-12 px-[20px] py-[60px] flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-medium tracking-tight text-neutral-900">
            Dreams Fulfilled
          </h1>
        </div>
        <span className="block w-full border-t border-neutral-300"></span>
        <div className="flex flex-col gap-3">
          <Image
            className="object-cover w-full h-full aspect-[5/10]"
            quality={100}
            width={1920}
            height={1080}
            src="https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/f0ac559d-4b07-4bad-959a-d36cc9a27653/7.jpg?format=1500w"
            alt="Custom Image"
          />
          <Image
            className="object-cover w-[75%] h-full aspect-[5/7] "
            quality={100}
            width={1920}
            height={1080}
            src="https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/0def4828-a456-448e-acd2-9f2358584b2e/12.jpg?format=1500w"
            alt="Custom Image"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-snug text-neutral-800">
            We work with our clients' visions and industry leading professionals
            to build ground up custom homes and full scale remodels & additions.
          </p>
          <OutlineButtonCTA>Our Process</OutlineButtonCTA>
        </div>
      </div>
      <div className=" mt-12 px-[20px] bg-neutral-900 flex flex-col gap-6">
        <div className="px-4 my-20">
          <CenteredImage />
          <div className="flex flex-col items-center gap-3 mt-12 text-center text-neutral-200">
            <h1 className="px-4 text-3xl font-semibold">
              Work with us and make your dreams true
            </h1>
            <p className="text-neutral-300">
              Maple Builds collaborates closely with builders, architects,
              client reps and engineers. Together, we realize an architect’s
              intent with elegant solutions to the most complex problems.
            </p>
            <OutlineButtonCTA className="mt-2" darkMode={true}>
              Schedule a consultation
            </OutlineButtonCTA>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";

const CenteredImage = ({
  largerImageUrl,
  smallerImageUrl,
  smallerWidth,
  smallerHeight,
}) => {
  const { scrollYProgress } = useScroll();
  
  // Create smooth parallax effects with different intensities for each image
  const largerImageY = useTransform(scrollYProgress, [0.8, 1], ["0%", "30%"]);
  const smallerImageY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-10%"]);

  // Log scroll progress and transform values
  scrollYProgress.onChange(value => {
    console.log('Scroll Progress:', value);
    console.log('Larger Image Y:', largerImageY.get());
    console.log('Smaller Image Y:', smallerImageY.get());
  });

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        style={{ y: largerImageY }}
        className="relative w-full h-full"
      >
        <Image
          className="object-cover h-full aspect-[3/5]"
          quality={100}
          width={1920}
          height={1080}
          src={largerImageUrl}
          alt="Background Image"
        />
      </motion.div>
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ y: smallerImageY }}
      >
        <Image
          src={smallerImageUrl}
          alt="Smaller Image"
          width={smallerWidth}
          height={smallerHeight}
        />
      </motion.div>
    </div>
  );
};

// Default props
CenteredImage.defaultProps = {
  largerImageUrl:
    "https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/5fbe2ab9-632b-49d1-965d-b73684a8e9af/8.jpg?format=2500w", // Replace with your default larger image URL
  smallerImageUrl:
    "https://st.hzcdn.com/simgs/pictures/kitchens/lincoln-project-stonington-cabinetry-and-designs-img~5431bedb0abfc986_14-3622-1-32a3c87.jpg", // Replace with your default smaller image URL
  smallerWidth: 200, // Default width for smaller image
  smallerHeight: 150, // Default height for smaller image
};

const Service = ({ image, children, link }) => {
  return (
    <Link href={link}>
      <div className="relative w-full overflow-hidden shadow-lg">
        <div className="w-full h-full overflow-y-hidden">
          <div className="z-[0] absolute object-cover w-full h-full bg-black opacity-10"></div>
          <div className="z-[0] absolute object-cover w-full h-full gradient-shadow"></div>
          <Image
            className="object-cover h-full w-full aspect-[2/3]"
            quality={100}
            width={1920}
            height={1080}
            src={image}
            alt="Custom Image"
          />
        </div>
        <div className="absolute flex items-end text-4xl font-medium leading-none text-white bottom-6 left-6 right-2">
          {children}
        </div>
      </div>
    </Link>
  );
};

Service.defaultProps = {
  image:
    "https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/45ac3af1-cfab-4f14-bfe8-ed337b747327/11.jpg?format=1500w",
  link: "/",
  children: "Custom Home",
};

const ProjectCard = ({ imageUrl, title, type, projectUrl }) => {
  return (
    <Link href={projectUrl}>
      <div className="flex flex-col mt-2">
        <div className="flex flex-col gap-3">
          <Image
            className="object-cover aspect-[16/15] h-full"
            quality={100}
            width={1920}
            height={1080}
            src={imageUrl}
            alt={title}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-5 text-neutral-800">
              <h2 className="text-xl font-semibold">{title}</h2>
              <MoveRight strokeWidth={1.3} className="" />
            </div>
            <p className="text-neutral-500">{type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Default props
ProjectCard.defaultProps = {
  imageUrl:
    "https://st.hzcdn.com/simgs/pictures/kitchens/lincoln-project-stonington-cabinetry-and-designs-img~5431bedb0abfc986_14-3622-1-32a3c87.jpg",
  title: "Default Title",
  type: "Default Description",
  projectUrl: "/",
};

export async function getStaticProps() {
  const homepage = await getHomePage();
  return {
    props: {
      homepage,
    },
  };
}

export default Home;
