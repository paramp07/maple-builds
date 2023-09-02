export default function HamburgerMenuOpen() {
    return (
        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
          <li className="my-8 opacity-80 uppercase border-b border-gray-400 hover:border-gray-950 hover:opacity-100 transition-all">
            <a href="/about">About</a>
          </li>
          <li className="my-8 opacity-80 uppercase border-b border-gray-400 hover:border-gray-950 hover:opacity-100 transition-all">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="my-8 opacity-80 uppercase border-b border-gray-400 hover:border-gray-950 hover:opacity-100 transition-all">
            <a href="/contact">Contact</a>
          </li>
        </ul>
    )
}