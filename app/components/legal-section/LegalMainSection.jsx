"use client";

import React, { useState } from "react";
import { legalBarData } from "@/constants/constants";
import LegalPage1 from "./legal-page1/LegalPage1";
import LegalPage2 from "./legal-page2/LegalPage2";
import LegalPage3 from "./legal-page3/LegalPage3";
import LegalPage4 from "./legal-page4/LegalPage4";
import LegalPage5 from "./legal-page5/LegalPage5";

const LegalMainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="container mx-auto">
      <div className=" justify-center items-center xl:mx-[50px] mt-[38px] sm:mt-[60px] lg:mt-[50px] xl:mt-[100px] flex flex-col">
      <h1 className="heading text-70 pt-6">legal</h1>
      <div className=" justify-center  flex items-center w-full">
      <div className="flex gap-3 pt-4 w-full lg:justify-center overflow-x-auto scrollbar-hide ">

        {legalBarData.map((item, index) => (
          <div
            className={
              currentIndex === index
                ? "bg-selected text-selectedText border-selectedBorder lg:p-[15px] text-[.875rem] p-[8px] text-nowrap flex justify-center items-center cursor-pointer  lg:h-[40px] lg:w-auto rounded-[5.625rem] border"
                : " text-nonSelectedText border-selectedBorder cursor-pointer lg:p-[15px]  text-[.875rem] p-[8px] text-nowrap flex justify-center lg:h-[40px]  lg:w-auto items-center rounded-[5.625rem] border"
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {item}
          </div>
        ))}

      </div>
      </div>
      <div className="text-nonSelectedText content-neue sm:mx-[50px]  pt-10 pb-10  font-extralight">
        {
            legalBarData[currentIndex]==='End User License Agreement'? <LegalPage1/>:
            legalBarData[currentIndex]==='Privacy Policy'?<LegalPage2/>:
            legalBarData[currentIndex]==='Refund and Cancellation'?<LegalPage3/>:
            legalBarData[currentIndex]==='Terms and Conditions'?<LegalPage4/>:<LegalPage5/>
        }
      </div>
    </div>
    </div>
  );
};

export default LegalMainSection;
