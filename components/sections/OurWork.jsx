import { urlFor } from "@/src/app/lib/urlFor";
import TextInfo from "../layout/sub-sections/TextInfo"
import Link from 'next/link'

export default function OurWorkSection(props) {
    const {tag, header, paragraph, remodelImage, customHomeImage} = props;
    return (
        <div className="flex justify-center font-montserrat">
            <div className="max-w-6xl mx-0 md:mx-5">
                <div className="flex flex-col items-center">
                    <TextInfo subtitle={tag} heading={header}>
                          {paragraph}
                    </TextInfo>
                    <div className="w-[100%] md:w-[90%] h-[3px] bg-gray-300 my-16 md:w-full">
                        
                    </div>
                    <div className="flex flex-col items-center w-full gap-0 md:flex-row md:gap-6 md:px-6">
                        <Link href='/portfolio/remodels' className="h-[350px] w-[100%] md:w-[90%] md:h-[500px] md:max-h-[370px] md:w-full living-room cursor-pointer">
                            <div class="overlay"></div>
                            <div class="text-container">
                                <h4 class="info-heading text-5xl md:text-3xl font-semibold">Remodels</h4>
                            </div>
                        </Link>
                        <Link href="/portfolio/custom-homes" className="h-[350px] w-[100%] md:w-[90%] md:h-[500px] md:max-h-[370px] md:w-full house cursor-pointer">
                                <div class="overlay"></div>
                                <div class="text-container">
                                    <h4 class="info-heading text-5xl md:text-3xl font-semibold" id="fix-margin">Custom Home Builds</h4>
                                </div>
                        </Link>
                    </div>
                </div>
            </div>
            <style>{`
                    
                    .living-room,
                    .house {
                      position: relative; /* Add this to position the overlay correctly */
                      background-position: center top;
                      background-size: cover;
                      background-repeat: no-repeat;
                    }
                    
                    .overlay {
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background: rgba(0, 0, 0, 0);
                      transition: background 0.3s ease;
                    }
                    
                    .living-room:hover .overlay,
                    .house:hover .overlay {
                      background: rgba(0, 0, 0, 0.65);
                    }
                    
                    /* The rest of your styles for .living-room and .house go here */
                    .living-room {
                      background-image: url(${urlFor(remodelImage).url()});
                    }
                    
                    .house {
                      background-image: url(${urlFor(customHomeImage).url()});
                    }
                    .text-container {
                        padding: 20px;
                        text-align: center; /* Center the text horizontally */
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        transition: all ease .4s;
                      }
                      
                      .info-heading,
                      .info-paragraph {
                        color: transparent;
                        margin: 0;
                        transition: all ease .4s;
                      }

                
                      
                      .info-paragraph {
                        margin-top: 10px;
                      }
                      
                      .living-room:hover .text-container,
                      .house:hover .text-container {
                        transform: translateY(-40%);
                      }

                      .living-room:hover .info-heading,
                      .house:hover .info-heading {
                        color: white;
                      }
                    
            `}
            </style>
        </div>
    )
}