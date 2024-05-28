
import React from "react";
import Testimonials from "../testimonials/Testimonials";

const PastHero = ({pastData}) => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="lg:mt-[50px] mt-[25px]">
              <h1 className="page-subhead text-[22px] leading-[24px] lg:leading-[55px] sm:text-[44px] lg:text-[54px] xl:text-[64px]">
                {pastData.heading}
              </h1>
              <div className="sm:mb-[20px] sm:mt-[20px] my-[10px] flex">
                <div className="content-neue pb-[16px] mr-3 rounded-[24px] border border-black text-center text-[10px] h-[14px] w-[46px] lg:h-[28px] lg:w-[80px] lg:text-[18px] xl:h-[34px] xl:w-[112px] xl:text-[24px] ">
                  {pastData.sessionType}
                </div>
                <div className="content-neue pb-[16px] mr-3 rounded-[24px] border border-black text-center text-[10px] h-[14px] w-[36px] lg:h-[28px] lg:w-[60px] lg:text-[18px] xl:h-[34px] xl:w-[87px] xl:text-[24px] ">
                  {pastData.duration}
                </div>
                <div className="content-neue pb-[16px] mr-3 rounded-[24px] border border-black text-center text-[10px] h-[14px] w-[110px] lg:h-[28px] lg:w-[200px] lg:text-[18px] xl:h-[34px] xl:w-[264px] xl:text-[24px]">
                  Speaker: {pastData.speakerName}
                </div>
              </div>
              <img
                className="h-[148px] w-[320px] lg:h-[350px] lg:w-[980px] xl:h-[398px] xl:w-[1064px]"
                src={pastData.coverImg}
                alt="main-img"
              />
              <div className="content-neue-medium sm:mt-[18px] mt-[10px] flex items-center justify-center text-[13px] sm:text-[20px] lg:text-[22px] xl:text-[30px]">
                <div className="sm:mr-3 mr-1 border-r border-black sm:pr-[40px] pr-[10px]">
                  {pastData.date}
                </div>
                <div>{pastData.location}</div>
              </div>
            </div>
            <div className="xl:mx-[166px] lg:mx-[126px] sm:mt-[60px] mt-[25px] mx-[20px]">
              <h3 className="content-neue-medium text-[16px] sm:text-[24px] lg:text-[26px] xl:text-[34px]">
                About
              </h3>
              <br />
              <div className="content-neue text-[14px] leading-[20px] sm:text-[18px] lg:text-[24px] lg:leading-[28px] xl:text-[28px] xl:leading-[33px]">
                <p>
                  {pastData.description}
                </p>
              </div>
            </div>
            <div className="sm:mt-[50px] mt-[20px]">
              <div className="flex items-center justify-center">
                <h1 className="page-subhead mr-[20px] text-[17px] sm:text-[24px] lg:text-[30px] xl:text-[36px]">
                  Behold, Snapshots!
                </h1>
              </div>
              <div className="mt-[20px] flex items-center justify-center sm:mt-[40px]">
              {pastData.images.map((item,index)=>(
                <img
                key={index}
                className="mr-1 h-[106px] w-[106px] sm:mr-4 lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]"
                src={item}
                alt="events img"
              />
              ))}
            </div>
            </div>
            <div className="w-full sm:my-[40px] my-[25px]">
              <h1 className="page-subhead text-center text-[17px] sm:text-[24px] lg:text-[30px] xl:text-[36px]">
                {`Happy Folks' Words!`}
              </h1>
              {/* <Testimonials /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PastHero;
