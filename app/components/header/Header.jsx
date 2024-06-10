"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = () => {
    const offset = 25; 
    const threshold = 16 + offset;
    if (window.scrollY > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#f7f3e6]' : 'bg-transparent'}`}>
        <div className="flex items-center justify-center border-b border-gray-500 p-2">
          <Link href="/">
            <Image
              className="h-22 my-3 w-124 lg:h-[1.6875rem] lg:w-[10rem] xl:h-[32px] xl:w-[181px]"
              src={"/assets/images/home_page/logo/Kreatr-logo.svg"}
              alt="Kreatr Logo"
              height={27}
              width={160}
            />
          </Link>
          <div className="absolute cursor-pointer right-[3%] nav-bar pointer-events-auto" onClick={toggleMenu}>
            <div
              className={`bg-black rounded-[20px] nav-line1 h-[2px] w-[25px] sm:h-[2px] lg:h-[2.8px] sm:w-[30px] mb-[8px] transition-transform duration-300 ${menuOpen ? 'transform  rotate-45 translate-y-1.5' : 'transform  rotate-0 translate-y-0'}`}
            ></div>
            <div
              className={`bg-black rounded-[20px] nav-line2 h-[2px] w-[25px] sm:h-[2px] lg:h-[2.5px] sm:w-[30px] transition-transform duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-1' : 'transform rotate-0 translate-y-0'}`}
            ></div>
          </div>
        </div>
        <div
          className={`fixed right-0 top-0 z-50 h-[100%] w-[100%] transition-transform duration-700 lg:h-[630px] lg:w-[500px] xl:h-[921px] xl:w-[668px] pointer-events-none  ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          ref={menuRef}
        >
          <div
            className={`absolute inset-0 top-[68px] bg-[rgba(190,181,113,0.14)] p-8 sm:backdrop-blur-lg ${styles.menuWrap}`}
            style={{
              transition: "opacity 0.7s ease",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            <div className="flex relative items-center justify-center mt-[-4px] sm:mt-[-5px] lg:mt-[20px] xl:mt-10">
              <div className="absolute left-[29%] sm:top-[35%] sm:left-[37%] top-[30%] lg:left-[33%] lg:top-[20%] xl:left-[35%] xl:top-[30%]">
                <Image
                  className="h-[68px]  w-[130px] sm:h-[98px] sm:w-[160px] lg:h-[65px] lg:w-[120px] xl:h-[88px] xl:w-[150px]"
                  src={"/assets/images/home_page/menu_stickers/menu-withshadow.svg"}
                  alt="menu image"
                  height={68}
                  width={120}
                />
              </div>
              <div className="absolute left-[46%] sm:top-[44%] top-[38%] lg:left-[47%] lg:top-[31%] xl:left-[47%] xl:top-[38%]">
                <Image
                  className="h-[51px] w-[96px] lg:h-[55px] lg:w-[90px] sm:h-[75px] sm:w-[130px] xl:h-[65px] xl:w-[100px]"
                  src={"/assets/images/home_page/menu_stickers/explorer-withshadow.svg"}
                  alt="explorer image"
                  height={60}
                  width={90}
                />
              </div>
              <div className="absolute pointer-events-auto sm:left-[22%] left-[8%] sm:top-[62%] top-[64%] lg:left-[14%] lg:top-[56%] xl:left-[16%] xl:top-[54%]">
                <Link href="/about-kreatr">
                  <Image
                    className="h-[134px] hover:scale-105 w-[134px] lg:h-[131px] lg:w-[141px] sm:h-[181px] sm:w-[181px] xl:h-[181px] xl:w-[181px]"
                    src={"/assets/images/home_page/menu_stickers/about-layerblur.svg"}
                    alt="about image"
                    height={141}
                    width={141}
                  />
                </Link>
              </div>
              <div className="absolute pointer-events-auto sm:top-[63%] sm:left-[46%] left-[41%] top-[64%] lg:left-[42%] lg:top-[59%] xl:left-[46%] xl:top-[59%]">
                <Link href="/about-app">
                  <Image
                    className="h-[92px] hover:scale-105 w-[152px] lg:h-[80px] lg:w-[160px] sm:h-[130px] sm:w-[185px] xl:h-[110px] xl:w-[185px]"
                    src={"/assets/images/home_page/menu_stickers/app-withshadow.svg"}
                    alt="app image"
                    height={90}
                    width={160}
                  />
                </Link>
              </div>
              <div className="absolute pointer-events-auto sm:left-[22%] sm:top-[84%] left-[6%] top-[87%] lg:left-[10%] lg:top-[85%] xl:left-[19%] xl:top-[84%]">
                <Link href="/events">
                  <Image
                    className="h-[48px] hover:scale-105 w-[172px] lg:h-[50px] lg:w-[200px] sm:h-[85px] sm:w-[236px] xl:h-[85px] xl:w-[236px]"
                    src={"/assets/images/home_page/menu_stickers/events-withshadow.svg"}
                    alt="events image"
                    height={54}
                    width={200}
                  />
                </Link>
              </div>
              <div className="absolute pointer-events-auto sm:top-[77%] sm:left-[38%] left-[37%] top-[80%] lg:left-[33%] lg:top-[75%] xl:left-[35%] xl:top-[72%]">
                <Link href="/about-community">
                  <Image
                    className="h-[50px] hover:scale-105 w-[118px] lg:h-[55px] lg:w-[170px] sm:h-[76px] sm:w-[200px] xl:h-[100px] xl:w-[190px]"
                    src={"/assets/images/home_page/menu_stickers/community-withshadow.svg"}
                    alt="community image"
                    height={65}
                    width={170}
                  />
                </Link>
              </div>
              <div className="absolute pointer-events-auto sm:left-[61%] left-[69%] top-[76%] lg:left-[65%] lg:top-[70%] xl:left-[64%] xl:top-[70%]">
                <Link href="/contact">
                  <Image
                    className="h-[102px] hover:scale-105 w-[79px] lg:h-[114px] lg:w-[95px] sm:h-[154px] sm:w-[120px] xl:h-[154px] xl:w-[120px]"
                    src={"/assets/images/home_page/menu_stickers/contact-withshadow.svg"}
                    alt="contact image"
                    height={124}
                    width={95}
                  />
                </Link>
              </div>
              <Image
                className="relative pointer-events-none mt-[50px] sm:mt-[100px] lg:mt-0 h-[500px] w-[352px] sm:h-[710px] sm:w-[480px] rotate-[-3deg] lg:h-[460px] lg:w-[340px] xl:h-[676px] xl:w-[466px]"
                src={"/assets/images/home_page/logo/ziplock-cover.png"}
                alt="Ziplock cover image"
                height={430}
                width={340}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
