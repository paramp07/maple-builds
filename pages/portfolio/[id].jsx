import CTA from "@/components/sections/CTA"
import Link from "next/link"
import { getPaths} from "@/src/app/lib/sanity"
import { getEventBySlug } from "@/src/app/lib/sanity";
import Image from 'next/image';
import { urlFor } from "@/src/app/lib/urlFor";


export default function ProjectInfo(props) {
    const { project } = props
    console.log(project)

    const projectContributers = {
        photography: project.photographer,
        interior: project.interior,
        architecturalDesign: project.architecturalDesign,
        landscape: project.landscape
    }

    // Error Handling Dont touch
    if (!project || project == undefined) {
        return (
          <div>
            <p>No event found!</p>
          </div>
        );
      }

    return (
        <div className="flex flex-col items-center w-full mt-8">
            {/* <div className="">
                <img src='/images/wide-house3.jpg' alt="" className="object-cover w-auto h-full"/>
                <Image
                  src="/images/wide-house3.jpg"
                  alt=""
                  className="object-cover w-auto h-full"
                />
            </div> */}
            <div className="w-full">
                <div className="relative object-cover w-full h-screen">
                    <Image
                      alt='Mountains'
                      src={urlFor(project.mainImage).url()}
                      layout='fill'
                      objectFit='cover'
                    />
                </div>
            </div>
            
            
            <div className="flex flex-col mx-6 text-center mt-[36px] font-montserrat">
                <h1 className="font-semibold text-4xl text-black uppercase tracking-[6px]">{project.title}</h1>
                <p className="mt-6 text-gray-700 text-lg max-w-[1100px]">{project.description}
                </p>
            </div>
            <ProjectMetadata meta={projectContributers} />
            <ProjectPhotosSection photos={project.Images} />
            <CTA />
        </div>
    )
}


function ProjectMetadata(props) {
    const {meta} = props

    return (
        <div className="w-full mt-12">
            <div className="grid grid-cols-2 gap-y-4">
                {meta.photography ? (
                    <div className="space-y-2 text-center">
                        <h3 className="text-2xl font-semibold">Photography</h3>
                        <p className="underline text-gray-950">{meta.photography}</p>
                    </div>
                ) : null }
                {meta.architecturalDesign ? (
                    <div className="space-y-2 text-center">
                        <h3 className="text-2xl font-semibold">Architectural Design</h3>
                        <p className="underline text-gray-950">{meta.architecturalDesign}</p>
                    </div>
                ) : null }
                {meta.interior ? (
                    <div className="space-y-2 text-center">
                        <h3 className="text-2xl font-semibold">Interior</h3>
                        <p className="underline text-gray-950">{meta.interior}</p>
                    </div>
                ) : null }
                {meta.landscape ? (
                    <div className="space-y-2 text-center">
                        <h3 className="text-2xl font-semibold">Landscape</h3>
                        <p className="underline text-gray-950">{meta.landscape}</p>
                    </div>
                ) : null }
            </div>
        </div>
    )
}

function ProjectPhotosSection(props) {
    const {photos} = props
    
    return (
        <div className="flex justify-center w-full font-montserrat mt-14">
            <div class="my-0 mx-4 w-full">
              <div class="grid grid-cols-1 m-0 p-0 gap-8 lg:grid-cols-2 xl:grid-cols-3 xl:gap-12" id="img-gallery">
                {photos.map((photo) => (
                    <Photo
                    key={photo._key}
                    image={photo}
                    />
                ))}


                {/* <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/>
                <Photo img='wide-house3.jpg' name='Oak Lawn'/> */}
              </div>
            </div>
            <style>
                {`
                #img-gallery {
                    grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
                    grid-auto-flow: row dense;
                }

                @media (min-width: 1280px) {
                    #img-gallery
                    .img:nth-child(3n+2),
                    #img-gallery .project-cell:nth-child(5n+2) {
                        grid-row-end: span 2;
                    }
                }
                
                `}
            </style>
        </div>
    )
}

function Photo(props) {
    const {image, name, vertical} = props

    return (
        <div class={`img grid ${vertical == 'true' ? 'row-span-2' : ''}`}>
                  {/* <div className="">
                          <img src={`/images/${img}`} className="object-cover h-full max-w-full align-middle" alt="Image" />
                  </div> */}
                  <div className="relative aspect-[18/9]  object-cover">
                    <Image
                      alt='Mountains'
                      src={urlFor(image).url()}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
        </div>

    )
}

Photo.defaultProps = {
    img: 'wide-house3.jpg',
    name: 'Add Name Please',
    vertical: false
}

// SERVER ACTIONS SSG


  
  
export async function getStaticProps(context) {
  console.log("revalidating")
  const { params } = context;
  const projectSlug = params.id
  
  const project = await getEventBySlug(projectSlug);
  return {
    props: {
      project
    },
    revalidate: process.env.SANITY_WEBHOOK_SECRET ? undefined : 60,
  }
}

export async function getStaticPaths() {
  const paths = await getPaths();

  return {
    paths: paths.map((slug) => ({params: {id: slug}})),
    fallback: true,
  }
}