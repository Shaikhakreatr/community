
import React from "react";
import Image from "next/image";
import Link from "next/link";
import KreatrLogo from '../../../public/assets/images/home_page/logo/Kreatr-logo.svg'


const Header = () => {
  return (
    <>
      <header className="">
        <div className="flex items-center justify-center border-b border-gray-500 p-2">
          <Link href="/"><Image className="my-3 xl:h-[32px] xl:w-[181px] lg:w-[10rem] lg:h-[1.6875rem] w-124 h-22"  src={KreatrLogo} alt="Kreatr Logo" /></Link>
        </div>
      </header>
    </>
  );
};

export default Header;
