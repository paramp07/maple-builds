import CTA from "@/components/sections/CTA";
// import IntroSectionBackground from "@/components/sections/IntroSectionBackground";
import { getProcessPage, getProcesses } from "@/src/app/lib/sanity";
import { urlFor } from "@/src/app/lib/urlFor";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function ProcessPage(props) {
  const { processPage, processes } = props;
  const SEO = {
    title: "Process",
    description: "Learn about our Process",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <section className="pt-[10rem] font-dmsans">
        <section className="w-[90%] mx-auto">
          <div className="">
            <h2 className="uppercase text-neutral-600">How we do things</h2>
            <h1 className="text-6xl mt-3 font-semibold text-neutral-800  tracking-[-4px]">
              Our Process
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
              "https://st.hzcdn.com/simgs/pictures/bathrooms/modern-charm-spanish-master-suite-sato-architects-inc-img~34210e170b7739b5_14-3674-1-511f444.jpg"
            }
          />
        </section>
        <section className="flex flex-col mt-4">
          <Process />
          <Process hasBackground={true}/>
          <Process />
          <Process />
        </section>
        <section className="px-[20px] mt-10">
          <div className="flex flex-col px-8 py-16 bg-neutral-800 text-neutral-100">
            <h1 className="text-4xl tracking-wide">
              How do we manage our projects?
            </h1>
            <p className="mt-4 leading-8 ">
              We use JobTread, the leading construction management software, so
              you can track and manage your project in one place. With real-time
              updates, clear financial insights, and centralized communication,
              JobTread simplifies your build from start to finish.
            </p>
            <div className="mt-4 overflow-hidden">
              <Image
                width={400}
                height={400}
                src={
                  "https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/d932df31-3838-418e-b199-2adea2c9ca4f/our_team_hero.jpg?format=2500w"
                }
              />
            </div>
          </div>
        </section>
        <section className="mx-[20px] mt-20 flex flex-col gap-[12rem] z-1 pb-28">
          <InfoSection />
          <InfoSection title={"View Job Documents"} />
          <InfoSection title={"Digitally Approve Work"} />
        </section>
        <section className="">
          <div className="flex flex-col gap-6 px-8 py-10 text-center text-neutral-900 bg-neutral-200">
            <h1 className="text-4xl font-medium leading-relaxed">
              Using Your Client Portal
            </h1>
            <p className="leading-relaxed">
              Watch the video below for a brief introduction on how you'd use
              your client portal. Once you have signed on to build your project,
              the Help Guide below will answer any additional questions you may
              have.
            </p>
            <div
              className="mt-4 video drop-shadow-xl"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src={`https://www.youtube.com/embed/yOh3R7Ts7dE?embed_config=%7B%22enc%22:%22AQ2SFqC0FdwZqDOXmryLa2zmD5jJHVm_woGPlGDkgiz6vZLyMcb6XBiRsarpatiyCToJEr64sEhJGAz3d8kVGk_uYBqHCBbfOf9elfT2B2dja6vit-v6_dnL5v5n1lG8TpmkDOADGl-ZMt4Y6ON-aK7t2HSJH5qZRGkXaPS9V22_yGq6%22%7D&errorlinks=1`}
                frameBorder="0"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

const Process = ({ title, description, imageUrl, hasBackground }) => {
  return (
    <div className={`pt-10 ${hasBackground ? 'bg-neutral-200' : ''}`}>
      <div className="text-neutral-900 px-[20px] flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="font-mulish">{description}</p>
      </div>
      <Image
        className="object-cover w-full mt-10 aspect-[3/2]"
        alt="image"
        quality={100}
        width={1920}
        height={1080}
        src={imageUrl}
      />
    </div>
  );
};

Process.defaultProps = {
  title: "Initial Consultation",
  description: `This phase is a combination of first dates... we'll see if we
  are a good fit for each other based on your needs and our
  construction process. First, we'll get on a brief Discovery Call
  to discuss your project ideas, goals, and budget. If we are a
  good fit for your needs, we'll conduct an On-Site Consultation
  to delve deeper into project specifics. We'll capture the
  current space, discuss all your needs and desires, and take
  measurements to help prepare our Ballpark Estimate. Finally,
  we'll provide you with a Ballpark Estimate. This rough estimate
  is based on insights gathered during the Discovery Call, On-Site
  Consultation, and any provided design inspirations and gives you
  a general idea of the financial commitment required for your
  project.`,
  imageUrl: "https://st.hzcdn.com/simgs/pictures/bathrooms/modern-charm-spanish-master-suite-sato-architects-inc-img~34210e170b7739b5_14-3674-1-511f444.jpg",
  hasBackground: false // Default value for hasBackground
};

const InfoSection = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold leading-10">{title}</h1>
      <p className="text-[1.2rem] leading-[2.75rem]">{description}</p>
      <div>
        <Image
          className="object-contain w-full mt-10 drop-shadow-2xl"
          alt="image"
          quality={100}
          width={1920}
          height={1080}
          src={imageUrl}
        />
      </div>
    </div>
  );
};

