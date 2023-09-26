import { urlFor } from "@/src/app/lib/urlFor";
import Image from "next/image"

export default function ShortInfoImage(props) {
    const {children, heading, image, button1, button1_link, button2_link, button2} = props;

    const imageUrl = urlFor(image).url()

    const backgroundStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl}) center bottom/cover no-repeat`
     }
    return (
        <div className="">
            <div className="flex flex-col justify-between max-w-[1500px] mx-auto lg:flex-row-reverse">
                <div class="h-[250px] mx-6 rounded-lg sm:h-[440px] md:mx-0 md:rounded-none lg:w-[90%] lg:mr-8 lg:rounded-lg lg:my-6" style={backgroundStyle}></div>
                <div class="px-6 mt-4 max-w-[650px] bg-white place-self-center md:mt-[-365px] md:p-8 lg:mt-0">
                    <h1 class="text-4xl font-semibold font-montserrat text-gray-800">{heading}</h1>
                    <p class="text-gray-700 mt-3">
                        {children}
                    </p>
                    <div className="flex mt-5 space-x-4 font-montserrat">
                        <div className="flex">
                            <button className="px-4 py-2 font-bold text-white bg-gray-950 hover:bg-gray-800"><a href={button1_link}>{button1}</a></button>
                        </div>
                        <div className="flex">
                            <button className="font-semibold"><a href={button2_link}>{button2}</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    
}

ShortInfoImage.defaultProps = {
    children: "Enter Text",
    heading: "Enter Heading",
    image: "wide-house3.jpg",
    button1: "Enter Text",
    button2: "Enter Text"
  }