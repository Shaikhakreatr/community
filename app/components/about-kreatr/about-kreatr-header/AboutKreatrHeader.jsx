import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutKreatrHeader = () => {
  return (
    <div className="mt-[30px] sm:mt-0 lg:mt-[30px]">
      <div>
        <h1 className="page-heading text-center text-[48px] sm:text-[74px] lg:text-[96px] xl:text-[110px]">
        Let’s Understand Kreatr
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        <div className="mx-[20px] mt-[45px] flex flex-col items-start justify-center gap-[28px] sm:mx-[60px] sm:mt-[55px] sm:gap-[90px] lg:mt-[50px]">
          <div className="items-center sm:flex">
            <h1 className="page-heading mb-[16px] mr-[20px] sm:mr-[30px] xl:mr-[46px] text-[32px] leading-[28px] sm:mb-0 sm:text-[48px] sm:leading-[38px] lg:text-[58px] lg:leading-[48px] xl:text-[64px] xl:leading-[52px]">
              What
              <br /> we are?
            </h1>
          </div>
          <div className="content-neue w-[56%] text-[14px] leading-[18px] sm:w-[60%] lg:text-[18px] lg:leading-[32px] xl:text-[22px]">
            <p>
              Digital ecosystem that encourages cross-industry collaboration and
              empowers creators like you.
            </p>
          </div>
        </div>
        <div className="mx-[20px] mt-[45px] flex flex-col items-start justify-center gap-[28px] sm:mx-[60px] sm:mt-[55px] sm:gap-[90px] lg:mt-[50px]">
          <div className="items-center sm:flex">
            <h1 className="page-heading mb-[16px] text-[32px] leading-[28px] sm:mb-0 sm:text-[48px] sm:leading-[38px] lg:text-[58px] lg:leading-[48px] xl:text-[64px] xl:leading-[52px]">
              How DId
              <br /> We Start?
            </h1>
          </div>
          <div className="content-neue w-[56%] text-[14px] leading-[18px] sm:w-[60%] lg:text-[18px] lg:leading-[32px] xl:text-[22px]">
            <p>
              {`It all started when we, Megha and Abdul—the co-founders of
            Kreatr—sought a creative community that matched our vibe.`}
            </p>
            <br />
            <p>{`Eager to
            connect with like-minded individuals across diverse design fields,
            we struggled to find a space that celebrated the joy of creation.`}</p>
            <br />
            <p>{`So, we took a leap of faith and launched Kreatr with a vision to
            unite a klan of similar-minded creatives.`}</p>
            <br />
            <p>{` Our mission goes beyond
            borders; we're committed to spotlighting Indian designers globally
            and acknowledging their talent and contributions. `}</p>
            <br />
            <p>{`Through Kreatr,
            we've built a digital ecosystem where creatives from all backgrounds
            can learn, collaborate, and inspire each other.`}</p>
          </div>
        </div>
      </div>
      <div className="ml-[56px] mt-[20px] flex justify-center sm:ml-[70px] sm:mt-[50px] lg:mr-[130px]">
        <Link href="/join-our-klan">
          <div className="page-subhead kreatr-btn flex  h-[32px] w-[114px] items-center justify-center rounded-[40px] bg-black text-center text-[12px]  hover:text-black sm:h-[45px] sm:w-[180px] sm:text-[16px] sm:hover:border sm:hover:border-black sm:hover:bg-transparent lg:mr-0 lg:h-[58px] lg:w-[251px] lg:text-[18px]  xl:mr-[80px] xl:text-[24px]">
            Join Our Initiative
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutKreatrHeader;
