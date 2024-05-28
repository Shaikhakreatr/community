'use client'
import React from "react";



const CareersMainContent = ({careerData}) => {

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative lg:mb-[80px] lg:mt-0 xl:mb-[150px] xl:mt-0">
          <h1 className="page-heading text-[40px] sm:text-[80px] lg:text-[90px] xl:text-[110px]">
            Careers
          </h1>
          <div className="absolute right-[-33%] top-[60%] rotate-[10deg] lg:right-[-98px] lg:top-[64px] xl:right-[-30%] xl:top-[60%]">
            <img
              className="h-[66.47px] w-[66.47px] sm:h-[128.4px] sm:w-[128.4px] lg:h-[140.4px] lg:w-[140.4px] xl:h-[168.4px] xl:w-[168.4px]"
              src="/assets/images/careers_page/careers-img.svg"
              alt="careers image"
            />
          </div>
        </div>
      </div>
      <div className="mx-[25px] mb-[10px] mt-[62px] sm:mx-[100px] sm:mb-0 sm:mt-0">
        <div className="flex items-center">
          <h4 className="content-neue-medium mr-3 text-[18px] sm:mr-[18px] sm:text-[24px] lg:text-[28px] xl:text-[33px] capitalize">
            {careerData?.title}
          </h4>
          <div className="mr-[8px] h-[17px] w-[53px] rounded-[24px] border border-black text-center text-[10px] sm:mr-[15px] lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[95px] xl:text-[19px]">
            {careerData?.type}
          </div>
          <div className=" h-[17px] w-[53px] rounded-[24px] border border-black text-center text-[10px] lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[95px] xl:text-[19px]">
            {careerData?.location}
          </div>
        </div>
        <br />
        <div className="mt-[-10px] sm:mb-4">
          <p className="content-neue text-[12px] lg:text-[18px] xl:text-[24px]">
            {careerData?.description}
          </p>
          <br />
          <p className="content-neue-medium mt-[-10px] text-[14px] sm:mt-0 lg:text-[22px] xl:text-[28px]">
            Responsibilities
          </p>
          <br />
          <div>
            <ul className="content-neue ml-5 mt-[-15px] list-disc text-[12px] sm:ml-10 sm:mt-0 lg:text-[18px] xl:text-[24px]">
              {careerData?.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <br />
          <p className="content-neue-medium mt-[-10px] text-[14px] sm:mt-0 lg:text-[22px] xl:text-[28px]">
            Qualifications
          </p>
          <br />
          <div>
            <ul className="content-neue ml-5 mt-[-15px] list-disc text-[12px] sm:ml-10 sm:mt-0 lg:text-[18px] xl:text-[24px]">
              {careerData?.qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[2.5rem] flex justify-center sm:mt-[50px]">
          <a
            href="https://www.linkedin.com/company/the-kreatr/"
            className=" career-btn content-neue-medium h-[36px] w-[128px] cursor-pointer rounded-[24px] bg-black pt-[5px] text-center text-[15px] sm:h-[42px] sm:w-[280px] sm:pt-[5px] sm:text-[20px]"
          >
            Apply Now
          </a>
        </div>
        <div className="content-neue my-[16px] text-center text-[11px] sm:mb-[50px] sm:mt-[30px] lg:text-[20px] xl:text-[28px]">
          <p>
            Can’t find any suitable vacancy? Drop us a line{" "}
            <a className="text-blue-700" href="#">
              hr@thekreatr.com
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersMainContent;
