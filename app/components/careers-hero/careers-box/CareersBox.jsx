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
    <div className="flex flex-wrap items-center justify-center ">
      {jobVacancies.map((item, index) => (
        <a
          href="/careers/careers-description"
          key={index}
          className={`${styles.jobBox} m-[25px] rounded-[24px] border border-black lg:h-[230px] lg:w-[280px] lg:p-[36px] xl:h-[277px] xl:w-[345px] xl:p-[30px]`}
        >
          <div className="flex items-center justify-center">
            <h4 className="careers-box lg:text-[30px] lg:leading-[30px] xl:text-[40px] xl:leading-[40px]">
              {item.title}
            </h4>
            <img
              className="lg:h-[44px] lg:w-[44px] xl:h-[56px] xl:w-[56px]"
              src="/assets/images/careers_page/careers-arrow.svg"
              alt="arrow img"
            />
          </div>
          <div className="lg:mt-[38px] xl:mt-[50px]">
            <div
              className={`${styles.subBox} rounded-[24px] border border-black text-center lg:h-[28px] lg:w-[96px] xl:h-[34px] xl:w-[106px] xl:text-[20px]`}
            >
              {item.type}
            </div>
            <div
              className={`${styles.subBox} mt-[10px] rounded-[24px] border border-black text-center lg:h-[28px] lg:w-[96px] xl:h-[34px] xl:w-[106px] xl:text-[20px]`}
            >
              {item.location}
            </div>
          </div>
        </a>
      ))}
      <div className="content-neue  mb-[50px] mt-[30px] lg:text-[22px] xl:text-[28px]">
        <p>
          Can’t find any suitable vacancy? Drop us a line{" "}
          <a className="text-blue-700" href="#">
            hr@thekreatr.com
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default CareersBox;
