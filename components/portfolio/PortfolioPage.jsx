import TextInfo from "@/components/layout/sub-sections/TextInfo"
import CTA from "@/components/sections/CTA"
import Link from "next/link"
import Image from 'next/image';
import { urlFor } from "@/src/app/lib/urlFor";

export default function PortfolioPage(props) {
    const {projects, header, subheader, paragraph} = props;
    
    return (
        <div>
            <TextIntro header={header} subheader={subheader} paragraph={paragraph} />
            <ProjectListSection projects={projects} />
            <CTA />
        </div>
    )
}

function TextIntro(props) {
    const {header, subheader, paragraph} = props;
    
    return (
        <div class="section bg-white py-10 flex justify-center font-montserrat">
          <div class="container mx-4 max-w-screen-md text-center">
            <h1 class="text-3xl font-semibold tracking-[.4em] uppercase mb-10 md:mb-2">{header}</h1>
            <h2 class="text-xl font-semibold mb-4 text-gray-600">
                {subheader}
            </h2>
            <p class="text-gray-700">{paragraph}</p>
          </div>
        </div>

    )
}

function ProjectListSection(props) {
    const {projects} = props;

    return (
        <div className="flex justify-center font-montserrat w-full">
              <ul class="flex flex-wrap list-none mx-4 p-0 w-full lg:mx-12">
                {projects.map((project) => (
                    <Project
                    key={project._id}
                    image={project.mainImage}
                    name={project.title}
                    slug={project.slug}
                    />
                ))}
              </ul>
        </div>
    )
}

function Project(props) {
    const {image, name, slug} = props
    console.log(urlFor(image).url())
    return (
        <li class="flex w-full p-4 mx-6 md:w-[50%] md:mx-0 lg:w-[33.3333%]">
            <Link href={`/portfolio/${slug.current}`} className="w-full">
                <div class="bg-white flex flex-col overflow-hidden relative cursor-pointer">
                  <div className="aspect-square w-full">
                          {/* <img src={urlFor(image).url()} className="object-cover h-full max-w-full align-middle" alt="Image" /> */}
                          {/* <img src={`/images/wide-house3.jpg`} className="object-cover h-full max-w-full align-middle" alt="Image" /> */}
                          {/* <Image 
                            src={urlFor(image).url()}
                            alt={name}
                            // width={getImageDimensions(image).width}
                            // height={getImageDimensions(image).height}
                            fill={true}
                            style={{objectFit: "cover"}}
                            placeholder="blur"
                            blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
                           /> */}
                           <img
                             src={urlFor(image).url()}
                             className="object-cover h-full hover:scale-150"
                           />

                  </div>
                  <div className="absolute inset-0  bg-black  bg-opacity-50 opacity-0 hover:opacity-100  transition-all duration-[200ms]">
                      <div className="flex items-center justify-center h-full p-4">
                          <p className="text-gray-100 text-[250%] text-center font-bold md:text-3xl lg:text-3xl">{name}</p>
                      </div>
                  </div>
                </div>
          </Link>
        </li>

    )
}

Project.defaultProps = {
    img: 'wide-house3.jpg',
    name: 'Add Name Please'
}