"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CareersMainContent = ({ careerData }) => {
  // Check if careerData is defined and has all required fields
  const isDataAvailable =
    careerData &&
    careerData.title &&
    careerData.type &&
    careerData.location &&
    careerData.description &&
    Array.isArray(careerData.responsibilities) &&
    Array.isArray(careerData.qualifications);

  if (!isDataAvailable) {
    return <div>No Data Available</div>;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-[46px] mt-[44px] sm:mt-[60px] lg:mb-[54px] lg:mt-[50px] xl:mb-[64px]  xl:mt-[100px]">
          <h1 className="page-heading text-[40px] sm:text-[80px] lg:text-[90px] xl:text-[110px]">
            Careers
          </h1>
          <div className="absolute right-[-33%] top-[60%] rotate-[10deg] sm:right-[-66px] sm:top-[30px] lg:right-[-98px] lg:top-[24px] xl:right-[-35%] xl:top-[22%]">
            <Image
              className="h-[66.47px] w-[66.47px] sm:h-[76px] sm:w-[76px] lg:h-[110px] lg:w-[110px] xl:h-[120px] xl:w-[120px]"
              src="/assets/images/careers_page/careers-img.svg"
              alt="careers image"
              height={0}
              width={0}
            />
          </div>
        </div>
      </div>
      <div className="mx-[25px] mb-[10px] mt-[62px] sm:mx-[80px] sm:mb-[50px] sm:mt-[80px] lg:mx-[100px] lg:mb-0 lg:mt-0">
        <div className="flex items-center sm:mb-[20px] lg:mb-[24px] xl:mb-[24px]">
          <h4 className="content-neue-medium mr-3 mt-[-2px] text-[18px] capitalize sm:mr-[18px] sm:mt-[-4px] sm:text-[24px] lg:mt-[-6px] lg:text-[28px] xl:text-[33px]">
            {careerData.title}
          </h4>
          <div className="mr-[8px] h-[17px] w-[53px] rounded-[24px] border border-black text-center text-[10px] sm:mr-[15px] sm:h-[22px] sm:w-[70px] sm:text-[14px] lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[95px] xl:text-[19px]">
            {careerData.type}
          </div>
          <div className=" h-[17px] w-[53px] rounded-[24px] border border-black text-center text-[10px] sm:h-[22px] sm:w-[70px] sm:text-[14px] lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[95px] xl:text-[19px]">
            {careerData.location}
          </div>
        </div>
        <div className="mt-[10px] sm:mb-4  sm:mt-0">
          <p className="content-neue text-[12px] sm:mb-[20px] sm:text-[16px] lg:mb-[24px] lg:text-[18px] xl:mb-[24px] xl:text-[24px]">
            {careerData.description}
          </p>

          <p className="content-neue-medium mt-[10px] text-[14px] sm:mb-[20px] sm:mt-0 sm:text-[18px] lg:mb-[24px] lg:text-[22px] xl:mb-[24px] xl:text-[28px]">
            Responsibilities
          </p>

          <div>
            <ul className="content-neue ml-5 mt-[8px] list-disc text-[12px] sm:mb-[20px] sm:ml-5 sm:mt-0 sm:text-[16px] lg:mb-[24px] lg:ml-10 lg:text-[18px] xl:mb-[24px] xl:text-[24px]">
              {careerData.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="content-neue-medium mt-[10px] text-[14px] sm:mb-[20px] sm:mt-0 sm:text-[18px] lg:mb-[24px] lg:text-[22px] xl:mb-[24px] xl:text-[28px]">
            Qualifications
          </p>

          <div>
            <ul className="content-neue ml-5 mt-[8px] list-disc text-[12px] sm:ml-5 sm:mt-0 sm:text-[16px] lg:ml-10 lg:text-[18px] xl:text-[24px]">
              {careerData.qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[24px] flex justify-center sm:mt-[50px] lg:mb-[24px] lg:mt-[24px]">
          <Link
            href="https://www.linkedin.com/company/the-kreatr/"
            target="_blank"
            rel="noreferrer"
            className=" career-btn content-neue-medium flex h-[36px] w-[128px] cursor-pointer items-center justify-center rounded-[24px] bg-black text-center text-[15px] hover:border hover:border-black  hover:bg-transparent hover:text-black sm:h-[38px] sm:w-[220px] sm:text-[18px] lg:h-[42px] lg:w-[280px]  lg:text-[20px]"
          >
            Apply Now
          </Link>
        </div>
        <div className="content-neue my-[16px] text-center text-[11px] sm:mb-[50px] sm:mt-[30px] sm:text-[16px] lg:text-[20px] xl:text-[28px]">
          <p>
            Can’t find any suitable vacancy? Drop us a line{" "}
            <Link className="text-blue-700" href="mailto:hr@thekreatr.com">
              hr@thekreatr.com
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersMainContent;
