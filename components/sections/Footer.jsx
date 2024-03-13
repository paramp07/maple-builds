export default function Footer() {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  const currentYear = getCurrentYear();

  return (
    <div className="flex flex-col-reverse mx-auto px-3 justify-between max-w-[500px] md:max-w-none w-full text-gray-950 space-y-4 items-center md:px-[9rem] py-6 md:py-12 md:flex-row md:space-y-0 bg-white ">
      <div className="text-2xl font-semibold font-montserrat tracking-tighter opacity-90">
        maple builds
      </div>
      <p className="opacity-60 text-sm mt-0">
        Copyright © {currentYear} Maple Builds LLC
      </p>
      <div className="w-full md:w-auto">
        <ul className="flex ul-list justify-between px-10 md:space-x-5 md:px-0">
          <li className="social-links">
            <a target="_blank" href="https://www.instagram.com/maple.builds/">
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
          </li>
          <li className="social-links">
            <a target="_blank" href="https://www.facebook.com/maplebuildsllc/">
              <i class="fa-brands fa-square-facebook fa-xl"></i>
            </a>
          </li>
          <li className="social-links">
            <a target="_blank" href="https://www.youtube.com/@MapleBuilds">
              <i class="fa-brands fa-youtube fa-xl"></i>
            </a>
          </li>
          <li className="social-links">
            <a target="_blank" href="https://www.tiktok.com/@maplebuilds">
              <i class="fa-brands fa-tiktok fa-xl"></i>
            </a>
          </li>
        </ul>
      </div>
      <style>
        {`
              .social-links a {
               cursor: pointer;
               height: 20px;
              }
              `}
      </style>
    </div>
  );
}
