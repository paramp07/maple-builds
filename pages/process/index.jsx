import CTA from "@/components/sections/CTA";
import IntroSectionBackground from "@/components/sections/IntroSectionBackground";
import ShortInfoImage from "@/components/sections/ShortInfoImage";
import { getProcessPage, getProcesses } from "@/src/app/lib/sanity";
import { urlFor } from "@/src/app/lib/urlFor";
import { NextSeo } from "next-seo";

export default function ProcessPage(props) {
  const {processPage, processes} = props
  const SEO = {
    title: 'Process',
    description: 'Learn about our Process',
}

  return (
    <>
      <NextSeo {...SEO} />
      <div>
          <IntroSectionBackground
          header={processPage.ourProcessHeader}
          paragraph={processPage.ourProcessParagraph}
          image={processPage.ourProcessBackgroundImage}
          />
          <ProcessSection processes={processes} />
          <CTA />
      </div>
    </>
  );
}


function ProcessSection(props) {
  const {processes} = props

  const process = processes.map((process) => (
    <Process
    key={process._id}
    image={process.processImage}
    heading={process.processHeader}
    paragraph={process.processParagraph}
    />
))

  return (
    <main className="contain xl:mx-10">
      <section className="features flex flex-col items-center">
        {/* <Process heading='Testing New Heading' image='square-house.jpg'/>
        <Process />
        <Process />
        <Process />
        <Process /> */
        process
        }
      </section>
      <style>
        {`

        .feature--image img {
          box-shadow: 2px 2px 6px rgba(0, 0, 0, .33);
        }
        
        @media (min-width: 1024px) {
          .feature-pair:nth-child(even) {
            flex-direction: row-reverse;
          }
        }
        

      
        .feature-pair {
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 64px;
        }
      
        .feature {
          flex-basis: 45%;
          text-align: center;
        }
      
        .feature--text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 20px;
        }
      
        .features {
          margin: 64px 0;
          
          .features > h4 {
            font-size: 23px;
            font-weight: bold;
            padding: 10px 0;
            border-bottom: 1px solid rgb(219, 219, 219);
            margin: 0;
            line-height: 27px;
          }
          
          .feature > p {
            font-size: 18px;
            font-weight: 300;
            color: #4e4e4e;
            line-height: 28.8px;
            margin-top: 5px;
          }
        }

        `}
  </style>
</main>
  )
}

function Process(props) {
  const {heading, paragraph, image} = props;

  return (
    <section className="feature-pair flex flex-col space-y-6 mx-8 max-w-[600px] lg:flex-row lg:max-w-none">
      <article className="feature feature--image shadow-lg  ">
        <img src={urlFor(image).url()} className="object-cover w-full h-[450px]" />
      </article>
      <article className="feature feature--text space-y-2">
        <h4 className="font-semibold text-3xl">{heading}</h4>
        <hr />
        <p className="text-gray-700 text-lg">{paragraph}</p>
      </article>
    </section>
  )
}


Process.defaultProps = {
  heading: 'Fast, Easy, Foolproof Link Creation',
  paragraph: "Creating tracking links shouldn't be difficult, so we've streamlined the entire process. Whenever you create a link, we save the data so it's at your fingertips next time you need it. No more wondering whether you usually use facebook.com or facebook.",
  image: 'wide-house2.jpg'
}

export async function getStaticProps() {
  const processPage = await getProcessPage();
  const processes = await getProcesses();

  return {
      props: {
          processPage, processes
      }
  }
}


