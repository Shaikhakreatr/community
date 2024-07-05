import React from "react";
import Testimonials from "../testimonials/Testimonials";

const PastHero = ({ pastData }) => {
  const isDataAvailable =
    pastData &&
    pastData.heading &&
    pastData.sessionType &&
    pastData.duration &&
    pastData.speakerName &&
    pastData.date &&
    pastData.coverImg &&
    pastData.location &&
    pastData.description &&
    Array.isArray(pastData.images);

  if (!isDataAvailable) {
    return <div>No Data Available</div>;
  }

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-[44px] sm:mt-[60px] lg:mt-[74px] xl:mt-[120px]">
              <h1 className="page-subhead text-[#2A2A2A] text-[22px] leading-[24px] sm:text-[48px] lg:text-[54px] lg:leading-[55px] xl:text-[64px]">
                {pastData.heading}
              </h1>
              <div className="mt-[24px] flex sm:mt-[28px] lg:mt-[36px] xl:mt-[44px]">
                <div className="content-neue mr-3 flex h-[14px] w-[46px] items-center justify-center rounded-[24px] border text-[#2A2A2A] border-[#2A2A2A] text-center text-[10px] sm:h-[24px] sm:w-[66px] sm:text-[15px] lg:h-[28px] lg:w-[80px] lg:text-[18px] xl:h-[34px] xl:w-[112px] xl:text-[24px] ">
                  {pastData.sessionType}
                </div>
                <div className="content-neue mr-3 flex h-[14px] w-[36px] items-center justify-center rounded-[24px] border text-[#2A2A2A] border-[#2A2A2A] text-center text-[10px] sm:h-[24px] sm:w-[50px] sm:text-[15px] lg:h-[28px] lg:w-[60px] lg:text-[18px] xl:h-[34px] xl:w-[87px] xl:text-[24px] ">
                  {pastData.duration}
                </div>
                <div className="content-neue mr-3 flex h-[14px] w-[110px] items-center justify-center rounded-[24px] border text-[#2A2A2A] border-[#2A2A2A] text-center text-[10px] sm:h-[24px] sm:w-[180px] sm:text-[15px] lg:h-[28px] lg:w-[200px] lg:text-[18px] xl:h-[34px] xl:w-[264px] xl:text-[24px]">
                  Speaker: {pastData.speakerName}
                </div>
              </div>
              <div className=" mt-[44px] flex items-center justify-center sm:mt-[48px] lg:mt-[58px] xl:mt-[72px] ">
                <img
                  className="h-auto max-w-[100%] object-cover object-center lg:w-[990px] xl:w-[1125px]"
                  src={pastData.coverImg}
                  alt="main-img"
                />
              </div>
              <div className="content-neue-medium mt-[10px] flex items-center justify-center gap-[4px] text-[12px] sm:mt-[18px] text-[#2A2A2A] sm:text-[16px] lg:mt-[24px] lg:gap-[18px] lg:text-[18px] xl:text-[22px]">
                <div>{pastData.date}</div>
                <div className="h-[20px] border-r border-[#2A2A2A] sm:h-[35px] "></div>
                <div>{pastData.location}</div>
              </div>
            </div>
            <div className="mx-[20px] mt-[25px] lg:mx-[120px] lg:mt-[60px] xl:mx-[145px] xl:mt-[72px]">
              <h3 className="content-neue-medium mb-[14px]  text-center text-[16px] sm:mb-[24px] sm:text-start text-[#2A2A2A] sm:text-[24px] lg:text-[30px] xl:text-[34px]">
                About
              </h3>

              <div className="content-neue whitespace-pre-line text-center text-[16px] leading-[20px] sm:text-start text-[#2A2A2A] sm:text-[16px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
                <p>{pastData.description}</p>
              </div>
            </div>
            <div className="mt-[20px] sm:mt-[50px] xl:mt-[72px] ">
              <div className="flex items-center justify-center">
                <h1 className="content-neue-medium text-[#2A2A2A] mr-[20px]  text-[17px] sm:text-[20px] lg:text-[30px] xl:text-[34px] ">
                  Behold, Snapshots!
                </h1>
              </div>
              <div className="mt-[20px] flex items-center justify-center gap-1 sm:mt-[40px] sm:gap-4 lg:gap-[30px]">
                {pastData.images.map((item, index) => (
                  <img
                    key={index}
                    className=" h-[106px] w-[106px] object-cover object-center  sm:h-[250px] sm:w-[250px] lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]"
                    src={item}
                    alt="events img"
                  />
                ))}
              </div>
            </div>
            <div className="my-[25px] w-full sm:my-[50px] xl:mt-[72px] ">
              <h1 className="content-neue-medium text-[#2A2A2A] text-center text-[17px] sm:text-[24px] lg:text-[30px] xl:text-[36px]">
                {`Happy Folks' Words!`}
              </h1>
              <div className="mt-[30px] lg:mx-[50px] text-[#2A2A2A] content-neue">
                <Testimonials />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PastHero;
