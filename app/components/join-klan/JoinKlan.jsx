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
        <h1 className="page-heading mb-[-2px] mt-[20px] text-center text-[48px] sm:text-[65px] lg:text-[86px] xl:text-[96px]">
          JoIn our Klan
        </h1>
        <p className="content-neue text-center sm:lead-[0px] leading-[18px] text-[16px] italic text-blue-700 sm:text-[18px] lg:text-[20px] xl:text-[24px]">
          (Note: We use the word “Klan”
          <br className="sm:hidden" /> to replace “clan.”)
        </p>
      </div>
      <div className="relative flex h-[80px] w-auto justify-center">
        <img
          src="/assets/images/JOK_page/left-arrow.svg"
          className="absolute left-[26%] hidden sm:block lg:h-[98.82px] lg:w-[88.99px] xl:h-[108.82px] xl:w-[92.99px]"
          alt="left arrow"
        />
        <img
          src="/assets/images/JOK_page/center-arrow.svg"
          className="absolute top-[12%] h-[40px] w-[13px]  lg:h-[46.2px] lg:w-[14.26px] xl:right-[47%] xl:top-[30%] xl:h-[46.2px] xl:w-[14.26px]"
          alt="center arrow"
        />
        <img
          src="/assets/images/JOK_page/right-arrow.svg"
          className="absolute right-[26%] hidden sm:block lg:h-[98.82px] lg:w-[88.99px] xl:h-[108.82px] xl:w-[92.99px]"
          alt="right arrow"
        />
      </div>
      <div className="relative flex h-[70px] w-auto justify-center xl:mt-[95px]">
        <div className="instagram-img absolute lg:top-[80%] lg:left-[18%] left-[10%] top-[-13%] h-[201.31px] w-[195.69px] rotate-[-6deg] rounded-[15px] lg:p-[25px]  border border-black  p-[18px] shadow-md shadow-black sm:shadow-none sm:hover:shadow-md sm:hover:shadow-black lg:h-[242px] lg:w-[225px] xl:left-[17%] xl:top-[-38%] xl:h-[272px] xl:w-[255px] xl:p-[30px]">
          <img
            src="/assets/images/JOK_page/instagram-JOK.svg"
            className="h-[77.33px] w-[77.33px] rotate-[8deg] xl:h-[101px] xl:w-[101px]"
            alt="instagram"
          />
          <p className="page-subhead lg:mt-[40px] mt-[18px] text-[20px] leading-[20px] xl:mt-[2.25rem] xl:text-[24px] xl:leading-[25px]">
            “Pop” goes our hearts when you leave one!
          </p>
        </div>
        <div className="whatsapp-img absolute lg:right-[41%] lg:top-[-20%] right-[20px] top-[225px] h-[201.31px] w-[195.69px] rotate-[6deg]  rounded-[15px] lg:p-[25px] border  border-black p-[18px] shadow-md shadow-black sm:shadow-none sm:hover:shadow-md sm:hover:shadow-black lg:h-[242px] lg:w-[225px] xl:top-[-134%] xl:h-[272px] xl:w-[255px] xl:p-[30px]">
          <img
            src="/assets/images/JOK_page/whatsapp-JOK.svg"
            className="h-[85px] w-[85px] xl:h-[112px] xl:w-[112px]"
            alt="whatsapp"
          />
          <p className="page-subhead lg:mt-[40px] mt-[18px] text-[20px] leading-[20px] xl:my-[22px] xl:text-[24px] xl:leading-[25px]">
            The biggest green flag you will ever see.
          </p>
        </div>
        <div className="linkdin-img absolute lg:left-[64%] lg:top-[78%] left-[10%] top-[456px] h-[201.31px] w-[195.69px] rotate-[-6deg] rounded-[15px] lg:p-[25px] border border-black  p-[18px] shadow-md shadow-black sm:shadow-none sm:hover:shadow-md sm:hover:shadow-black lg:h-[242px] lg:w-[225px] xl:right-[17%] xl:top-[-36%] xl:h-[272px] xl:w-[255px] xl:p-[30px]">
          <img
            src="/assets/images/JOK_page/linkdin-JOK.svg"
            className="h-[69px] w-[69px] rotate-[8deg] xl:h-[92px] xl:w-[92px]"
            alt="linkdin"
          />
          <p className="page-subhead lg:mt-[50px] mt-[26px] text-[20px] leading-[20px] xl:mt-[44px] xl:text-[24px] xl:leading-[25px]">
            For your professional needs!
          </p>
        </div>
      </div>
      <div className="relative lg:mt-[226px] mt-[635px] xl:mt-[160px]">
        <h1 className=" page-heading absolute lg:right-[37%] right-[20%] top-[-18%] text-center text-[35px] xl:right-[37%] xl:top-[-12%] lg:text-[55px] xl:text-[64px]">
          WE CELEBRATE THE
        </h1>
        <h1 className="JOK-content page-heading rotate-[-1deg] text-center text-[48px] xl:mt-[50px] lg:text-[95px] xl:text-[110px] ">
          BEAUTY of CreatIon
        </h1>
        <h1 className="page-heading lg:mt-[-12px] mt-[-18px] text-center text-[35px] leading-[28px] sm:leading-[0px] xl:mt-[-12px] lg:text-[55px] xl:text-[64px]">
          {" "}
          In all Its
          <br className="block sm:hidden" /> wonderful forms
        </h1>
      </div>
      <div className="mt-10 hidden justify-center gap-x-5 sm:mb-[16px] sm:mt-[-14px] sm:flex md:mb-4 md:mt-[-12px] lg:mb-[4rem] lg:mt-[4.25rem] xl:mt-[3.25rem] xl:mb-[4.5rem] ">
        <div
          className={` flex cursor-pointer items-center rounded-full bg-black text-[1rem]  sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[3.125rem] md:w-[9.75rem] md:p-2 md:px-1 md:py-2 lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 
                    ${logoPlayActive ? "button-text text-black border border-black bg-transparent" : "career-btn"}`}
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
          className={` flex cursor-pointer items-center rounded-full bg-black  py-1 text-[1rem] sm:h-[3.125rem] sm:w-[9.75rem] sm:p-2 md:h-[3.125rem] md:w-[9.75rem]  lg:text-[1rem] lg:leading-4 xl:h-82 xl:w-230 xl:p-7 xl:text-20 xl:leading-6 
          ${
            logoAppActive
              ? "button-text text-black border border-black bg-transparent"
              : "career-btn "
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
      <div className="mb-[2.25rem] ml-[-12px] mt-[2.5rem] flex justify-center gap-x-4 sm:hidden">
        <div className=" flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-[14px] text-black">
          <Image
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            src={DarkPlayStore}
            alt="Play store"
          />
          <p className="button-store mx-[10px]">
            Get it on <br />
            Play store
          </p>
        </div>
        <div className="flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-[14px] text-black">
          <Image
            src={DarkAppStore}
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            alt="App store"
          />
          <p className="button-store mx-[10px]">Available on App store</p>
        </div>
      </div>
    </div>
  );
};

export default JoinKlan;
