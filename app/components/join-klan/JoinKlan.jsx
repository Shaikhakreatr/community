"use client";
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
        <h1 className="page-heading mb-[-15px] mt-[20px] text-center text-[48px] sm:text-[65px] lg:text-[86px] xl:text-[96px]">
          JoIn our Klan
        </h1>
        <p className="content-neue text-center text-[16px] italic text-blue-700 sm:text-[18px] lg:text-[20px] xl:text-[24px]">
          (Note: We use the word “Klan”<br className="sm:hidden" /> to replace “clan.”)
        </p>
      </div>
      <div className="relative flex h-[80px] w-auto justify-center">
        <img
          src="/assets/images/JOK_page/left-arrow.svg"
          className="absolute left-[26%] hidden xl:h-[108.82px] xl:w-[92.99px] sm:block"
          alt="left arrow"
        />
        <img
          src="/assets/images/JOK_page/center-arrow.svg"
          className="absolute xl:right-[47%] xl:top-[30%] top-[12%]  xl:h-[46.2px] xl:w-[14.26px] w-[13px] h-[40px]"
          alt="center arrow"
        />
        <img
          src="/assets/images/JOK_page/right-arrow.svg"
          className="absolute sm:block hidden xl:right-[26%] xl:h-[108.82px] xl:w-[92.99px] w-[13px] h-[40px]"
          alt="right arrow"
        />
      </div>
      <div className="relative xl:mt-[95px] flex h-[70px] w-auto justify-center">
        <div className="instagram-img absolute p-[18px] top-[-13%] left-[10%] xl:left-[17%] xl:top-[-38%] xl:h-[272px]  xl:w-[255px] w-[195.69px] h-[201.31px] rotate-[-6deg] rounded-[15px] border border-black xl:p-[30px] sm:shadow-none sm:hover:shadow-md sm:hover:shadow-black shadow-md shadow-black">
          <img
            src="/assets/images/JOK_page/instagram-JOK.svg"
            className="xl:h-[101px] xl:w-[101px] w-[77.33px] h-[77.33px] rotate-[8deg]"
            alt="instagram"
          />
          <p className="page-subhead mt-[18px] leading-[20px] xl:mt-[2.25rem] text-[20px] xl:text-[24px] xl:leading-[25px]">
            “Pop” goes our hearts when you leave one!
          </p>
        </div>
        <div className="whatsapp-img absolute p-[18px] top-[225px] right-[20px] xl:top-[-134%] xl:h-[272px]  xl:w-[255px] w-[195.69px] h-[201.31px] rotate-[6deg] rounded-[15px] border border-black xl:p-[30px] sm:shadow-none sm:hover:shadow-md sm:hover:shadow-black shadow-md shadow-black">
          <img
            src="/assets/images/JOK_page/whatsapp-JOK.svg"
            className="xl:h-[112px] xl:w-[112px] w-[85px] h-[85px]"
            alt="whatsapp"
          />
          <p className="page-subhead mt-[18px] leading-[20px] xl:my-[22px] text-[20px] xl:text-[24px] xl:leading-[25px]">
            The biggest green flag you will ever see.
          </p>
        </div>
        <div className="linkdin-img absolute p-[18px] top-[456px] left-[10%] xl:right-[17%] xl:top-[-36%] xl:h-[272px] xl:w-[255px] w-[195.69px] h-[201.31px] rotate-[-6deg] rounded-[15px] border border-black xl:p-[30px] sm:shadow-none sm:hover:shadow-md sm:hover:shadow-black shadow-md shadow-black">
          <img
            src="/assets/images/JOK_page/linkdin-JOK.svg"
            className="xl:h-[92px] xl:w-[92px] h-[69px] w-[69px] rotate-[8deg]"
            alt="linkdin"
          />
          <p className="page-subhead mt-[26px] leading-[20px] xl:mt-[44px] text-[20px] xl:text-[24px] xl:leading-[25px]">
            For your professional needs!
          </p>
        </div>
      </div>
      <div className="relative xl:mt-[160px] mt-[635px]">
        <h1 className=" page-heading absolute right-[20%] top-[-18%] xl:right-[37%] xl:top-[-12%] text-center text-[35px] xl:text-[64px]">
          WE CELEBRATE THE
        </h1>
        <h1 className="JOK-content page-heading xl:mt-[50px] rotate-[-1deg] text-center text-[48px] xl:text-[110px] ">
          BEAUTY of CreatIon
        </h1>
        <h1 className="page-heading mt-[-18px] xl:mt-[-58px] sm:leading-[0px] leading-[28px] text-center text-[35px] xl:text-[64px]">
          {" "}
          In all Its<br className="sm:hidden block" /> wonderful forms
        </h1>
      </div>
      <div className="mt-10 hidden justify-center gap-x-5 sm:mb-[16px] sm:mt-[-14px] sm:flex md:mb-4 md:mt-[-12px] lg:mb-[4rem] lg:mt-[3.25rem] xl:mb-[4.5rem] ">
        <div
          className={`career-btn flex cursor-pointer items-center rounded-full bg-black text-[1rem]  sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[3.125rem] md:w-[9.75rem] md:p-2 md:px-1 md:py-2 lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 
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
          className={`career-btn  flex cursor-pointer items-center rounded-full bg-black  py-1 text-[1rem] sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[3.125rem] md:w-[9.75rem]  lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 xl:leading-6 
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
      <div className="mb-[2.25rem] mt-[2.5rem] ml-[-12px] flex justify-center gap-x-4 sm:hidden">
        <div className=" flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-[14px] text-black">
          <Image
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            src={DarkPlayStore}
            alt="Play store"
          />
          <p className="mx-[10px] button-store">Get it on <br />Play store</p>
        </div>
        <div className="flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-[14px] text-black">
          <Image
            src={DarkAppStore}
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            alt="App store"
          />
          <p className="mx-[10px] button-store">Available on App store</p>
        </div>
      </div>
    </div>
  );
};

export default JoinKlan;
