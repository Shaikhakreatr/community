import React from "react";
import styles from "./CareersBox.module.css";

const CareersBox = () => {
  const jobVacancies = [
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center ">
      {jobVacancies.map((item, index) => (
        <a
          href="/careers-description"
          key={index}
          className={`${styles.jobBox} cursor-pointer m-[10px] h-[98px] w-[320px] rounded-[10px] border border-black p-[10px] sm:m-[25px] sm:rounded-[15px] lg:h-[230px] lg:w-[280px] lg:p-[36px] xl:h-[277px] xl:w-[345px] xl:p-[30px]`}
        >
          <div className="items-center justify-center sm:flex">
            <h4 className="careers-box text-[18px] lg:text-[30px] lg:leading-[30px] xl:text-[40px] xl:leading-[40px]">
              {item.title}
            </h4>
            <img
              className="hidden h-[18.61px] w-[18.61px] sm:block lg:h-[44px] lg:w-[44px] xl:h-[56px] xl:w-[56px]"
              src="/assets/images/careers_page/arrow.svg"
              alt="arrow img"
            />
          </div>
          <div className="sm:hidden block ">
            <p className="text-[10px] content-neue">{item.description}</p>
          </div>
          <div className="sm:block flex items-center justify-between mt-3">
            <div className=" flex items-center sm:block  lg:mt-[38px] xl:mt-[50px]">
              <div
                className={`${styles.subBox} sm:mr-0 mr-2 h-[19px] w-[57px] rounded-[24px] border border-black text-center text-[10px] lg:h-[28px] lg:w-[96px] xl:h-[34px] xl:w-[106px] lg:text-[16px] xl:text-[20px]`}
              >
                {item.type}
              </div>
              <div
                className={`${styles.subBox} h-[19px] w-[57px] rounded-[24px] border border-black text-center text-[10px] sm:mt-[10px] lg:h-[28px] lg:w-[96px] xl:h-[34px] xl:w-[106px] lg:text-[16px] xl:text-[20px]`}
              >
                {item.location}
              </div>
            </div>
            <div>
              <img
                className="block h-[18.61px] w-[18.61px] sm:hidden lg:h-[44px] lg:w-[44px] xl:h-[56px] xl:w-[56px]"
                src="/assets/images/careers_page/arrow.svg"
                alt="arrow img"
              />
            </div>
          </div>
        </a>
      ))}
      <div className="  content-neue my-[14px] sm:mb-[50px] sm:mt-[30px] text-[11px] lg:text-[20px] xl:text-[28px]">
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
