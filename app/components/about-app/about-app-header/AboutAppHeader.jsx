import React from "react";
import Image from "next/image";
import AboutAppImg from '../../../../public/assets/images/about-app/about-app-img.svg'

const AboutAppHeader = () => {
  return (
    <>
    <div className="mt-[30px]">
      <h1 className="page-heading text-center text-[48px] sm:text-[64px] lg:text-[86px] xl:text-[96px]">
        THE APP!
      </h1>
      <p className="content-neue text-center text-[16px] italic leading-[18px] sm:text-[18px] lg:text-[22px] lg:leading-[26px] xl:text-[24px]">
        Our custom-designed, super-powered app
        <br className="sm:hidden" /> unites designers and creatives in a<br />{" "}
        community that celebrates innovation and
        <br className="sm:hidden" /> intellect, catering to all creative needs.
      </p>
    </div>
    <div className="hidden sm:flex justify-center mt-[50px] mb-[70px]">
    <div className=" xl:h-[86.73px] xl:w-[942.61px] lg:h-[76px] lg:w-[860px]">
      <Image src={AboutAppImg} alt="app img" />
    </div>
    </div>
    </>
  );
};

export default AboutAppHeader;
