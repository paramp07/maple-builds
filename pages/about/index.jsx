import ShortInfoImage from "@/components/sections/ShortInfoImage"
import TeamMembersSection from "@/components/team/TeamMembersSection";
import Image from "next/image"
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react'
import CTA from "@/components/sections/CTA";
import { getAllTeamMembers } from "@/src/app/lib/sanity";
import { getAboutPage } from "@/src/app/lib/sanity";
import { urlFor } from "@/src/app/lib/urlFor";
import { NextSeo } from "next-seo";

function AboutPage(props) {
    const {members, aboutPage} = props

    const SEO = {
        title: 'About',
        description: 'About Maple Builds',
    }


    return (
        <>
        {/* <NextSeo {...SEO} />
        <div className="mt-2">
            <ShortInfoImage 
                heading={aboutPage.ctaHeader}
                image={aboutPage.contactUsImage}
                button1="Contact Us"
                button1_link="/contact"
                button2="Our Work"
                button2_link='/'
            >
            {aboutPage.ctaParagraph}
            </ShortInfoImage>
            <TeamMembersSection
                members={members}
                tag={aboutPage.teamSectionTag}
                header={aboutPage.teamSectionHeader}
                paragraph={aboutPage.teamSectionParagraph}
            />
            <MissionSection
                header={aboutPage.missionSectionHeader}
                paragraph={aboutPage.missionSectionParagraph}
            />
            <ServicesSection
                tag={aboutPage.serviceSectionTag}
                header={aboutPage.serviceSectionHeader}
                paragraph={aboutPage.serviceSectionParagraph}
                generalContractingImage={aboutPage.generalContractingImage}
                customHomesImage={aboutPage.customHomesImage}
                additionsImage={aboutPage.additionsImage}
                remodelsImage={aboutPage.remodelsImage}
            />
            <CTA></CTA>
        </div> */}
        </>
    )
}

function MissionSection(props) {
    const {header, paragraph} = props
    
    return (
         <div className="px-6 text-center bg-gray-100 py-14 font-montserrat">
            <div className="max-w-[900px] mx-auto">
                <h3 className="text-4xl">{header}</h3>
                <p className="mt-4">{paragraph}</p>
            </div>
         </div>
    )
}

function ServicesSection(props) {
    const {
        tag, 
        header, 
        paragraph, 
        generalContractingImage, 
        customHomesImage, 
        additionsImage, 
        remodelsImage} 
        = props

    return (
        <div className="block mx-8 font-montserrat lg:flex">
            <div className="flex-1 block lg:hidden">
                <TextInfo subtitle={tag} heading={header}>
                    {paragraph}
                </TextInfo>
            </div>
            <div className="flex-1 hidden ml-10 lg:flex lg:flex-1 lg:items-center">
               <div className="pl-10 text-left border-l-4 border-black font-montserrat">
                <div className="mb-6">
                    <p className="mb-2 text-lg font-bold text-gray-900 uppercase text-opacity-30">[ {tag} ]</p>
                    <h5 className="text-4xl font-semibold text-gray-800 md:text-5xl">{header}</h5>
                </div>
                <p className="text-[1.1rem] leading-8 lg:text-[1.2rem]">
                    {paragraph}
                </p>
              </div>
            </div>
            
            <div className="mx-auto mt-10 max-w-[670px] space-y-6 grid grid-cols-1 flex-1 gap-0 md:grid-cols-2 md:gap-6 md:space-y-0 lg:mx-[3.5rem]">
                <Service image={generalContractingImage}>
                    General Contracting
                </Service>
                <Service image={customHomesImage}>
                    Custom Homes
                </Service>
                <Service image={additionsImage}>
                    Additions
                </Service>
                <Service image={remodelsImage}>
                    Remodels and Renovations
                </Service>
            </div>
        </div>
    )
}

function Service(props) {
    const {children, image} = props;

    const backgroundStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${urlFor(image).url()}) center bottom/cover no-repeat`
    }

    return (
        <div className="w-full aspect-square flex flex-col justify-between px-7 py-10 m-auto text-white max-w-[420px] lg:px-4 lg:py-5" style={backgroundStyle}>
            <h4 className="text-4xl font-semibold md:text-4xl lg:text-[1.6rem] xl:text-[2rem]">{children}</h4>
            <a href="/contact" class="group text-gray-100 transition duration-300 text-2xl w-fit md:text-xl lg:text-[1.2rem]">
                Learn More
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white opacity-70"></span>
            </a>
        </div>
    )
}

Service.defaultProps = {
    title: 'Enter Title',
}

  
export async function getStaticProps() {
    const members = await getAllTeamMembers();
    const aboutPage = await getAboutPage();

    return {
        props: {
            members, aboutPage
        }
    }
}
export default AboutPage