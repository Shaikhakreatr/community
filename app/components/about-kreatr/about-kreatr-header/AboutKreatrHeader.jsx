import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutKreatrHeader.module.css";

const AboutKreatrHeader = () => {
  return (
    <div className="mt-[30px] sm:mt-0 lg:mt-[30px]">
      <div className="mb-[30px] sm:mb-0">
        <h1 className="page-heading mt-[44px] text-center  text-[40px] leading-[35px] text-[#2A2A2A] sm:mt-[70px]  sm:text-[74px] lg:mt-[90px] lg:text-[94px] xl:mt-[150px] xl:text-[110px]">
          Let’s Understand
          <br className="sm:hidden" /> Kreatr
        </h1>
      </div>
      <div className="mt-[24px] flex items-center justify-center sm:mt-[40px] lg:mt-[64px] xl:mt-[72px] ">
        <Image
          className="h-[178px] w-[317px] rounded-[15px] object-cover object-center sm:h-[400px] sm:w-[700px]  lg:h-[450px] lg:w-[968px] xl:h-[632px] xl:w-[1125px]"
          src="/assets/images/about-kreatr/about-kreatr-balloon-img.jpg"
          alt="balloon image"
          height={632}
          width={1125}
        />
      </div>
      <div className="mt-[20px] flex flex-col justify-center sm:mt-[40px] lg:mb-[24px] lg:mt-[60px] xl:mt-[72px]">
        <div
          className={`items-center justify-center sm:ml-[48px] sm:flex lg:ml-[40px] ${styles.aboutKreatrContent}`}
        >
          <h1 className="page-heading mb-[12px] text-center text-[24px] leading-[28px] text-[#2A2A2A] sm:mb-[15px] sm:mr-[5px] sm:text-[34px] sm:leading-[38px] lg:mr-[70px] lg:text-[40px] lg:leading-[45px] xl:mr-[64px] xl:text-[48px] xl:leading-[52px]">
            What we are?
          </h1>
        </div>
        <div className=" flex flex-col items-center justify-center sm:mx-[60px]  sm:items-end ">
          <div
            className={`content-neue px-6 lg:px-2  text-[14px] leading-[18px] text-[#2A2A2A] sm:w-[60%] lg:text-[18px] lg:leading-[22px] xl:leading-[27px] xl:text-[24px] ${styles.paraMargin1} `}
          >
            <p className="text-center sm:pr-[16px] sm:text-start">
              We are a digital ecosystem that encourages cross-industry
              collaboration and empowers creators like you.
            </p>
          </div>
        </div>
        <div
          className={`mt-[24px] items-center justify-center sm:ml-[74px] sm:mt-[24px] sm:flex lg:ml-[50px] lg:mt-[24px]  xl:ml-[78px] ${styles.aboutKreatrContent} `}
        >
          <h1 className="page-heading mb-[12px] text-center text-[24px] leading-[28px] text-[#2A2A2A] sm:mb-[15px] sm:ml-[12px] sm:text-[34px] sm:leading-[38px] lg:mb-[24px] lg:ml-[-20px] lg:text-[40px] lg:leading-[48px] xl:text-[48px] xl:leading-[52px]">
            How DId We Start?
          </h1>
        </div>
        <div
          className={`flex flex-col items-center justify-center sm:mx-[60px] sm:pr-[50px] sm:items-end xl:mx-[100px] ${styles.paraMargin} `}
        >
          <div
            className={`content-neue px-6 text-[14px] leading-[18px] text-[#2A2A2A] sm:w-[60%] lg:text-[18px] lg:leading-[22px] xl:leading-[27px] xl:text-[22px] ${styles.howWeAre} `}
          >
            <p className="mb-[12px] text-center sm:mb-[12px] sm:text-start lg:mb-[24px]">
              It all started when we, Megha and Abdul—the co-founders of
              Kreatr—sought a creative community that matched our vibe. 
            </p>
            <p className="mb-[12px] text-center sm:mb-[12px] sm:text-start lg:mb-[24px]">
              Eager to connect with like-minded individuals across diverse
              design fields, we struggled to find a space that celebrated the
              joy of creation. So, we took a leap of faith and launched Kreatr
              with a vision to unite a klan of similar-minded creatives. 
            </p>
            <p className="text-center sm:text-start ">
              {`Our mission goes beyond borders; we're committed to spotlighting
              Indian designers globally and acknowledging their talent and
              contributions. Through Kreatr, we've built a digital ecosystem
              where creatives from all backgrounds can learn, collaborate, and
              inspire each other.`}
            </p>
          </div>
        </div>
        <div
          className={` mt-[24px] flex justify-center sm:ml-[45px] sm:mt-[24px] lg:ml-[0px] lg:mt-[44px] xl:ml-[0px] ${styles.buttonBig} "`}
        >
          <Link href="/join-our-klan">
            <div className="page-subhead kreatr-btn flex  h-[32px] w-[114px] items-center justify-center rounded-[40px] bg-[#2A2A2A] text-center text-[12px]  hover:text-[#2A2A2A] sm:h-[45px] sm:w-[180px] sm:text-[16px] sm:hover:border sm:hover:border-black sm:hover:bg-transparent lg:mr-0 lg:h-[42px] lg:w-[220px] xl:h-[58px] xl:w-[251px] lg:text-[18px] xl:text-[24px]">
              Join Our Initiative
            </div>
          </Link>
        </div>
      </div>

      <div className="my-[24px] flex items-center justify-center sm:my-[40px] lg:my-[64px] xl:mb-[72px] xl:mt-[72px]">
        <div className="h-[0.5px] w-[323px] bg-[#2A2A2A] sm:w-[750px] lg:w-[1070px] xl:w-[1125px]"></div>
      </div>
    </div>
  );
};

export default AboutKreatrHeader;
