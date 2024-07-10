export default function TextInfo(props) {
    const {subtitle, heading, children} = props;
    return (
        <div className="mx-6 text-center font-montserrat">
          <div className="mt-10 mb-6">
              <p className="mb-2 text-lg font-bold text-gray-900 uppercase text-opacity-30">- {subtitle} -</p>
              <h5 className="text-4xl font-semibold text-gray-800 md:text-5xl">{heading}</h5>
          </div>
          <p className="text-[1.1rem] leading-8 lg:text-[1.2rem]">
            {children}
          </p>
        </div>
    )
}