import React from "react";
import Image from "next/image";
import Link from "next/link";
import Community1 from "../../../../public/assets/images/about_community/about-community-1.jpg";
import Community2 from "../../../../public/assets/images/about_community/about-community-2.jpg";
import Community3 from "../../../../public/assets/images/about_community/about-community-3.jpg";
import Community4 from "../../../../public/assets/images/about_community/about-community-4.jpg";
import playstore from "../../../../public/assets/images/about_community/playstore-community.svg";
import appstore from "../../../../public/assets/images/about_community/appstore-community.svg";
import appstoreYellow from "../../../../public/assets/images/about_community/appstore-yellow.svg";
import playstoreYellow from "../../../../public/assets/images/about_community/playstore-yellow.svg";

const AboutCommunityHero = () => {
  return (
    <div className="my-[60px]">
      <div className="relative mt-[250px] grid-cols-2 sm:mt-0 sm:grid lg:gap-[170px] xl:gap-[240px]">
        <div className="box1 h-[329px] w-[390px] pb-[45px] pl-[45px] pr-[64px] pt-[95px] lg:h-[426px] lg:w-[750px] lg:p-[100px] xl:h-[466px] xl:w-[803px] xl:p-[100px]">
          <h1 className="page-heading text-center text-[40px] leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
            Who Is the
            <br /> communIty for?
          </h1>
          <p className="content-neue mt-[15px] text-center text-[16px] leading-[18px]  sm:text-start sm:text-[20px] lg:mt-[28px] lg:text-[22px] lg:leading-[24px] xl:mt-[38px] xl:text-[24px] xl:leading-[23px] ">
            Our exclusive community caters to creative minds and designers
            committed to making a positive impact through their work. It
            provides a secure environment for continuous learning and growth at
            every stage of your journey.
          </p>
        </div>
        <div className="absolute left-[11%] top-[-62%] sm:static">
          <Image
            className=" h-[271px] w-[302px] rounded-[15px] lg:h-[426px] lg:w-[500px] xl:h-[466px] xl:w-[518px]"
            src={Community1}
            alt="Community image"
          />
        </div>
      </div>
      <div className="relative grid-cols-2 sm:mt-[50px] sm:grid">
        <div className="absolute left-[11%] top-[-50%] sm:static lg:ml-[155px] xl:ml-[158px]">
          <Image
            className="h-[317px] w-[302px] rounded-[15px] lg:h-[526px] lg:w-[500px] xl:h-[624px] xl:w-[518px]"
            src={Community2}
            alt="Community image"
          />
        </div>
        <div className="box2 mt-[310px] h-[512px] w-[390px] px-[42px] pb-[42px] pt-[90px] sm:mt-0 lg:h-[526px] lg:w-[700px] lg:p-[70px] xl:h-[624px] xl:w-[803px] xl:p-[96px]">
          <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
            Some REQUIREMETS
            <br /> TO JOIN OUR COMMUNITY
          </h1>
          <ul className="content-neue ml-[26px] mt-[15px] list-disc text-[16px] leading-[18px] sm:text-[20px] lg:mt-[28px] lg:text-[22px] lg:leading-[24px] xl:mt-[38px] xl:text-[24px] xl:leading-[23px]">
            <li>You are a creative or a designer.</li>
            <li>You stare at a blank canvas for way too long.</li>
            <li>You are seeking guidance on creative projects.</li>
            <li>You want to overcome creative blocks.</li>
            <li>You are a professional or a newbie in the design field.</li>
            <li>You want to host or attend design events and workshops.</li>
            <li>
              You are looking for a community that understands your creative
              needs.
            </li>
            <li>
              You want to network and collaborate with other creatives and
              designers.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="relative mt-[300px] grid-cols-2 sm:mt-[50px] sm:grid sm:gap-[240px] lg:gap-[170px]">
        <div className="box3 h-[329px] w-[390px] p-[45px] sm:p-[85px] lg:h-[426px] lg:w-[750px] lg:p-[74px] xl:h-[466px] xl:w-[803px]">
          <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
            WHY SHOULD YOU
            <br /> JOIN US?
          </h1>
          <p className="content-neue mt-[15px] text-center text-[16px] leading-[18px] sm:mt-[38px] sm:text-start sm:text-[20px]  sm:leading-[23px] lg:text-[22px] lg:leading-[24px] xl:text-[24px]">
            Joining our community allows you to connect with fellow creatives,
            collaborate, and find inspiration.
          </p>
          <p className="content-neue mt-[15px] text-center text-[16px] leading-[18px] sm:text-start sm:text-[20px] sm:leading-[23px] lg:text-[22px] lg:leading-[24px] xl:text-[24px]">
            With us, you can build relationships with like-minded individuals,
            share ideas, and enhance your design skills in a supportive
            environment.
          </p>
        </div>
        <div className="absolute left-[11%] top-[-74%] sm:static">
          <Image
            className="h-[271px] w-[302px] rounded-[15px] lg:h-[426px] lg:w-[500px] xl:h-[466px] xl:w-[518px]"
            src={Community3}
            alt="Community image"
          />
        </div>
      </div>
      <div className="relative mt-[280px] grid-cols-2 sm:mt-[50px] sm:grid">
        <div className="absolute left-[11%] top-[-68%] sm:static lg:ml-[155px] xl:ml-[158px]">
          <Image
            className="h-[271px] w-[302px] rounded-[15px] lg:h-[426px] lg:w-[500px] xl:h-[466px] xl:w-[518px]"
            src={Community4}
            alt="Community image"
          />
        </div>
        <div className="box4 h-[329px] w-[390px] px-[48px] pb-[48px] pt-[80px] sm:p-[96px] lg:h-[426px] lg:w-[700px] lg:p-[85px] xl:h-[466px] xl:w-[803px]">
          <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[60px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
            hOW CAN YOU BE A PART
            <br /> OF OUR COMMUNITY?
          </h1>
          <p className="content-neue mt-[24px] list-disc text-center text-[16px] leading-[18px] sm:mt-[38px] sm:text-start sm:text-[20px] lg:text-[22px] lg:leading-[24px] xl:text-[24px] xl:leading-[23px]">
            Follow us on our socials or Download
            <br /> the Kreatr app!
          </p>
          <div className="mt-[18px] flex items-center justify-center sm:mt-[40px] sm:justify-start">
            <Link href="/join-our-klan">
              <div className="content-neue-medium JOK-btn mr-2 h-[40px] w-[160px] text-[16px] sm:mr-3 lg:h-[51px] lg:w-[185px] lg:text-[20px] xl:text-[24px]">
                Join our Klan
              </div>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.kreatr">
              <Image
                className="playstore mr-1 h-[40px] w-[40px] sm:mr-3 lg:h-[55px] lg:w-[55px]"
                src={playstore}
                alt="play store icon"
              />
            </Link>
            <Link href="https://apps.apple.com/in/app/kreatr/id6474967284">
              <Image
                className="appstore h-[40px] w-[40px] lg:h-[55px] lg:w-[55px]"
                src={appstore}
                alt="play store icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCommunityHero;
