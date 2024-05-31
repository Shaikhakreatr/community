import React from "react";
import Image from "next/image";

const AboutKreatrMiddle = () => {
  return (
    <div className="">
      <div>
        <p className="page-subhead mt-[30px] text-center text-[16px] sm:mt-[50px] lg:text-[28px] xl:text-[35px]">
          We Are Guided By 3C’s
        </p>
      </div>
      <div className="relative mb-[50px]  mt-[85px]  flex h-[50px] items-center justify-center sm:mb-0 sm:mt-[35px] lg:mt-[50px]">
        <div className="flex items-center justify-center sm:mt-24 sm:h-0">
          <Image
            className=" absolute bottom-[98%] left-[20%] h-[49px] w-[122px] rotate-[-2deg] lg:left-[14%] sm:top-[10%] sm:left-[8%] lg:top-[2%] sm:h-[80px] sm:w-[280px] lg:h-[105px] lg:w-[310px] xl:left-[10%] xl:h-[155px] xl:w-[389px]"
            src={"/assets/images/about-kreatr/connect-kreatr.svg"}
            alt="connect image"
            height={105}
            width={310}
          />
          <Image
            className=" absolute right-[12%] top-[-82%] h-[42px] w-[145px]  rotate-[2deg] sm:top-[24%] sm:left-[35%] lg:left-[35%] lg:top-[10%] sm:h-[70px] sm:w-[280px] lg:h-[100px] lg:w-[350px] xl:h-[135px] xl:w-[461px]"
            src={"/assets/images/about-kreatr/collaborate-kreatr.svg"}
            alt="collaborate image"
            height={100}
            width={350}
          />
          <Image
            className="absolute top-[-5%] h-[45px] w-[103px] rotate-[-2deg] sm:top-[15%] sm:left-[61%] lg:left-[58%] lg:top-[6%] sm:h-[80px] sm:w-[280px] lg:h-[105px] lg:w-[320px]  xl:left-[66%] xl:h-[145px] xl:w-[328px]"
            src={"/assets/images/about-kreatr/create-kreatr.svg"}
            alt="create image"
            height={105}
            width={320}
          />
        </div>
      </div>
      <div className="mt-[30px] flex justify-center sm:mt-[70px] lg:mt-[150px]">
        {/* remove text */}
        {/* <p className="content-neue-medium text-center text-[14px] leading-[18px] lg:text-[26px] lg:leading-[30px] xl:text-[28px] xl:leading-[32px]">
          Our mission is to build a sustainable community of
          <br className="sm:hidden" /> creatives
          <br className="hidden sm:block" /> who aspire to change the world
          through
          <br className="sm:hidden" /> their designs and
          <br className="hidden sm:block" /> empower fellow creatives from
          <br className="sm:hidden" /> all backgrounds to do the same.
        </p> */}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="relative mt-[190px] grid-cols-2 sm:mt-[50px] sm:gap-[68px] sm:grid  xl:gap-[100px]">
            <div className="kreatr-box1 h-[323px] w-[390px] px-[52px] pt-[150px] sm:p-[35px] sm:h-[240px] sm:w-[350px] lg:h-[340px] lg:w-[620px] lg:p-[78px] xl:h-[364px] xl:w-[669px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DIRECTION
              </h1>
              <p className="content-neue mt-[15px] text-center text-[16px] leading-[18px] text-black sm:mt-[28px] sm:text-start sm:text-[20px]  sm:leading-[20px] lg:text-[22px] lg:leading-[24px] xl:leading-[32px] xl:text-[24px]">
                To ignite a revolution in the design industry through
                cross-industry collaborations that raise the bar and to
                establish a global standard for creativity.
              </p>
            </div>
            <div className="absolute left-[9%] top-[-46%] sm:top-0 sm:left-[50%] lg:left-[52%] xl:left-[50%]">
              <Image
                className="h-[271px] w-[320px] rounded-[15px] sm:h-[240px] sm:w-[350px] lg:h-[340px] lg:w-[550px] xl:h-[364px] object-cover object-center xl:w-[650px]"
                src={"/assets/images/about-kreatr/kreatr-img1.jpg"}
                alt="Kreatr image"
                height={340}
                width={550}
              />
            </div>
          </div>
          <div className="relative mt-[195px] justify-end sm:mt-[50px]  sm:gap-[68px]  sm:flex  xl:gap-[100px]">
            <div className="absolute left-[9%] top-[-46%] sm:top-0 sm:left-[5%] lg:left-[4%] xl:left-[4%]">
              <Image
                className="h-[271px] w-[320px] rounded-[15px]  sm:h-[240px] sm:w-[350px] object-cover object-center lg:h-[340px] lg:w-[550px] xl:h-[364px] xl:w-[650px]"
                src={"/assets/images/about-kreatr/kreatr-img2.jpg"}
                alt="Kreatr image"
                height={650}
                width={340}
              />
            </div>
            <div className="kreatr-box2 h-[323px] w-[390px] sm:p-[35px]  sm:h-[240px] sm:w-[350px] px-[52px] pt-[150px] lg:h-[340px] lg:w-[620px] lg:p-[72px] xl:h-[364px] xl:w-[690px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DESTINY
              </h1>
              <p className="content-neue mt-[24px] list-disc text-center text-[16px] leading-[18px] text-black sm:mt-[28px] sm:text-start sm:leading-[20px] sm:text-[20px] lg:text-[22px] lg:leading-[24px] xl:text-[24px] xl:leading-[32px]">
                To create a unique digital ecosystem for high-spirited creatives
                where they can unleash their imagination, grow their skills, and
                share their talents with other creatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] sm:mt-0 sm:px-[100px] sm:py-[50px]">
        <h1 className="page-heading text-center text-[40px] lg:text-[86px] xl:text-[96px]">
          Creators
        </h1>
        <div className="mt-[40px] flex items-start justify-between px-[18px] sm:px-0 lg:mt-[40px] lg:gap-[30px]">
          <div>
            <p className="content-neue text-[14px] italic leading-[18px] lg:text-[26px] lg:leading-[30px] xl:text-[30px] xl:leading-[32px]">
              “As designers, we have been hiding
              <br className="sm:hidden" /> our true
              <br className="hidden sm:block" /> potential for too long. It is
              now
              <br className="sm:hidden" /> time to be that change.”
            </p>
            <p className="page-subhead mt-[10px] text-[14px] leading-[18px] lg:mt-[20px] lg:text-[26px] lg:leading-[30px] xl:text-[30px] xl:leading-[32px]">
              – Abdul Rahiman
              <br /> Co-founder & CEO
            </p>
          </div>
          <div className="sm:mr-[80px]">
            {/* remove the image */}
            {/* <Image
              className="h-[40px] w-[60px] lg:h-[80px] lg:w-[80px]"
              src={"/assets/images/about-kreatr/inverted-commas.svg"}
              alt="inverted commas"
              height={80}
              width={80}
            /> */}
          </div>
        </div>
        <div className="mt-[20px] flex justify-end sm:mt-0">
          <div className="w-[64%] sm:w-[56%]">
            <p className="content-neue text-[14px] italic leading-[18px] lg:text-[26px] lg:leading-[30px] xl:text-[30px] xl:leading-[32px]">
              {`“We're a bunch of crazy people who want to show you`}
            </p>
            <p className="content-neue text-[14px] italic leading-[18px] lg:text-[26px] lg:leading-[30px] xl:text-[30px] xl:leading-[32px]">{`what we can do.
            Welcome to the community!"`}</p>
            <p className="page-subhead mt-[10px] text-[14px] leading-[18px] lg:mt-[20px] lg:text-[26px] lg:leading-[30px] xl:text-[30px] xl:leading-[32px]">
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
