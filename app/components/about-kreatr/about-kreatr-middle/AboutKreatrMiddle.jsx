import React from "react";
import Image from "next/image";
import Connect from "../../../../public/assets/images/about-kreatr/connect-kreatr.svg";
import Collaborate from "../../../../public/assets/images/about-kreatr/collaborate-kreatr.svg";
import Create from "../../../../public/assets/images/about-kreatr/create-kreatr.svg";
import AboutKreatrImg1 from "../../../../public/assets/images/about-kreatr/kreatr-img1.jpg";
import AboutKreatrImg2 from "../../../../public/assets/images/about-kreatr/kreatr-img2.jpg";
import Commas from "../../../../public/assets/images/about-kreatr/inverted-commas.svg";

const AboutKreatrMiddle = () => {
  return (
    <div className="">
      <div>
        <p className="page-subhead mt-[30px] text-center text-[16px] sm:mt-[50px] lg:text-[28px] xl:text-[35px]">
          We Are Guided By 3C’s
        </p>
      </div>
      <div className="mt-[85px] h-[50px]  relative  flex items-center justify-center sm:mt-[50px] sm:mb-0 mb-[50px]">
        <div className="sm:mt-24 flex items-center justify-center sm:h-0">
          <Image className=" absolute bottom-[98%] left-[20%] lg:top-[2%] xl:left-[10%] lg:left-[16%] h-[49px] w-[122px] lg:h-[105px] lg:w-[310px] xl:h-[155px] xl:w-[389px] rotate-[-2deg]" src={Connect} alt="connect image" />
          <Image className=" absolute top-[-82%] right-[12%] lg:left-[35%] lg:top-[10%]  h-[42px] w-[145px] lg:h-[100px] lg:w-[350px] xl:h-[135px] xl:w-[461px] rotate-[2deg]" src={Collaborate} alt="collaborate image" />
          <Image className="absolute top-[-5%] lg:top-[6%] lg:left-[56%] xl:left-[66%] h-[45px] w-[103px] lg:h-[105px] lg:w-[320px]  xl:h-[145px] xl:w-[328px] rotate-[-2deg]" src={Create} alt="create image" />
        </div>
      </div>
      <div className="mt-[30px] flex justify-center sm:mt-[150px]">
        <p className="content-neue-medium text-center lg:leading-[30px] xl:leading-[32px] leading-[18px] text-[14px] lg:text-[26px] xl:text-[28px]">
          Our mission is to build a sustainable community of<br className="sm:hidden" /> creatives
          <br className="sm:block hidden" /> who aspire to change the world through<br className="sm:hidden" /> their designs and
          <br className="sm:block hidden" /> empower fellow creatives from<br className="sm:hidden" /> all backgrounds to do the same.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="relative mt-[190px] grid-cols-2 sm:mt-[50px] sm:grid sm:gap-[240px] lg:gap-[90px] xl:gap-[0px]">
            <div className="kreatr-box1 h-[323px] w-[390px] pt-[150px] px-[52px]  sm:p-[85px] lg:h-[340px] lg:w-[650px] lg:p-[78px] xl:h-[364px] xl:w-[669px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DIRECTION
              </h1>
              <p className="content-neue mt-[15px] text-center text-[16px] leading-[18px] text-black sm:mt-[28px] sm:text-start sm:text-[20px]  sm:leading-[23px] lg:text-[22px] lg:leading-[32px] xl:text-[24px]">
                To ignite a revolution in the design industry through
                cross-industry collaborations that raise the bar and to
                establish a global standard for creativity.
              </p>
            </div>
            <div className="absolute left-[9%] top-[-46%] sm:static">
              <Image
                className="h-[271px] w-[320px] rounded-[15px] lg:h-[340px] lg:w-[550px] xl:h-[364px] xl:w-[650px]"
                src={AboutKreatrImg1}
                alt="Kreatr image"
              />
            </div>
          </div>
          <div className="relative mt-[195px] justify-end sm:mt-[50px] sm:flex xl:gap-[50px] lg:gap-[50px]">
            <div className="absolute left-[9%] top-[-46%] sm:static">
              <Image
                className="h-[271px] w-[320px] rounded-[15px] lg:h-[340px] lg:w-[650px] xl:h-[364px] xl:w-[727px]"
                src={AboutKreatrImg2}
                alt="Kreatr image"
              />
            </div>
            <div className="kreatr-box2 h-[323px] w-[390px] px-[52px] pt-[150px] sm:p-[96px] lg:h-[340px] lg:w-[520px] lg:p-[72px] xl:h-[364px] xl:w-[690px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DESTINY
              </h1>
              <p className="content-neue mt-[24px] list-disc text-center text-[16px] leading-[18px] text-black sm:mt-[28px] sm:text-start sm:text-[20px] lg:text-[22px] lg:leading-[24px] xl:text-[24px] xl:leading-[32px]">
                To create a unique digital ecosystem for high-spirited creatives
                where they can unleash their imagination, grow their skills, and
                share their talents with other creatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-[100px] sm:py-[50px] sm:mt-0 mt-[40px]">
        <h1 className="page-heading text-center xl:text-[96px] lg:text-[86px] text-[40px]">Creators</h1>
        <div className="lg:mt-[40px] mt-[40px] flex items-start justify-between px-[18px] sm:px-0 lg:gap-[30px]">
          <div>
            <p className="page-subhead xl:text-[30px] lg:text-[26px] text-[14px] xl:leading-[32px] lg:leading-[30px] leading-[18px] italic">
              “As designers, we have been hiding<br className="sm:hidden" /> our true
              <br className="sm:block hidden" /> potential for too long. It is now<br className="sm:hidden" /> time to be that change.”
            </p>
            <p className="page-subhead lg:mt-[20px] mt-[10px] xl:text-[30px] lg:text-[26px] text-[14px] xl:leading-[32px] lg:leading-[30px] leading-[18px]">
              – Abdul Rahiman
              <br /> Co-founder & CEO
            </p>
          </div>
          <div className="sm:mr-[80px]">
            <Image className="lg:h-[80px] lg:w-[80px] h-[40px] w-[60px]" src={Commas} alt="inverted commas" />
          </div>
        </div>
        <div className="flex justify-end sm:mt-0 mt-[20px]">
          <div className="sm:w-[56%] w-[64%]">
            <p className="page-subhead xl:text-[30px] lg:text-[26px] text-[14px] xl:leading-[32px] lg:leading-[30px] leading-[18px] italic">
              {`“We're a bunch of crazy people who want to show you”`}
            </p>
            <p className="page-subhead xl:text-[30px] lg:text-[26px] text-[14px] xl:leading-[32px] lg:leading-[30px] leading-[18px] italic">{`what we can do.
            Welcome to the community!`}</p>
            <p className="page-subhead lg:mt-[20px] mt-[10px] xl:text-[30px] lg:text-[26px] text-[14px] xl:leading-[32px] lg:leading-[30px] leading-[18px]">
              – Megha Satish
              <br /> Co-founder & Creative Director
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKreatrMiddle;
