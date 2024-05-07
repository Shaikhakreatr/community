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
          src="/assets/images/home_page/menu_stickers/events-withshadow.svg"
          className="absolute top-[58%] h-[35.23px] w-[125.8px] rotate-[20deg] hover:scale-105 sm:right-[8%] sm:top-[80%] sm:h-[38px] sm:w-[145px] sm:rotate-0 md:right-[5%]  md:top-[91%] md:h-[50px] md:w-[9.875rem] lg:left-[47%] lg:top-[98%] lg:h-[60px] lg:w-[200px] xl:left-[44%] xl:top-[152%] xl:h-[6.6037rem] xl:w-[17.3044rem] "
          alt="events"
        />
        <img
          src="/assets/images/home_page/menu_stickers/community-withshadow.svg"
          className="absolute  right-[24%] top-[45%] h-[58.6px] w-[157.56px] hover:scale-105 sm:right-[5%] sm:top-[50%] sm:h-[60px] sm:w-[160px] md:right-[1%] md:top-[56%] md:h-[75px] md:w-[180px] lg:left-[42%] lg:top-[56%] lg:h-[90px]  lg:w-[230px] xl:left-[35%] xl:top-[102%] xl:h-[7.1969rem] xl:w-[18.9906rem]"
          alt="know community"
        />
        <img
          src="/assets/images/home_page/menu_stickers/app-withshadow.svg"
          alt="app"
          className=" absolute lg:rotate-[2deg] left-[28%] top-[12%] h-[73.86px] w-[123.99px] hover:scale-105 sm:left-[47%] sm:top-[17%] sm:h-[70px] sm:w-[125px] sm:rotate-[-10deg] md:right-[6%] md:top-[12%]  md:h-[90px] md:w-[155px] lg:left-[51%] lg:top-[-3%] lg:h-[120px] lg:w-[12.5rem] xl:left-[46%] xl:top-[24%] xl:h-[10.885rem] xl:w-[16.8319rem] "
        />
        <img
          src="/assets/images/home_page/menu_stickers/contact-withshadow.svg"
          className="absolute right-[13%] top-[6%] h-[97.85px] w-[76.09px] hover:scale-105 sm:right-[48%] sm:top-[58%] sm:h-[100px] sm:w-[80px] md:right-[48%] md:top-[65%] md:h-[120px] md:w-[95px] lg:left-[18%] lg:top-[62%]  lg:h-[160px] lg:w-[120px] xl:left-[0] xl:top-[112%] xl:h-[12.0538rem] xl:w-[9.3825rem]"
          alt="contact"
        />
        <img
          src="/assets/images/home_page/menu_stickers/about-layerblur.svg"
          className=" absolute top-[4%] h-[112px] w-[112px] hover:scale-105 sm:left-[16%] sm:top-[8%] sm:h-[120px] sm:w-[120px] md:left-[12%] md:top-[6%] md:h-[140px] md:w-[140px] lg:left-[4%] lg:top-[-14%] lg:h-[190px] lg:w-[190px] xl:left-[-18%] xl:top-[13%] xl:h-[14.9875rem] xl:w-[14.9875rem]"
          alt="about kreatr"
        />
        <Image
          className="absolute hidden sm:left-[37%] sm:top-[105%] sm:block sm:h-[126px] sm:w-[5.6875rem] md:left-[37%] md:top-[112%] md:h-[10.375rem] md:w-[6.6875rem] lg:left-[34%] lg:top-[112%] lg:h-[16rem] lg:w-[7.625rem] lg:rotate-[20deg] xl:left-[26%] xl:top-[212%] xl:h-[11.7169rem] xl:w-[8.8463rem] "
          src={ArrowSticker}
        />
        <Image
          className="absolute right-[14%] top-[-24%] h-55 w-48 sm:hidden "
          src={MobArraow}
        />
        <img
          src="/assets/images/home_page/menu_stickers/menu-withshadow.svg"
          className=" absolute right-[0] top-[-48%] h-[41.84px] w-[78.99px] sm:right-[14%] sm:top-[128%] sm:h-[40px] sm:w-[80px] md:right-[9%] md:top-[142%] md:h-[60px] md:w-[90px] lg:left-[62%] lg:top-[150%] lg:h-[5.25rem] lg:w-[7.75rem] xl:left-[52%] xl:top-[236%] xl:h-[6.5769rem] xl:w-[10.98rem]"
          alt="menu"
        />
        <img
          src="/assets/images/home_page/menu_stickers/explorer-withshadow.svg"
          className="absolute right-[-4%] top-[-32%] h-[28.12px] w-[53.14px] sm:left-[207px] sm:top-[144%] sm:h-[30px] sm:w-[70px] md:left-[76%] md:top-[164%] md:h-[40px] md:w-[80px] lg:left-[80%] lg:top-[181%] lg:h-[50px] lg:w-[100px] xl:left-[76%] xl:top-[275%] xl:h-[3.6688rem] xl:w-[6.9325rem]"
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
          <p className="mx-[10px] button-store">Get it on Play store</p>
        </div>
        <div className="flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-4 text-black">
          <Image
            src={DarkAppStore}
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            alt="App store"
          />
          <p className="mx-[10px] button-store">Available on App store</p>
        </div>
      </div>
    </>
  );
};

export default RightSection;
