"use client";
import React, { useState, useEffect } from "react";
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
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? "bg-[#f7f3e6]" : "bg-transparent"}`}
      >
        <div className="group flex w-full flex-col items-center  justify-center bg-[#2A2A2A]  pt-1 sm:hover:bg-[#EAA2CD]">
          <Link href="/bug-report">
            <marquee behavior="scroll"  direction="left">
              <div className="flex items-center space-x-4 ">
                {Array.from({ length: 10 }).map((index) => (
                  <div key={index} className="flex items-center gap-8 ">
                    <div className="flex items-center gap-4">
                      <p className="content-neue text-[#EAA2CD] group-hover:text-[#2A2A2A]">
                        Report a Bug!
                      </p>
                      <Image
                        height={18}
                        width={18}
                        src="/assets/images/bug-report-page/marquee-bug-left.svg"
                        alt="bug image"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="content-neue text-[#EAA2CD] group-hover:text-[#2A2A2A]">
                        Report a Bug!
                      </p>
                      <Image
                        height={18}
                        width={18}
                        src="/assets/images/bug-report-page/marquee-bug-right.svg"
                        alt="bug image"
                        className="mr-4"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </marquee>
          </Link>
        </div>
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