InfoSection.defaultProps = {
  title: "All Communication in One Place",
  description:
    "Easily monitor the project as new updates happen, without needing to be on-site and keep everyone on the same page while eliminating the need for multiple communication channels.",
  imageUrl:
    "https://lh3.googleusercontent.com/iaWga86fscsCwIN274okNr4JaXgHaNha5CjDIjXHym16qhfGXROajsbL8kA0da4GOq2m_ydGaExrf94Jsa4WS6-yF1Fn8u_0tXJ0v46tIITHsCUTPNDWiOdzm3zJayOnCA=w1280",
};

// function ProcessSection(props) {
//   const { processes } = props;

//   const process = processes.map((process) => (
//     <Process
//       key={process._id}
//       image={process.processImage}
//       heading={process.processHeader}
//       paragraph={process.processParagraph}
//     />
//   ));

//   return (
//     <main className="contain xl:mx-10">
//       <section className="flex flex-col items-center features">
//         {
//           /* <Process heading='Testing New Heading' image='square-house.jpg'/>
//         <Process />
//         <Process />
//         <Process />
//         <Process /> */
//           process
//         }
//       </section>
//       <style>
//         {`

//         .feature--image img {
//           box-shadow: 2px 2px 6px rgba(0, 0, 0, .33);
//         }

//         @media (min-width: 1024px) {
//           .feature-pair:nth-child(even) {
//             flex-direction: row-reverse;
//           }
//         }

//         .feature-pair {
//           flex-wrap: wrap;
//           justify-content: space-between;
//           margin-bottom: 64px;
//         }

//         .feature {
//           flex-basis: 45%;
//           text-align: center;
//         }

//         .feature--text {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           padding: 0 20px;
//         }

//         .features {
//           margin: 64px 0;

//           .features > h4 {
//             font-size: 23px;
//             font-weight: bold;
//             padding: 10px 0;
//             border-bottom: 1px solid rgb(219, 219, 219);
//             margin: 0;
//             line-height: 27px;
//           }

//           .feature > p {
//             font-size: 18px;
//             font-weight: 300;
//             color: #4e4e4e;
//             line-height: 28.8px;
//             margin-top: 5px;
//           }
//         }

//         `}
//       </style>
//     </main>
//   );
// }

// function Process(props) {
//   const { heading, paragraph, image } = props;

//   return (
//     <section className="feature-pair flex flex-col space-y-6 mx-8 max-w-[600px] lg:flex-row lg:max-w-none">
//       <article className="shadow-lg feature feature--image ">
//         <img
//           src={urlFor(image).url()}
//           className="object-cover w-full h-[450px]"
//         />
//       </article>
//       <article className="space-y-2 feature feature--text">
//         <h4 className="text-3xl font-semibold">{heading}</h4>
//         <hr />
//         <p className="text-lg text-gray-700">{paragraph}</p>
//       </article>
//     </section>
//   );
// }

// Process.defaultProps = {
//   heading: "Fast, Easy, Foolproof Link Creation",
//   paragraph:
//     "Creating tracking links shouldn't be difficult, so we've streamlined the entire process. Whenever you create a link, we save the data so it's at your fingertips next time you need it. No more wondering whether you usually use facebook.com or facebook.",
//   image: "wide-house2.jpg",
// };

// export async function getStaticProps() {
//   const processPage = await getProcessPage();
//   const processes = await getProcesses();

//   return {
//     props: {
//       processPage,
//       processes,
//     },
//   };
// }
