import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutKreatrHeader = () => {
  return (
    <div className="mt-[30px] sm:mt-0 lg:mt-[30px]">
      <div className="mb-[30px] sm:mb-0">
        <h1 className="page-heading text-center leading-[40px]  text-[#2A2A2A] text-[40px] sm:text-[74px] lg:text-[94px] xl:text-[110px]">
          Let’s Understand<br className="sm:hidden" /> Kreatr
        </h1>
      </div>
      <div className="flex flex-col justify-center  sm:mt-[70px]">
        <div className="items-center justify-center sm:ml-[-14px] sm:flex">
          <h1 className="page-heading mb-[8px] text-[#2A2A2A] text-center text-[24px] leading-[28px] sm:mb-[15px] sm:mr-[30px] sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[48px] xl:mr-[46px] xl:text-[48px] xl:leading-[52px]">
            What we are?
          </h1>
        </div>
        <div className="mx-[-78px] flex flex-col items-center sm:items-end justify-center  sm:mx-[60px] ">
          <div className="content-neue w-[56%] text-[#2A2A2A] text-[14px] leading-[18px] sm:w-[60%] lg:text-[18px] lg:leading-[27px] xl:text-[24px]">
            <p className="text-center sm:text-start">
              We are a digital ecosystem that encourages cross-industry
              collaboration and empowers creators like you.
            </p>
          </div>
        </div>
        <br />
        <div className="items-center justify-center sm:ml-[18px] sm:flex">
          <h1 className="page-heading mb-[8px] text-[#2A2A2A] text-center text-[24px] leading-[28px] sm:mb-[15px] sm:text-[34px] sm:leading-[38px] lg:text-[40px] lg:leading-[48px] xl:text-[48px] xl:leading-[52px]">
            How DId We Start?
          </h1>
        </div>
        <div className="mx-[-78px] flex flex-col items-center sm:items-end justify-center sm:mx-[60px] ">
          <div className="content-neue w-[56%] text-[#2A2A2A] text-[14px] leading-[18px] sm:w-[60%] lg:text-[18px] lg:leading-[27px] xl:text-[22px]">
            <p  className="text-center sm:text-start">
              It all started when we, Megha and Abdul—the co-founders of
              Kreatr—sought a creative community that matched our vibe. 
            </p>
            <br />
            <p  className="text-center sm:text-start">
              Eager to connect with like-minded individuals across diverse
              design fields, we struggled to find a space that celebrated the
              joy of creation. So, we took a leap of faith and launched Kreatr
              with a vision to unite a klan of similar-minded creatives. 
            </p>
            <br />
            <p  className="text-center sm:text-start">
              {`Our mission goes beyond borders; we're committed to spotlighting
              Indian designers globally and acknowledging their talent and
              contributions. Through Kreatr, we've built a digital ecosystem
              where creatives from all backgrounds can learn, collaborate, and
              inspire each other.`}
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-[20px] flex justify-center  sm:mt-[50px] ">
        <Link href="/join-our-klan">
          <div className="page-subhead kreatr-btn flex  h-[32px] w-[114px] items-center justify-center rounded-[40px] bg-[#2A2A2A] text-center text-[12px]  hover:text-[#2A2A2A] sm:h-[45px] sm:w-[180px] sm:text-[16px] sm:hover:border sm:hover:border-black sm:hover:bg-transparent lg:mr-0 lg:h-[58px] lg:w-[251px] lg:text-[18px] xl:text-[24px]">
            Join Our Initiative
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-[50px]">
      <div className="h-[0.5px] xl:w-[1125px] lg:w-[1070px] w-[323px] bg-[#2A2A2A]">
      </div>
      </div>
    </div>
  );
};

export default AboutKreatrHeader;
