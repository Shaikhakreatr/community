import React from "react";

const CareersHeading = () => {
  return (
    <div className="  flex flex-col items-center justify-center sm:border-b border-black mb-[6px] sm:mb-[30px] xl:mx-[135px] lg:mx-[148px] ">
      <div className="relative xl:mb-[150px] lg:mb-[80px] mb-[46px] xl:mt-0 lg:mt-0">
        <h1 className="page-heading text-[40px] sm:text-[80px] lg:text-[90px] xl:text-[110px]">
          Careers
        </h1>
        <div className="absolute rotate-[10deg] top-[60%] right-[-33%] xl:top-[60%] xl:right-[-30%] lg:top-[64px] lg:right-[-98px]">
          <img
            className="h-[66.47px] w-[66.47px] sm:h-[128.4px] sm:w-[128.4px] lg:h-[140.4px] lg:w-[140.4px] xl:h-[168.4px] xl:w-[168.4px]"
            src="/assets/images/careers_page/careers-img.svg"
            alt="careers image"
          />
        </div>
      </div>
      <h3 className="careers-subhead sm:mb-5 text-[18px] sm:text-[25px] lg:text-[30px] xl:text-[36px]">
        Current Openings
      </h3>
    </div>
  );
};

export default CareersHeading;
