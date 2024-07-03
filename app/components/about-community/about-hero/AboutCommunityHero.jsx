import React from "react";
import Image from "next/image";
import Link from "next/link";
import Community1 from "../../../../public/assets/images/about_community/about-community-1.jpg";
import Community2 from "../../../../public/assets/images/about_community/about-community-2.jpg";
import Community3 from "../../../../public/assets/images/about_community/about-community-3.jpg";
import Community4 from "../../../../public/assets/images/about_community/about-community-4.jpg";
import playstore from "../../../../public/assets/images/about_community/playstore-community.svg";
import appstore from "../../../../public/assets/images/about_community/appstore-community.svg";



const AboutCommunityHero = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="container mx-auto mb-[60px] sm:mb-[90px] sm:mt-[60px] lg:mb-[140px] ">
          <div className="relative mt-[170px] grid-cols-2 sm:mt-0 sm:grid">
            <div className="box1 h-[369px] w-[317px]  px-[22px] pt-[132px] sm:ml-0 sm:h-[350px] sm:w-[400px] sm:p-[60px] lg:ml-[115px] lg:h-[390px] lg:w-[590px] lg:p-[70px] xl:ml-[130px] xl:h-[419px] xl:w-[697px] xl:p-[70px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px] sm:text-start sm:text-[50px] sm:leading-[42px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                Who Is the
                <br /> communIty for?
              </h1>
              <p className="content-neue mt-[15px] text-center  text-[16px] leading-[18px]  sm:text-start sm:text-[20px] lg:mt-[28px] lg:text-[18px] lg:leading-[22px] xl:mt-[38px] xl:text-[22px] xl:leading-[26px] ">
                Our exclusive community caters to creative minds and designers
                committed to making a positive impact through their work. It
                provides a secure environment for continuous learning and growth
                at every stage of your journey.
              </p>
            </div>
            <div className="absolute left-[10%] top-[-32%] sm:static sm:ml-[80px] lg:ml-[120px] xl:ml-[140px]">
              <Image
                className=" h-[228px] w-[254px] rounded-[15px] object-cover object-center sm:h-[350px] sm:w-[300px] lg:h-[390px] lg:w-[390px] xl:h-[419px] xl:w-[466px]"
                src={Community1}
                alt="Community image"
              />
            </div>
          </div>
          <div className="relative grid-cols-2 sm:mt-[30px] sm:grid lg:mt-[40px] xl:mt-[25px]">
            <div className="absolute left-[10%] top-[-45%] sm:static lg:ml-[115px] xl:ml-[130px] ">
              <Image
                className="h-[317px] w-[254px]  rounded-[15px] object-cover object-center sm:h-[455px] sm:w-[320px] lg:h-[460px] lg:w-[390px] xl:h-[534px] xl:w-[466px]"
                src={Community2}
                alt="Community image"
              />
            </div>
            <div className="box2 mt-[265px] h-[470px] w-[317px] px-[25px]  pt-[132px] sm:mt-0 sm:h-[455px] sm:w-[347px] sm:p-[40px] lg:ml-[-75px] lg:h-[460px] lg:w-[590px] lg:p-[58px] xl:ml-[-85px] xl:h-[534px] xl:w-[697px] xl:p-[80px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px]  sm:text-start sm:text-[50px] sm:leading-[42px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                JOIN US IF YOU
              </h1>
              <ul className="content-neue ml-[26px] mt-[15px]  list-disc text-[16px] leading-[18px] sm:text-[20px] lg:mt-[28px] lg:text-[18px] lg:leading-[22px] xl:mt-[38px] xl:text-[22px] xl:leading-[26px]">
                <li>Are a creative or a designer.</li>
                <li> Stare at a blank canvas for way too long.</li>
                <li> Are seeking guidance on creative projects.</li>
                <li> Want to overcome creative blocks.</li>
                <li>Are a professional or a newbie in the design field.</li>
                <li>Want to host or attend design events and workshops.</li>
                <li>
                  Are looking for a community that understands your creative
                  needs.
                </li>
                <li>
                  Want to network and collaborate with other creatives and
                  designers.
                </li>
              </ul>
            </div>
          </div>
          <div className="relative mt-[206px] grid-cols-2 sm:mt-[30px] sm:grid lg:mt-[40px] xl:mt-[25px] ">
            <div className="box3 h-[369px] w-[317px] px-[42px] pt-[98px] sm:ml-0 sm:h-[340px] sm:w-[400px] sm:p-[40px] lg:ml-[115px] lg:h-[400px] lg:w-[610px] lg:p-[60px] xl:ml-[130px] xl:h-[442px] xl:w-[697px] xl:p-[70px]">
              <h1 className="page-heading text-center text-[40px]  leading-[35px]  sm:text-start sm:text-[50px] sm:leading-[42px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                WHY SHOULD YOU
                <br /> JOIN US?
              </h1>
              <p className="content-neue mt-[15px] text-center  text-[16px] leading-[18px] sm:mt-[20px] sm:text-start sm:text-[20px] sm:leading-[23px]  lg:mt-[38px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                Joining our community allows you to connect with fellow
                creatives, collaborate, and find inspiration.
              </p>
              <p className="content-neue mt-[15px] text-center  text-[16px] leading-[18px] sm:text-start sm:text-[20px] sm:leading-[23px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                With us, you can build relationships with like-minded
                individuals, share ideas, and enhance your design skills in a
                supportive environment.
              </p>
            </div>
            <div className="absolute left-[10%] top-[-42%] sm:static sm:ml-[80px] lg:ml-[150px] xl:ml-[140px]">
              <Image
                className="h-[228px] w-[254px] rounded-[15px] object-cover object-center sm:h-[340px] sm:w-[300px] lg:h-[400px] lg:w-[366px] xl:h-[442px] xl:w-[466px]"
                src={Community3}
                alt="Community image"
              />
            </div>
          </div>
          <div className="relative mt-[206px] grid-cols-2 sm:mt-[30px] sm:grid lg:mt-[40px] xl:mt-[25px]">
            <div className="absolute left-[10%] top-[-40%] sm:static lg:ml-[115px] xl:ml-[130px]">
              <Image
                className="h-[228px] w-[254px] rounded-[15px] object-cover object-center sm:h-[290px] lg:h-[390px] lg:w-[390px] xl:h-[425px] xl:w-[466px]"
                src={Community4}
                alt="Community image"
              />
            </div>
            <div className="box4 h-[369px] w-[317px] px-[25px] pt-[105px] sm:ml-[-64px] sm:h-[290px] sm:w-[410px] sm:p-[24px] lg:ml-[-70px] lg:h-[390px] lg:w-[600px] lg:px-[40px] lg:py-[65px] xl:ml-[-85px] xl:h-[425px] xl:w-[697px] xl:p-[50px]">
              <h1 className="page-heading text-center  text-[40px] leading-[35px]  sm:text-start sm:text-[50px] sm:leading-[42px] lg:text-[70px] lg:leading-[56px] xl:text-[80px] xl:leading-[67px]">
                hOW CAN YOU BE A PART
                <br className="block sm:hidden lg:block" /> OF OUR COMMUNITY?
              </h1>
              <p className="content-neue mt-[24px] list-disc  text-center text-[16px] leading-[18px] sm:text-start sm:text-[20px] lg:mt-[30px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                Follow us on our socials and Download the Kreatr app!
              </p>
              <div className="mt-[18px] flex items-center justify-center sm:justify-start lg:mt-[30px]">
                <Link href="/join-our-klan">
                  <div className="content-neue-medium JOK-btn mr-2 flex h-[40px] w-[160px] items-center justify-center text-[16px] sm:mr-3 lg:h-[51px] lg:w-[185px] lg:text-[20px] xl:text-[24px]">
                    Join our Klan
                  </div>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.kreatr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="playstore mr-1 h-[40px] w-[40px] sm:mr-3 lg:h-[55px] lg:w-[55px]"
                    src={playstore}
                    alt="play store icon"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/in/app/kreatr/id6474967284"
                  target="_blank"
                  rel="noreferrer"
                >
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
      </div>
    </div>
  );
};

export default AboutCommunityHero;
