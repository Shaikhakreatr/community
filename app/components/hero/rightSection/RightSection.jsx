import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowSticker from "../../../../public/assets/images/home_page/menu_stickers/Arrow.svg";
import DarkPlayStore from "../../../../public/assets/images/home_page/Dark-playstore.svg";
import DarkAppStore from "../../../../public/assets/images/home_page/Dark-applestore.svg";
import MobArraow from "../../../../public/assets/images/home_page/menu_stickers/mobile-arrow.svg";

const RightSection = () => {
  return (
    <>
      <div className="relative  mx-auto grid h-[200px] w-[320px] max-w-[100%] grid-cols-2 gap-0  sm:grid-cols-2 md:grid-cols-2">
        <img
          src="/assets/images/home_page/menu_stickers/events-withshadow.svg"
          className="absolute left-[15%] top-[66%] h-[3.1525rem] w-[8.2613rem] rotate-[-12deg]  hover:scale-105 sm:left-[44%] sm:top-[78%] sm:h-[38px] sm:w-[145px] sm:rotate-0 md:right-[5%]  md:top-[91%] md:h-[50px] md:w-[9.875rem] lg:left-[47%] lg:top-[114%] lg:h-[60px] lg:w-[200px] xl:left-[44%] xl:top-[152%] xl:h-[6.6037rem] xl:w-[17.3044rem] "
          alt="events"
        />

        <img
          src="/assets/images/home_page/menu_stickers/app-withshadow.svg"
          alt="app"
          className=" absolute left-[40%] top-[21%] h-[4.4863rem] w-[6.9375rem] rotate-[-6deg] hover:scale-105 sm:left-[47%] sm:top-[17%] sm:h-[70px] sm:w-[125px] sm:rotate-[-10deg] md:right-[6%] md:top-[12%] md:h-[90px]  md:w-[155px] lg:left-[52%] lg:top-[18%] lg:h-[120px] lg:w-[12.5rem] lg:rotate-[2deg] xl:left-[46%] xl:top-[24%] xl:h-[10.885rem] xl:w-[16.8319rem] "
        />
        <img
          src="/assets/images/home_page/menu_stickers/contact-withshadow.svg"
          className="absolute right-[1%] top-[13%] h-[6.7825rem] w-[5.2794rem] hover:scale-105 sm:right-[48%] sm:top-[58%] sm:h-[100px] sm:w-[80px] md:right-[48%] md:top-[65%] md:h-[120px] md:w-[95px] lg:left-[18%] lg:top-[80%]  lg:h-[160px] lg:w-[120px] xl:left-[0] xl:top-[112%] xl:h-[12.0538rem] xl:w-[9.3825rem]"
          alt="contact"
        />
        <img
          src="/assets/images/home_page/menu_stickers/community-withshadow.svg"
          className="absolute right-[10%] top-[55%]  h-[3.1938rem] w-[8.4269rem] rotate-[12deg] hover:scale-105 sm:right-[5%] sm:top-[50%] sm:h-[60px] sm:w-[160px] sm:rotate-0 md:right-[1%] md:top-[56%] md:h-[75px] md:w-[180px] lg:left-[46%] lg:top-[73%] lg:h-[90px]  lg:w-[230px] xl:left-[35%] xl:top-[102%] xl:h-[7.1969rem] xl:w-[18.9906rem]"
          alt="know community"
        />
        <img
          src="/assets/images/home_page/menu_stickers/about-layerblur.svg"
          className=" absolute left-[2%] top-[9%] h-[8.6875rem] w-[8.6875rem] hover:scale-105 sm:left-[16%] sm:top-[8%] sm:h-[120px] sm:w-[120px] md:left-[12%] md:top-[6%] md:h-[140px] md:w-[140px] lg:left-[4%] lg:top-[3%] lg:h-[190px] lg:w-[190px] xl:left-[-18%] xl:top-[13%] xl:h-[14.9875rem] xl:w-[14.9875rem]"
          alt="about kreatr"
        />
        <Image
          className="absolute hidden sm:left-[42%] sm:top-[100%] sm:block sm:h-[126px] sm:w-[5.6875rem] sm:rotate-[20deg] md:left-[37%] md:top-[112%] md:h-[10.375rem] md:w-[6.6875rem] lg:left-[40%] lg:top-[132%] lg:h-[16rem] lg:w-[7.625rem] xl:left-[26%] xl:top-[212%] xl:h-[11.7169rem] xl:w-[8.8463rem] "
          alt="arrow image"
          src={ArrowSticker}
        />
        <Image
          className="absolute right-[14%] top-[-8%] h-[2.8806rem] w-[2.5381rem] sm:hidden "
          alt="arrow image"
          src={MobArraow}
        />
        <img
          src="/assets/images/home_page/menu_stickers/menu-withshadow.svg"
          className=" absolute right-[0] top-[-37%] h-[3.3306rem] w-[5.5594rem] sm:right-[14%] sm:top-[128%] sm:h-[40px] sm:w-[80px] md:right-[9%] md:top-[142%] md:h-[60px] md:w-[90px] lg:left-[66%] lg:top-[174%] lg:h-[5.25rem] lg:w-[7.75rem] xl:left-[52%] xl:top-[236%] xl:h-[6.5769rem] xl:w-[10.98rem]"
          alt="menu"
        />
        <img
          src="/assets/images/home_page/menu_stickers/explorer-withshadow.svg"
          className="absolute right-[-4%] top-[-18%] h-[29.72px] w-[56.16px] sm:left-[207px] sm:top-[144%] sm:h-[30px] sm:w-[70px] md:left-[76%] md:top-[164%] md:h-[40px] md:w-[80px] lg:left-[84%] lg:top-[204%] lg:h-[50px] lg:w-[100px] xl:left-[76%] xl:top-[275%] xl:h-[3.6688rem] xl:w-[6.9325rem]"
          alt="explore"
        />
      </div>
      <div className="mb-1 ml-[-12px] flex justify-center gap-x-4 sm:hidden">
        <Link target="blank" href="https://play.google.com/store/apps/details?id=com.kreatr">
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
        </Link>
       <Link target="blank" href="https://apps.apple.com/in/app/kreatr/id6474967284">
       <div className="flex h-[50px] w-[140px] items-center rounded-full border border-black  text-[.875rem] font-medium leading-[14px] text-black">
          <Image
            src={DarkAppStore}
            className="ml-[.9375rem] h-[1.625rem] w-[1.4375rem]"
            alt="App store"
          />
          <p className="button-store mx-[10px]">Available on App store</p>
        </div>
       </Link>
      </div>
    </>
  );
};

export default RightSection;
