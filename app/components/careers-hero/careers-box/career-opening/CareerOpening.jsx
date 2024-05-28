import React from "react";
import styles from "./CareersOpening.module.css";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import careersSlice from "@/app/redux/careersSlice";

const CareerOpening = () => {

  const careersData = useSelector((state) => state.careers.careersData);
 
  return (
    <div>
      <div className="mb-[6px] flex flex-col items-center justify-center sm:mb-[30px]">
        <div className="relative mb-[46px] lg:mb-[80px] lg:mt-0 xl:mb-[150px] xl:mt-0">
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
      <h3 className="careers-subhead border-black text-center text-[18px] sm:mb-5 sm:border-b sm:text-[25px] lg:mx-[148px] lg:text-[30px] xl:mx-[135px] xl:text-[36px]">
        Current Openings
      </h3>
      <div className="flex flex-wrap items-center justify-center">
        {careersData.map((item, index) => (
          <Link
            href={`/careers/${item.id}`}
            key={index}
            className={`${styles.jobBox} m-[10px] h-[98px] w-[320px] cursor-pointer rounded-[10px] border border-black p-[10px] sm:m-[25px] sm:rounded-[15px] lg:h-[230px] lg:w-[280px] lg:p-[36px] xl:h-[277px] xl:w-[345px] xl:p-[30px]`}
          >
            <div className="items-center justify-between sm:flex">
              <h4 className="careers-box text-[18px] lg:text-[30px] lg:leading-[30px] xl:text-[40px] xl:leading-[40px]">
                {item.title}
              </h4>
              <img
                className="hidden h-[18.61px] w-[18.61px] sm:block lg:h-[44px] lg:w-[44px] xl:h-[56px] xl:w-[56px]"
                src="/assets/images/careers_page/arrow.svg"
                alt="arrow img"
              />
            </div>
            <div className="block sm:hidden">
              <p className="content-neue text-[10px]">{item.description}</p>
            </div>
            <div className="mt-3 flex items-center justify-between sm:block">
              <div className="flex items-center sm:block lg:mt-[38px] xl:mt-[50px]">
                <div
                  className={`${styles.subBox} mr-2 h-[19px] w-[57px] rounded-[24px] border border-black text-center text-[10px] sm:mr-0 lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[106px] xl:text-[20px]`}
                >
                  {item.type}
                </div>
                <div
                  className={`${styles.subBox} h-[19px] w-[57px] rounded-[24px] border border-black text-center text-[10px] sm:mt-[10px] lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[106px] xl:text-[20px]`}
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
          </Link>
        ))}
      </div>
      <div className="content-neue my-[14px] text-[11px] sm:mb-[50px] sm:mt-[30px] lg:text-[20px] xl:text-[28px]">
        <p className="text-center">
          Can’t find any suitable vacancy? Drop us a line{" "}
          <a className="text-blue-700" href="#">
            hr@thekreatr.com
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default CareerOpening;
