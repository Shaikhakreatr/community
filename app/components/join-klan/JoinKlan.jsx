'use client'
import React, { useState } from "react";
import Image from "next/image";
import LightPlayStore from "@/public/assets/images/home_page/Light-playstore.svg";
import LightAppStore from "@/public/assets/images/home_page/Light-applestore.svg";
import DarkPlayStore from "@/public/assets/images/home_page/Dark-playstore.svg";
import DarkAppStore from "@/public/assets/images/home_page/Dark-applestore.svg";

const JoinKlan = () => {
  const [logoPlayActive, setLogoPlayActive] = useState(false);
  const [logoAppActive, setLogoAppActive] = useState(false);
  const handlePlayStoreEnter = () => {
    setLogoPlayActive(!logoPlayActive);
  };

  const handlePlayStoreLeave = () => {
    setLogoPlayActive(!logoPlayActive);
  };

  const handleAppStoreEnter = () => {
    setLogoAppActive(!logoAppActive);
  };

  const handleAppStoreLeave = () => {
    setLogoAppActive(!logoAppActive);
  };
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="page-heading text-center text-[48px] sm:text-[65px] lg:text-[86px] xl:text-[96px]">
          JoIn our Klan
        </h1>
        <p className="content-neue text-center text-[16px] italic text-blue-900 sm:text-[18px] lg:text-[20px] xl:text-[24px]">
          (Note: We use the word “Klan” to replace “clan.”)
        </p>
      </div>
      <div className="flex justify-center">
        <img src="/assets/images/JOK_page/left-arrow.svg" alt="left arrow" />
        <img
          src="/assets/images/JOK_page/center-arrow.svg"
          alt="center arrow"
        />
        <img src="/assets/images/JOK_page/right-arrow.svg" alt="right arrow" />
      </div>
      <div className="flex justify-center">
        <div className="instagram-img bg-blend-multiply mr-5 h-[272px] w-[255px] rounded-[15px] border border-black">
          <img
            src="/assets/images/JOK_page/instagram-JOK.svg"
            alt="instagram"
          />
          <p>“Pop” goes our hearts when you leave one!</p>
        </div>
        <div className="whatsapp-img mr-5 h-[272px] w-[255px] rounded-[15px] border border-black">
          <img src="/assets/images/JOK_page/whatsapp-JOK.svg" alt="whatsapp" />
          <p>The biggest green flag you will ever see.</p>
        </div>
        <div className="linkdin-img h-[272px] w-[255px] rounded-[15px] border border-black">
          <img src="/assets/images/JOK_page/linkdin-JOK.svg" alt="linkdin" />
          <p>For your professional needs!</p>
        </div>
      </div>
      <div>
        <h1 className="page-heading">
          WE CELEBRATE THE
          <span className="JOK-content">BEAUTY of CreatIon</span>In all Its
          wonderful forms
        </h1>
      </div>
      <div className="mt-10 hidden gap-x-5 sm:mb-[16px] sm:mt-[-14px] sm:flex md:mb-4 md:mt-[-12px] lg:mb-[4rem] lg:mt-[0.25rem] xl:mb-6 ">
        <div
          className={`flex cursor-pointer items-center rounded-full bg-black text-[1rem] text-white  sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[3.125rem] md:w-[9.75rem] md:p-2 md:px-1 md:py-2 lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 
                    ${logoPlayActive ? "button-text border border-black bg-transparent" : ""}`}
          onMouseEnter={handlePlayStoreEnter}
          onMouseLeave={handlePlayStoreLeave}
        >
          {logoPlayActive ? (
            <div>
              {/* <img src="/assets/images/Dark-playstore.svg" alt="" /> */}
              <Image
                className="ml-[.875rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72"
                src={DarkPlayStore}
                alt="Play store"
              />
            </div>
          ) : (
            <div>
              <Image
                className="ml-[.875rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72"
                src={LightPlayStore}
                alt="Play store"
              />
            </div>
          )}
          <p className="button-store ml-[22px] sm:text-[14px] sm:leading-4 md:leading-4 lg:text-[1rem] lg:leading-4 xl:text-20 xl:leading-5 ">
            Get it on Playstore
          </p>
        </div>
        <div
          className={`flex  cursor-pointer items-center rounded-full bg-black py-1  text-[1rem] text-white sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[3.125rem] md:w-[9.75rem]  lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 xl:leading-6 
          ${
            logoAppActive
              ? "button-text border border-black bg-transparent"
              : ""
          }`}
          onMouseEnter={handleAppStoreEnter}
          onMouseLeave={handleAppStoreLeave}
        >
          {logoAppActive ? (
            <Image
              src={DarkAppStore}
              className="ml-[.5rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72 "
              alt="App store"
            />
          ) : (
            <Image
              src={LightAppStore}
              className="ml-[.5rem] sm:h-[1.875rem] sm:w-[1.5rem] md:h-[1.875rem] md:w-[1.5rem] xl:h-44.09 xl:w-38.72 "
              alt="App store"
            />
          )}
          <p
            className={`button-store sm:text-[14px] sm:leading-4 md:leading-4 lg:text-[1rem] lg:leading-4 xl:text-20 xl:leading-5 ${
              logoAppActive ? "ml-[.625rem]" : "ml-[.625rem] "
            } `}
          >
            Available on
            <br /> App Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinKlan;
