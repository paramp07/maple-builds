import Image from "next/image"

export default function ShortContact() {
    const backgroundStyle = {
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/wide-house3.jpg) center top/cover no-repeat fixed"
     }
    return (
        <div className="flex flex-col">
            <div class="bg-fixed h-[500px] sm:h-[400px]" style={backgroundStyle}></div>
            <div class="p-12 mt-[-230px] max-w-[750px] w-full sm:w-[75%] bg-white place-self-center sm:border-t-6 border-gray-900 shadow-lg">
                <h5 className="font-bold font-montserrat">Contact us</h5>
                <h1 class="text-4xl font-semibold font-montserrat text-gray-800 mt-4">We can help build your project!</h1>
                <p class="text-gray-700 mt-2">
                    Whatever task we undertake is a chance 
                    for us to produce a house that surpasses your expectations in 
                    terms of health, durability, efficiency, and comfort. We think 
                    that every house should be a place where you may thrive, and we 
                    are dedicated to constructing homes that promote your health, 
                    safety, and well-being.
                </p>
                <div className="flex mt-12 space-x-4 font-montserrat">
                    <div className="flex">
                        <div className="p-1 bg-black">
                            <Image
                              src='/email-icon.png'
                              width={16}
                              height={16}
                              alt="Email Icon"
                            ></Image>
                        </div>
                        <p className="ml-2 font-semibold">maple@builds.com</p>
                    </div>
                    <div className="flex">
                        <div className="p-1 bg-black">
                            <Image
                              src='/phone-icon.png'
                              width={16}
                              height={16}
                              alt="Email Icon"
                            ></Image>
                        </div>
                        <p className="ml-2 font-semibold">+1 214-604-1344</p>
                    </div>
                </div>
            </div>
        </div>
    )
}