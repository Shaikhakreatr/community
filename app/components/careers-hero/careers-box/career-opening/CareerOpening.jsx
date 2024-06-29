import React from "react";
import styles from "./CareersOpening.module.css";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import careersSlice from "@/app/redux/careersSlice";

const CareerOpening = () => {

  const careersData = useSelector((state) => state.careers.careersData);
 
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-[6px] flex flex-col items-center justify-center  sm:mb-0">
        <div className="relative mb-[46px] lg:mb-[54px] xl:mb-[64px] sm:mt-[60px] mt-[44px] lg:mt-[50px]  xl:mt-[100px]">
          <h1 className="page-heading text-[40px] sm:text-[80px] lg:text-[90px] xl:text-[110px]">
            Careers
          </h1>
          <div className="absolute right-[-33%] top-[60%] sm:top-[30px] sm:right-[-66px] rotate-[10deg] lg:right-[-98px] lg:top-[24px] xl:right-[-35%] xl:top-[22%]">
            <img
              className="h-[66.47px] w-[66.47px] sm:h-[76px] sm:w-[76px] lg:h-[110px] lg:w-[110px] xl:h-[120px] xl:w-[120px]"
              src="/assets/images/careers_page/careers-img.svg"
              alt="careers image"
            />
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center sm:w-[100%] lg:w-[90%] ">
      <div className="flex flex-wrap items-center justify-center lg:justify-start lg:ml-[60px] xl:ml-[50px]">
        {careersData.map((item, index) => (
          <Link
            href={`/careers/${item.id}`}
            key={index}
            className={`${styles.jobBox} flex flex-col justify-center m-[10px] h-auto w-[320px] sm:p-[30px] sm:h-[180px] sm:w-[250px] cursor-pointer rounded-[10px] border border-black p-[10px] sm:m-[25px] sm:rounded-[15px] lg:h-[230px] lg:w-[280px] lg:p-[36px] xl:h-[277px] xl:w-[345px] xl:p-[30px]`}
          >
            <div className="items-center justify-between sm:flex">
              <h4 className="careers-box text-[18px] sm:text-[26px] sm:leading-[25px] lg:text-[30px] lg:leading-[30px] xl:text-[40px] xl:leading-[40px]">
                {item.title}
              </h4>
            </div>
            <div className="block sm:hidden">
              <p className="content-neue text-[10px]">{item.description}</p>
            </div>
            <div className="mt-3 flex  items-center justify-between sm:block">
              <div className="flex items-center sm:mt-[24px] sm:block lg:mt-[38px] xl:mt-[50px]">
                <div
                  className={`${styles.subBox} content-neue mr-2 h-[19px] w-[57px] sm:h-[22px] sm:w-[70px] rounded-[24px] border border-black text-center text-[10px] sm:text-[14px] sm:mr-0 lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[106px] xl:text-[20px]`}
                >
                  {item.type}
                </div>
                <div
                  className={`${styles.subBox} content-neue h-[19px] w-[57px] sm:h-[22px] sm:w-[70px] rounded-[24px] border border-black text-center text-[10px] sm:text-[14px] sm:mt-[6px] lg:mt-[10px] lg:h-[28px] lg:w-[96px] lg:text-[16px] xl:h-[34px] xl:w-[106px] xl:text-[20px]`}
                >
                  {item.location}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
      <div className="content-neue my-[14px] sm:text-[16px] text-[11px] sm:mb-[30px] lg:mb-[64px] xl:mb-[72px] sm:mt-[30px] lg:text-[20px] xl:text-[28px]">
        <p className="text-center">
          Can’t find any suitable vacancy? Drop us a line{" "}
          <Link className="text-blue-700" href="mailto:hr@thekreatr.com">
            hr@thekreatr.com
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default CareerOpening;
