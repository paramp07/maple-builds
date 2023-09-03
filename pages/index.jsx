import { NextPage } from "next";
import Carousel from "../components/layout/ui/Slider";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import OurWorkSection from "@/components/sections/OurWork";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import ShortContact from "@/components/sections/ShortContact";
import Footer from '@/components/sections/Footer';
import Header from "@/components/layout/main-home-header";
import { getAllTestimonials } from "@/src/app/lib/sanity";
import { getHomePage } from "@/src/app/lib/sanity";
import TestTestimonial from "@/components/sections/TestTestmonial";


function Home(props) {
  const {testimonials, homepage} = props
  const images = [
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
    "https://placehold.co/480x300?font=roboto&text=Slide+4",
  ];
  return (
    <div className="">
      <Header />
      <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} fill className="object-cover" alt="alt" />
            </div>
          );
        })}
      </Carousel>
      <OurWorkSection
        tag={homepage.workSectionTag}
        header={homepage.workSectionHeader}
        paragraph={homepage.workSectionParagraph}
        remodelImage={homepage.remodelsSectionImage}
        customHomeImage={homepage.customHomesSectionImage}

      />
      <Testimonials
       testimonials={testimonials}
       tag={homepage.testimonialSectionTag}
      header={homepage.testimonialSectionHeader}
      paragraph={homepage.testimonialSectionParagraph}
       />
      <CTA />
      <style>
        {`
        .header {
          display: none;
        }
        `}
      </style>
    </div>
  );
};

export async function getStaticProps() {
  const testimonials = await getAllTestimonials();
  const homepage = await getHomePage();
  return {
      props: {
          testimonials, homepage
      }
  }
}

export default Home;

