import { MapleBuildsLogo } from "@/components/ui/logo";
import Image from "next/image";
import MapleLogo from "../../public/white_logo.svg";

export default function Header() {
  return (
    <div className="fixed w-full bg-transparent mix-blend-exclusion">
      <nav className=" max-w-[1600px] mx-auto">
        {/* <MapleBuildsLogo /> */}
        <div className="flex items-center justify-between py-2 mix-blend-exclusion">
          <div className="px-4 w-fit">
            <Image priority src={MapleLogo} height={60} />
          </div>
          <div className="px-[20px]">
            <div class="hamburger-icon flex flex-col justify-between mix-blend-exclusion w-[3rem] h-[.6rem] cursor-pointer">
              <span class="h-0.5 w-full bg-white top-1/2 transform -translate-y-1/2"></span>
              <span class="h-0.5 w-full bg-white bottom-1/2 transform -translate-y-1/2"></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
