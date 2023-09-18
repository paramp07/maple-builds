export default function HamburgerMenuOpen() {
    return (
        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[450px] text-5xl ">
          <li className="my-8 p-2 opacity-80 uppercase border-b-4 border-gray-400 hover:border-gray-950 hover:opacity-100 transition-all">
            <a href="/about">About</a>
          </li>
          <li className="my-8 p-2 opacity-80 uppercase border-b-4 border-gray-400 hover:border-gray-950 hover:opacity-100 transition-all">
            <a href="/portfolio/custom-homes">Custom Homes</a>
          </li>
          <li className="my-8 p-2 opacity-80 uppercase border-b-4 border-gray-400 hover:border-gray-950 hover:opacity-100 transition-all">
            <a href="/portfolio/remodels">Remodels</a>
          </li>
          <li className="my-8 p-2 opacity-80 uppercase border-b-4 border-gray-400 hover:border-gray-950 hover:opacity-100 transition-all">
            <a href="/contact">Contact</a>
          </li>
        </ul>
    )
}