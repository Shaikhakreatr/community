import React from "react";

const CareersBox = () => {
  return (
    <div>
      <div className="w-[345px] h-[277px] rounded-[24px] border border-black">
        <div className="flex items-center justify-center">
          <h4 className="text-[40px] careers-box">Graphic Designer</h4>
          <img
            className="xl:h-[56px] xl:w-[56px]"
            src="/assets/images/careers_page/careers-arrow.svg"
            alt="arrow img"
          />
        </div>
        <div>
          <div className="w-[106px] h-[34px] xl:text-[20px]  rounded-[24px] border border-black">Full-time</div>
          <div className="w-[106px] h-[34px] xl:text-[20px]  rounded-[24px] border border-black">In-Office</div>
        </div>
      </div>
    </div>
  );
};

export default CareersBox;
