import TextInfo from "../layout/sub-sections/TextInfo";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { urlFor } from "@/src/app/lib/urlFor";

export default function Testimonials(props) {
    const { testimonials, tag, header, paragraph } = props;
    let index = 0;

    return (
        <div className="flex justify-center bg-gray-100 mt-16 mb-[-4rem]">
            <div className="max-w-6xl mx-5">
                <TextInfo subtitle={tag} heading={header}>
                    {paragraph}
                </TextInfo>
                <div className="w-[90%] h-[3px] bg-gray-300 my-10 mx-auto md:w-full"></div>
                <div className="mb-4">
                    <div className="absolute z-0 flex items-center justify-between w-[95%] h-[600px]">
                        <div className="w-1/3 h-full bg-white" />
                        <div className="w-4/6 h-full ml-16 bg-gray-100" />
                    </div>
                    <div className="relative z-40 px-8 py-20 2xl:mx-auto 2xl:container">
                        <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
                           {/* <Slider>
                                <Slide index={0} tabIndex="null">
                                    <div className="flex">
                                        <div className="mt-14 lg:flex">
                                            <div className="relative lg:w-1/2 xl:h-96 h-80">
                                                <img src="images/wide-livingroom.jpg" alt="image of profile" className="flex-shrink-0 object-cover w-full h-full rounded shadow-lg object-fit" />
                                            </div>
                                            <div className="flex flex-col justify-between mt-4 bg-white p-8 lg:w-2/5 xl:ml-32 lg:ml-20 lg:mt-0">
                                                <div>
                                                    <h1 className="text-2xl font-semibold text-gray-800 xl:leading-normal">Some of the best work that was done!</h1>
                                                    <p className="mt-4 font-medium leading-6 text-gray-600 text-sm">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                                </div>
                                                <div className="mt-8 md:mt-0">
                                                    <p className="text-sm font-medium leading-4 text-black opacity-50">Anna Smith</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </Slider> */}
                            {testimonials.map((testimonial) => (
                                <SlideItem
                                key={testimonial._id}
                                index={index++}
                                image={testimonial.testimonialImage}
                                header={testimonial.testimonialHeader}
                                author={testimonial.testimonialAuthor}
                                paragraph={testimonial.testimonialParagraph}
                                />
                            ))}
                            <div className="flex items-center mt-8">
                                <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="previous"  className="rotate-180"/>
                                </ButtonBack>
            
                                <ButtonNext role="button" aria-label="next slide" className="ml-2 cursor-pointer">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                                </ButtonNext>
                            </div>
                        </CarouselProvider>
                    </div>
                    </div>
                    </div>
                    <style>{`
                        .saturate-0 {
                            filter: saturate(0);
                        }
                    `}</style>
        </div>  
    )   
}


function SlideItem(props) {
    const {header, image, author, paragraph, index} = props;

    return (
        <Slide index={index} tabIndex="null">
            <div className="flex">
                <div className="mt-14 lg:flex">
                    <div className="relative lg:w-1/2 xl:h-96 h-80">
                        <img src={urlFor(image).url()} alt="image of profile" className="flex-shrink-0 object-cover w-full h-full rounded shadow-lg object-fit" />
                    </div>
                    <div className="flex flex-col justify-between mt-4 bg-white p-8 lg:w-2/5 xl:ml-32 lg:ml-20 lg:mt-0">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800 xl:leading-normal">{header}</h1>
                            <p className="mt-4 font-medium leading-6 text-gray-600 text-sm">{paragraph}</p>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <p className="text-sm font-medium leading-4 text-black opacity-50">{author}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}