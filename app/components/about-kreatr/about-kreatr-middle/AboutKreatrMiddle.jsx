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
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-[15px] mt-[85px] flex  h-[50px] w-[350px]  sm:w-[700px] items-center justify-center sm:mb-0 sm:mt-[35px] lg:mt-[50px]">
          <div className="flex items-center justify-center sm:mt-24 sm:h-0">
            <Image
              className=" absolute bottom-[98%] left-[14%] h-[49px] w-[122px] rotate-[-2deg] sm:left-[2%] sm:top-[9%] sm:h-[80px] sm:w-[280px] lg:left-[-15%] lg:top-[-16%] lg:h-[105px] lg:w-[310px] xl:top-[-20%] xl:left-[-34%] xl:h-[155px] xl:w-[389px]"
              src={"/assets/images/about-kreatr/connect-kreatr.svg"}
              alt="connect image"
              height={105}
              width={310}
            />
            <Image
              className=" absolute right-[12%] top-[-82%] h-[42px] w-[145px]  rotate-[2deg] sm:left-[32%] sm:top-[24%] sm:h-[70px] sm:w-[280px] lg:left-[23%] lg:top-[-5%] lg:h-[100px] lg:w-[350px] xl:left-[19%] xl:h-[135px] xl:w-[461px]"
              src={"/assets/images/about-kreatr/collaborate-kreatr.svg"}
              alt="collaborate image"
              height={100}
              width={350}
            />
            <Image
              className="absolute top-[-5%] h-[45px] w-[103px] rotate-[-2deg] sm:left-[61%] sm:top-[15%] sm:h-[80px] sm:w-[280px] lg:left-[65%] lg:top-[-4%] lg:h-[105px] lg:w-[320px] xl:left-[80%]  xl:top-[-2%] xl:h-[145px] xl:w-[328px]"
              src={"/assets/images/about-kreatr/create-kreatr.svg"}
              alt="create image"
              height={105}
              width={320}
            />
          </div>
        </div>
      </div>
      <div className="mt-[0px] flex justify-center  sm:mt-[40px] lg:mt-[80px] xl:mt-[118px]">
        <div className="flex flex-col justify-center">
          <div className="relative mt-[190px] grid-cols-2 sm:mt-[50px] sm:grid sm:gap-[68px]  xl:gap-[100px]">
            <div className="kreatr-box1  h-[323px] w-[430px] px-[52px] pt-[150px] sm:h-[280px] sm:w-[400px] sm:p-[50px] lg:h-[340px] lg:w-[620px] lg:p-[78px] xl:h-[364px] xl:w-[750px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DIRECTION
              </h1>
              <p className="content-neue mt-[15px] text-center text-[16px] leading-[18px]  sm:mt-[28px] sm:text-start sm:text-[20px]  sm:leading-[20px] lg:text-[22px] lg:leading-[24px] xl:text-[24px] xl:leading-[32px]">
                To ignite a revolution in the design industry through
                cross-industry collaborations that raise the bar and to
                establish a global standard for creativity.
              </p>
            </div>
            <div className="absolute left-[13%] top-[-46%] sm:left-[52%] sm:top-0 lg:left-[52%] xl:left-[51%]">
              <Image
                className="h-[271px] w-[320px] rounded-[15px] object-cover object-center sm:h-[280px] sm:w-[350px] lg:h-[340px] lg:w-[550px] xl:h-[364px] xl:w-[650px]"
                src={"/assets/images/about-kreatr/kreatr-img1.jpg"}
                alt="Kreatr image"
                height={340}
                width={550}
              />
            </div>
          </div>
          <div className="relative mt-[195px] justify-end sm:mt-[50px]  sm:flex  sm:gap-[68px]  xl:gap-[100px]">
            <div className="absolute left-[13%] top-[-46%] sm:left-[5%] sm:top-0 lg:left-[4%] xl:left-[8%]">
              <Image
                className="h-[271px] w-[320px] rounded-[15px]  object-cover object-center sm:h-[280px] sm:w-[350px] lg:h-[340px] lg:w-[550px] xl:h-[364px] xl:w-[650px]"
                src={"/assets/images/about-kreatr/kreatr-img2.jpg"}
                alt="Kreatr image"
                height={650}
                width={340}
              />
            </div>
            <div className="kreatr-box2 h-[323px] w-[430px] px-[52px]  pt-[150px] sm:h-[280px] sm:w-[400px] sm:p-[50px] lg:h-[340px] lg:w-[620px] lg:p-[72px] xl:h-[364px] xl:w-[750px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DESTINY
              </h1>
              <p className="content-neue mt-[24px] list-disc text-center text-[16px] leading-[18px]  sm:mt-[28px] sm:text-start sm:text-[20px] sm:leading-[20px] lg:text-[22px] lg:leading-[24px] xl:text-[24px] xl:leading-[32px]">
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
        <div className="flex flex-col  items-center justify-between">
          <div className="mt-[40px] flex items-start mr-[100px] sm:mr-0  justify-start sm:w-[100%] sm:px-0 lg:mt-[40px] lg:gap-[30px]">
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
          </div>

          <div className="mt-[20px] ml-[40px] sm:ml-0 flex justify-end sm:w-[100%] sm:mt-0">
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
    </div>
  );
};

export default AboutKreatrMiddle;
