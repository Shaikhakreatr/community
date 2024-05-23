"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import KreatrLogo from "../../../public/assets/images/home_page/logo/Kreatr-logo.svg";
import Menu from "../../../public/assets/images/home_page/logo/Menu.svg";
import CloseBtn from "../../../public/assets/images/home_page/logo/close-btn.svg";
import Ziplock from "../../../public/assets/images/home_page/logo/ziplock-cover.png";
import MenuSticker from "../../../public/assets/images/home_page/menu_stickers/menu-withshadow.svg";
import ExplorerSticker from "../../../public/assets/images/home_page/menu_stickers/explorer-withshadow.svg";
import AboutSticker from "../../../public/assets/images/home_page/menu_stickers/about-layerblur.svg";
import AppSticker from "../../../public/assets/images/home_page/menu_stickers/app-withshadow.svg";
import EventsSticker from "../../../public/assets/images/home_page/menu_stickers/events-withshadow.svg";
import CommunitySticker from "../../../public/assets/images/home_page/menu_stickers/community-withshadow.svg";
import ContactSticker from "../../../public/assets/images/home_page/menu_stickers/contact-withshadow.svg";

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
              className="cursor-pointer xl:h-[13px] xl:w-[29px] lg:h-[12px] lg:w-[26px] sm:h-[11px] sm:w-[24px] h-[9px] w-[21px]"
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
              <div className="absolute xl:top-[30%] xl:left-[35%] lg:top-[28%] lg:left-[35%] ">
                <Image
                  className="h-[88px] w-[150px] lg:h-[68px] lg:w-[120px]  xl:h-[88px] xl:w-[150px]"
                  src={MenuSticker}
                  alt="menu image"
                />
              </div>
              <div className="absolute xl:top-[38%] xl:left-[47%] lg:top-[36%] lg:left-[47%]">
                <Image
                  className="h-[51px] w-[96px] lg:h-[60px] lg:w-[90px]  xl:h-[65px] xl:w-[100px]"
                  src={ExplorerSticker}
                  alt="explorer image"
                />
              </div>
              <div className="absolute xl:top-[56%] xl:left-[19%] lg:top-[50%] lg:left-[18%]">
                <Image
                  className="h-[134px] w-[134px] lg:h-[141px] lg:w-[141px]  xl:h-[181px] xl:w-[181px]"
                  src={AboutSticker}
                  alt="about image"
                />
              </div>
              <div className="absolute xl:top-[60%] xl:left-[50%] lg:top-[54%] lg:left-[42%]">
                <Image
                  className="h-[92px] w-[152px] lg:h-[90px] lg:w-[160px] xl:h-[110px] xl:w-[185px]"
                  src={AppSticker}
                  alt="app image"
                />
              </div>
              <div className="absolute xl:top-[80%] xl:left-[20%] lg:top-[78%] lg:left-[15%]">
                <Image
                  className="h-[48px] w-[172px]  lg:h-[54px] lg:w-[200px] xl:h-[85px] xl:w-[236px]"
                  src={EventsSticker}
                  alt="events image"
                />
              </div>
              <div className="absolute xl:top-[70%] xl:left-[37%] lg:top-[68%] lg:left-[32%]">
                <Image
                  className="h-[43px] w-[118px] lg:h-[65px] lg:w-[170px] xl:h-[100px] xl:w-[190px]"
                  src={CommunitySticker}
                  alt="community image"
                />
              </div>
              <div className="absolute xl:top-[70%] xl:left-[64%] lg:top-[65%] lg:left-[63%]">
                <Image
                  className="h-[102px] w-[79px] lg:h-[124px] lg:w-[95px] xl:h-[154px] xl:w-[120px]"
                  src={ContactSticker}
                  alt="contact image"
                />
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
