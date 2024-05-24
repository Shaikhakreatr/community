"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css';
import KreatrLogo from "../../../public/assets/images/home_page/logo/Kreatr-logo.svg";
import Menu from "../../../public/assets/images/home_page/logo/Menu.svg";
import CloseBtn from "../../../public/assets/images/home_page/logo/close-btn.svg";
import CloseBtnMob from "../../../public/assets/images/home_page/logo/close-mob.svg";
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
      <header>
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
              className="h-[9px] w-[21px] cursor-pointer sm:h-[11px] sm:w-[24px] lg:h-[12px] lg:w-[26px] xl:h-[13px] xl:w-[29px]"
            />
          </div>
        </div>
        <div
          className={`fixed right-0 top-0 z-50 h-[100%] w-[100%] transition-transform duration-700 lg:h-[630px] lg:w-[500px] xl:h-[921px] xl:w-[668px] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className={`absolute inset-0 top-[68px] bg-[rgba(190,181,113,0.14)] p-8 sm:backdrop-blur-lg ${styles.menuWrap}`}
          
            style=
            {{
              transition: "opacity 0.7s ease",
              opacity: menuOpen ? 1 : 0,
            }}
            >
            <div className=" justify-end sm:flex hidden">
              <Image
                src={CloseBtn}
                alt="close button image"
                onClick={toggleMenu}
                className="cursor-pointer lg:h-[22px] lg:w-[75px] xl:h-[32px] xl:w-[85px]"
              />
            </div>
            <div className="flex justify-end sm:hidden">
              <Image
                src={CloseBtnMob}
                alt="close button mobile image"
                onClick={toggleMenu}
                className="cursor-pointer mt-[-15px] h-[26px] w-[26px]"
              />
            </div>
            <div className="flex items-center justify-center lg:mt-[20px] xl:mt-10">
              <div className="absolute top-[24%] left-[29%] lg:left-[35%] lg:top-[28%] xl:left-[35%] xl:top-[30%] ">
                <Image
                  className="h-[68px] w-[130px]  lg:h-[68px] lg:w-[120px]  xl:h-[88px] xl:w-[150px]"
                  src={MenuSticker}
                  alt="menu image"
                />
              </div>
              <div className="absolute top-[32%] left-[46%] lg:left-[47%] lg:top-[36%] xl:left-[47%] xl:top-[38%]">
                <Image
                  className="h-[51px] w-[96px] lg:h-[60px] lg:w-[90px]  xl:h-[65px] xl:w-[100px]"
                  src={ExplorerSticker}
                  alt="explorer image"
                />
              </div>
              <div className="absolute top-[53%] left-[12%] lg:left-[18%] lg:top-[50%] xl:left-[19%] xl:top-[56%]">
                <Image
                  className="h-[134px] w-[134px] lg:h-[141px] lg:w-[141px]  xl:h-[181px] xl:w-[181px]"
                  src={AboutSticker}
                  alt="about image"
                />
              </div>
              <div className="absolute top-[53%] left-[41%] lg:left-[42%] lg:top-[54%] xl:left-[50%] xl:top-[60%]">
                <Image
                  className="h-[92px] w-[152px] lg:h-[90px] lg:w-[160px] xl:h-[110px] xl:w-[185px]"
                  src={AppSticker}
                  alt="app image"
                />
              </div>
              <div className="absolute top-[73%] left-[12%] lg:left-[15%] lg:top-[78%] xl:left-[20%] xl:top-[80%]">
                <Image
                  className="h-[48px] w-[172px]  lg:h-[54px] lg:w-[200px] xl:h-[85px] xl:w-[236px]"
                  src={EventsSticker}
                  alt="events image"
                />
              </div>
              <div className="absolute top-[67%] left-[39%] lg:left-[32%] lg:top-[68%] xl:left-[37%] xl:top-[70%]">
                <Image
                  className="h-[50px] w-[118px] lg:h-[65px] lg:w-[170px] xl:h-[100px] xl:w-[190px]"
                  src={CommunitySticker}
                  alt="community image"
                />
              </div>
              <div className="absolute top-[63%] left-[68%] lg:left-[63%] lg:top-[65%] xl:left-[64%] xl:top-[70%]">
                <Image
                  className="h-[102px] w-[79px] lg:h-[124px] lg:w-[95px] xl:h-[154px] xl:w-[120px]"
                  src={ContactSticker}
                  alt="contact image"
                />
              </div>
              <Image
                className="relative mt-[15px] h-[450px] w-[352px] rotate-[-3deg] lg:h-[430px] lg:w-[340px] xl:h-[676px] xl:w-[466px]"
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
