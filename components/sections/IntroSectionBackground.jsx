import { urlFor } from "@/src/app/lib/urlFor"

export default function IntroSectionBackground(props) {
    const {image, header, paragraph} = props

    const imageUrl = urlFor(image).url()
    const backgroundStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl}) center center/cover no-repeat`
     }
    return (
        <div className="font-montserrat">
            <div style={backgroundStyle} className="py-[100px] flex justify-center">
                <div className='max-w-[650px] bg-white p-[50px]'>
                    <h1 className="text-5xl font-semibold">{header}</h1>
                    <p className="mt-[15px] text-gray-700">
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    )
}

IntroSectionBackground.defaultProps = {
    image: "wide-house3.jpg",
    heading: "Our Process",
    children: "Add Some Text!"
}