import React from "react";
import styles from "./CareersBox.module.css";

const CareersBox = () => {
  const jobVacancies = [
    { title: "Graphic Designer", type: "Full-time", location: "In-Office" },
    { title: "Graphic Designer", type: "Full-time", location: "In-Office" },
    { title: "Graphic Designer", type: "Full-time", location: "In-Office" },
    { title: "Graphic Designer", type: "Full-time", location: "In-Office" },
    { title: "Graphic Designer", type: "Full-time", location: "In-Office" },
    { title: "Graphic Designer", type: "Full-time", location: "In-Office" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center ">
      {jobVacancies.map((item, index) => (
        <a href="/careers/careers-description" key={index} className={`${styles.jobBox} xl:h-[277px] xl:w-[345px] lg:h-[230px] lg:w-[280px] m-[25px] rounded-[24px] border border-black xl:p-[30px] lg:p-[36px]`}>
          <div className="flex items-center justify-center">
            <h4 className="careers-box xl:text-[40px] lg:text-[30px] lg:leading-[30px] xl:leading-[40px]">
              {item.title}
            </h4>
            <img
              className="xl:h-[56px] xl:w-[56px] lg:h-[44px] lg:w-[44px]"
              src="/assets/images/careers_page/careers-arrow.svg"
              alt="arrow img"
            />
          </div>
          <div className="xl:mt-[50px] lg:mt-[38px]">
            <div className={`${styles.subBox} xl:h-[34px] xl:w-[106px] lg:h-[28px] lg:w-[96px] rounded-[24px] border border-black text-center xl:text-[20px]`}>
              {item.type}
            </div>
            <div className={`${styles.subBox} mt-[10px] xl:h-[34px] xl:w-[106px] lg:h-[28px] lg:w-[96px] rounded-[24px] border border-black text-center xl:text-[20px]`}>
              {item.location}
            </div>
          </div>
        </a>
      ))}
      <div className="content-neue xl:text-[28px] lg:text-[22px] mt-[30px] mb-[50px]">
        <p>Can’t find any suitable vacancy? Drop us a line <a className="text-blue-700" href="#">hr@thekreatr.com</a> </p>
      </div>
    </div>
  );
};

export default CareersBox;
