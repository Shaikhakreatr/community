import React from "react";
import Image from "next/image";
import ArrowSticker from "../../../../public/assets/images/home_page/menu_stickers/Arrow.svg";
import DarkPlayStore from "../../../../public/assets/images/home_page/Dark-playstore.svg";
import DarkAppStore from "../../../../public/assets/images/home_page/Dark-applestore.svg";
import MobArraow from "../../../../public/assets/images/home_page/menu_stickers/mobile-arrow.svg";

const RightSection = () => {
  return (
    <>
      <div className="relative mx-auto grid h-[200px] w-[320px] max-w-[100%] grid-cols-2 gap-0  sm:grid-cols-2 md:grid-cols-2">
        <img
          src="/assets/images/home_page/menu_stickers/about-layerblur.svg"
          className=" h-[112px] w-[112px] top-[4%] hover:scale-105 absolute sm:left-[16%] sm:top-[8%] sm:h-[120px] sm:w-[120px] md:left-[12%] md:top-[6%] md:h-[140px] md:w-[140px] lg:left-[4%] lg:top-[-14%] lg:h-[190px] lg:w-[190px] xl:left-[-18%] xl:top-[-6%] xl:h-[14.8413rem] xl:w-[14.8413rem]"
          alt="about kreatr"
        />
        <img
          src="/assets/images/home_page/menu_stickers/app-withshadow.svg"
          alt="app"
          className=" absolute sm:rotate-[-10deg] left-[28%] top-[12%] h-[73.86px] w-[123.99px] hover:scale-105 sm:left-[47%] sm:top-[17%] sm:h-[70px] sm:w-[125px] md:right-[6%] md:top-[12%]  md:h-[90px] md:w-[155px] lg:left-[51%] lg:top-[-3%] lg:h-[120px] lg:w-[12.5rem] xl:left-[40%] xl:top-[7%] xl:h-[9.6244rem] xl:w-[16.1569rem] "
        />
        <img
          src="/assets/images/home_page/menu_stickers/events-withshadow.svg"
          className="absolute top-[58%] h-[35.23px] w-[125.8px] rotate-[20deg] hover:scale-105 sm:right-[8%] sm:top-[80%] sm:h-[38px] sm:w-[145px] sm:rotate-0 md:right-[5%]  md:top-[91%] md:h-[50px] md:w-[9.875rem] lg:left-[47%] lg:top-[98%] lg:h-[60px] lg:w-[200px] xl:left-[32%] xl:top-[135%] xl:h-[4.6775rem] xl:w-[16.7031rem] "
          alt="events"
        />
        <img
          src="/assets/images/home_page/menu_stickers/community-withshadow.svg"
          className="absolute  right-[24%] top-[45%] h-[58.6px] w-[157.56px] hover:scale-105 sm:right-[5%] sm:top-[50%] sm:h-[60px] sm:w-[160px] md:right-[1%] md:top-[56%] md:h-[75px] md:w-[180px] lg:left-[42%] lg:top-[56%] lg:h-[90px]  lg:w-[230px] xl:left-[25%] xl:top-[82%] xl:h-[6.9806rem] xl:w-[18.7694rem]"
          alt="know community"
        />
        <img
          src="/assets/images/home_page/menu_stickers/contact-withshadow.svg"
          className="absolute right-[13%] top-[6%] h-[97.85px] w-[76.09px] hover:scale-105 sm:right-[48%] sm:top-[58%] sm:h-[100px] sm:w-[80px] md:right-[48%] md:top-[65%] md:h-[120px] md:w-[95px] lg:left-[18%] lg:top-[62%]  lg:h-[160px] lg:w-[120px] xl:left-[-6%] xl:top-[92%] xl:h-[12.7306rem] xl:w-[9.9rem]"
          alt="contact"
        />
        <Image
          className="absolute hidden sm:left-[37%] sm:top-[105%] sm:block sm:h-[126px] sm:w-[5.6875rem] md:left-[37%] md:top-[112%] md:h-[10.375rem] md:w-[6.6875rem] lg:left-[34%] lg:top-[112%] lg:h-[16rem] lg:w-[7.625rem] xl:left-[18%] xl:top-[166%] xl:h-271 xl:w-132 "
          src={ArrowSticker}
        />
        <Image
          className="absolute right-[14%] top-[-24%] h-55 w-48 sm:hidden "
          src={MobArraow}
        />
        <img
          src="/assets/images/home_page/menu_stickers/menu-withshadow.svg"
          className=" absolute right-[0] top-[-48%] h-[41.84px] w-[78.99px] sm:right-[14%] sm:top-[128%] sm:h-[40px] sm:w-[80px] md:right-[9%] md:top-[142%] md:h-[60px] md:w-[90px] lg:left-[62%] lg:top-[150%] lg:h-[5.25rem] lg:w-[7.75rem] xl:left-[44%] xl:top-[200%] xl:h-[5.9463rem] xl:w-[11.2275rem]"
          alt="menu"
        />
        <img
          src="/assets/images/home_page/menu_stickers/explorer-withshadow.svg"
          className="absolute right-[-4%] top-[-32%] h-[28.12px] w-[53.14px] sm:left-[207px] sm:top-[144%] sm:h-[30px] sm:w-[70px] md:left-[76%] md:top-[164%] md:h-[40px] md:w-[80px] lg:left-[80%] lg:top-[181%] lg:h-[50px] lg:w-[100px] xl:left-[72%] xl:top-[236%] xl:h-[3.9975rem] xl:w-[7.5531rem]"
          alt="explore"
        />
      </div>
      <div className="mb-3 ml-[-12px] flex justify-center gap-x-4 sm:hidden">
        <div className=" flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-4 text-black">
          <Image
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            src={DarkPlayStore}
            alt="Play store"
          />
          <p className="mx-[10px]">Get it on Play store</p>
        </div>
        <div className="flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-4 text-black">
          <Image
            src={DarkAppStore}
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            alt="App store"
          />
          <p className="mx-[10px]">Available on App store</p>
        </div>
      </div>
    </>
  );
};

export default RightSection;
