"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


const HeaderHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#f7f3e6]' : 'bg-transparent'}`}>
        <div className="relative flex items-center justify-center border-b border-gray-500 p-2">
          <Link href="/">
            <Image
              className="h-22 my-3 w-124 lg:h-[1.6875rem] lg:w-[10rem] xl:h-[32px] xl:w-[181px]"
              src={"/assets/images/home_page/logo/Kreatr-logo.svg"}
              alt="Kreatr Logo"
              height={27}
              width={160}
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderHome;
