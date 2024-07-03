import React from "react";
import Image from "next/image";

const AboutKreatrMiddle = () => {
  return (
    <div>
      <div className="container  sm:w-[750px] lg:w-[1070px] xl:w-[1125px] px-0 ">
        <div className="flex flex-wrap flex-col sm:flex-row justify-center sm:my-[80px] lg:my-[128px] xl:my-[144px] items-center sm:relative">
          <Image

            className="lg:w-[calc(33.333%-50px)] sm:w-[calc(33.333%-25px)] w-[calc(33.333%-25px)] z-10 sm:absolute xl:left-[3%] lg:left-[3%] sm:left-[3%]" 
            src={"/assets/images/about-kreatr/connect-kreatr.svg"}
            alt="connect image"
            height={0}
            width={0}
            sizes="100vw"
          />
          <Image
            
            className="lg:w-[calc(33.333%+70px)] sm:w-[calc(33.333%+50px)] w-[calc(33.333%+30px)] z-20 sm:absolute"
            src={"/assets/images/about-kreatr/collaborate-kreatr.svg"}
            alt="collaborate image"
            height={0}
            width={0}
            sizes="100vw"
          />
          <Image
            
            className="lg:w-[calc(33.333%-90px)] sm:w-[calc(33.333%-60px)] w-[calc(33.333%-35px)]  z-40 sm:absolute xl:right-[6%] lg:right-[6%] sm:right-[6%]"
            src={"/assets/images/about-kreatr/create-kreatr.svg"}
            alt="create image"
            height={0}
            width={0}
            sizes="100vw"
          />
        </div>
      </div>
      <div className="my-[24px] flex items-center justify-center sm:my-[40px] lg:mb-[72px] lg:mt-[72px]">
        <div className="h-[0.5px] w-[323px] bg-[#2A2A2A] sm:w-[750px] lg:w-[1070px] xl:w-[1125px]"></div>
      </div>
      <div className="mt-[0px] flex flex-col justify-center">
        <div className="kreatr-container container mx-auto flex flex-col justify-center">
          <div className="relative mt-[164px] grid-cols-2 sm:mt-[0px] sm:grid">
            <div className="kreatr-box1 h-[264px] w-[317px] px-[52px] pt-[90px] sm:ml-[-28px] sm:h-[280px] sm:w-[400px] sm:p-[50px] lg:ml-[80px] lg:h-[280px] lg:w-[575px] lg:p-[50px] xl:ml-[150px] xl:h-[295px] xl:w-[584px] xl:p-[45px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DIRECTION
              </h1>
              <p className="content-neue mt-[15px] text-center text-[16px] leading-[18px]  sm:mt-[28px] sm:text-start sm:text-[20px]  sm:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                To ignite a revolution in the design industry through
                cross-industry collaborations that raise the bar and to
                establish a global standard for creativity.
              </p>
            </div>
            <div className="absolute left-[9%] top-[-55%] sm:left-[56%] sm:top-0 lg:left-[56.1%] xl:left-[53.5%]">
              <Image
                className="h-[219px] w-[255px] rounded-[15px] object-cover object-center sm:h-[280px] sm:w-[320px] lg:h-[280px] lg:w-[460px] xl:h-[295px] xl:w-[511px]"
                src={"/assets/images/about-kreatr/kreatr-img1.jpg"}
                alt="Kreatr image"
                height={340}
                width={550}
              />
            </div>
          </div>
          <div className="relative mt-[186px] justify-end sm:mt-[30px] sm:flex sm:gap-[68px]  lg:mt-[35px]  xl:mt-[25px]  xl:gap-[100px]">
            <div className="absolute left-[9%] top-[-55%] sm:left-[-4%] sm:top-0 lg:left-[6.5%] xl:left-[10.8%]">
              <Image
                className="h-[219px] w-[255px] rounded-[15px]  object-cover object-center sm:h-[280px] sm:w-[350px] lg:h-[280px] lg:w-[480px] xl:h-[295px] xl:w-[511px]"
                src={"/assets/images/about-kreatr/kreatr-img2.jpg"}
                alt="Kreatr image"
                height={650}
                width={340}
              />
            </div>
            <div className="kreatr-box2 h-[264px] w-[317px] px-[30px] pt-[90px] sm:mr-[-15px] sm:h-[280px]  sm:w-[370px] sm:p-[50px] lg:mr-[80px] lg:h-[280px] lg:w-[554px] lg:p-[50px] xl:mr-[140px] xl:h-[295px] xl:w-[584px] xl:p-[45px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                DESTINY
              </h1>
              <p className="content-neue mt-[15px] list-disc text-center text-[16px] leading-[18px]  sm:mt-[28px] sm:text-start sm:text-[20px] sm:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                To create a unique digital ecosystem for high-spirited creatives
                where they can unleash their imagination, grow their skills, and
                share their talents with other creatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[40px] flex items-center justify-center lg:mb-[20px] lg:mt-[64px] xl:mt-[72px]">
        <div className="h-[0.5px] w-[323px] bg-[#2A2A2A] sm:w-[750px] lg:w-[1070px] xl:w-[1125px]"></div>
      </div>
    </div>
  );
};

export default AboutKreatrMiddle;
