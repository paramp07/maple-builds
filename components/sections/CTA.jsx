export default function CTA() {
    const backgroundStyle = {
        background: "linear-gradient(rgba(0, 0, 0, 0.89), rgba(0, 0, 0, 0.89)), url(/images/construction.jpeg) center top/cover no-repeat"
     }
    return (
        <div style={backgroundStyle} className="mt-16 text-gray-300 font-montserrat">
            <div className="px-10 py-[4rem] flex flex-col lg:flex-row lg:px-20 lg:py-[5.4rem] lg:items-center lg:justify-between">
                <div className="text-center w-full lg:text-left lg:w-[60%]">
                    <h3 className="text-3xl font-semibold">A cutting-edge and exclusive home remodeling and construction business.</h3>
                    <p className="mt-6 text-lg lg:text-[1.05rem]">Maple Builds is a modern and sophisticated 
                        company that is always at the forefront of 
                        trends. We are constantly updating our 
                        offerings to reflect the latest styles 
                        and technologies. We are also committed 
                        to sustainable practices, and we use 
                        only environmentally friendly materials
                         and methods.
                    </p>
                </div>
                <div className="flex justify-center mt-8 lg:items-center lg:mt-0 lg:block">
                    <div className="h-full">
                    <button className="px-8 py-4 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-sm focus:outline-none hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 lg:py-4 lg:px-9 "
                      >
                        Schedule A Meeting 📅
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}