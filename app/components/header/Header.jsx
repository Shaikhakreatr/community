'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import KreatrLogo from "../../../public/assets/images/home_page/logo/Kreatr-logo.svg";
import Menu from "../../../public/assets/images/home_page/logo/Menu.svg";
import CloseBtn from "../../../public/assets/images/home_page/logo/close-btn.svg";
import Ziplock from "../../../public/assets/images/home_page/logo/ziplock-cover.png";
import MenuSticker from '../../../public/assets/images/home_page/menu_stickers/menu-withshadow.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="relative">
        <div className="flex relative items-center justify-center border-b border-gray-500 p-2">
          <Link href="/">
            <Image
              className="h-22 my-3 w-124 lg:h-[1.6875rem] lg:w-[10rem] xl:h-[32px] xl:w-[181px]"
              src={KreatrLogo}
              alt="Kreatr Logo"
            />
          </Link>
          <div className="absolute right-[5%]">
            <Image
              src={Menu}
              alt="menu img"
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div
          className={`fixed z-50 top-0 right-0 xl:h-[921px] xl:w-[668px] lg:h-[630px] lg:w-[500px] transition-transform duration-700 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="absolute top-[68px] inset-0 bg-[rgba(190,181,113,0.14)] backdrop-blur-lg p-8"
            style={{
              transition: "opacity 0.7s ease",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            <div className="flex justify-end">
              <Image
                src={CloseBtn}
                alt="close button image"
                onClick={toggleMenu}
                className="cursor-pointer xl:h-[32px] xl:w-[85px] lg:h-[22px] lg:w-[75px]"
              />
            </div>
            <div className="xl:mt-10 lg:mt-[20px] flex justify-center items-center">
              <Image
                className="rotate-[-3deg] xl:h-[676px] xl:w-[466px] lg:h-[430px] lg:w-[340px]"
                src={Ziplock}
                alt="Ziplock cover image"
              />
              <div>
                  <Image src={MenuSticker} alt="menu image" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
