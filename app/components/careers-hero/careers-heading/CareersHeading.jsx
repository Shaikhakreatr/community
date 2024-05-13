import React from "react";

const CareersHeading = () => {
  return (
    <div className="  flex flex-col items-center justify-center">
      <div className="relative mb-[150px] mt-[40px]">
        <h1 className="page-heading text-[40px] sm:text-[80px] lg:text-[90px] xl:text-[110px]">
          Careers
        </h1>
        <div className="absolute rotate-[10deg] xl:top-[60%] xl:right-[-30%]">
          <img
            className="h-[66.47px] w-[66.47px] sm:h-[128.4px] sm:w-[128.4px] lg:h-[158.4px] lg:w-[158.4px] xl:h-[168.4px] xl:w-[168.4px]"
            src="/assets/images/careers_page/careers-img.svg"
            alt="careers image"
          />
        </div>
      </div>
      <h3 className="careers-subhead text-[18px] sm:text-[25px] lg:text-[30px] xl:text-[36px]">
        Current Openings
      </h3>
    </div>
  );
};

export default CareersHeading;
