"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import KreatrLogo from "../../../public/assets/images/home_page/logo/Kreatr-logo.svg";
import Menu from "../../../public/assets/images/home_page/logo/Menu.svg";
import CloseBtn from "../../../public/assets/images/home_page/logo/close-btn.svg";
import Ziplock from "../../../public/assets/images/home_page/logo/ziplock-cover.png";
import MenuSticker from "../../../public/assets/images/home_page/menu_stickers/menu-withshadow.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="relative">
        <div className="relative flex items-center justify-center border-b border-gray-500 p-2">
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
          className={`fixed right-0 top-0 z-50 transition-transform duration-700 lg:h-[630px] lg:w-[500px] xl:h-[921px] xl:w-[668px] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="absolute inset-0 top-[68px] bg-[rgba(190,181,113,0.14)] p-8 backdrop-blur-lg"
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
                className="cursor-pointer lg:h-[22px] lg:w-[75px] xl:h-[32px] xl:w-[85px]"
              />
            </div>
            <div className="flex items-center justify-center lg:mt-[20px] xl:mt-10">
            <div className="absolute ">
                <Image src={MenuSticker} alt="menu image" />
              </div>
              <Image
                className="relative rotate-[-3deg] lg:h-[430px] lg:w-[340px] xl:h-[676px] xl:w-[466px]"
                src={Ziplock}
                alt="Ziplock cover image"
              />

            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
