
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CareersEmpty = () => {
  return (
    <div>
      <div>
        <h1 className="page-heading text-[#2A2A2A] text-center text-[40px] sm:text-[80px] lg:text-[90px] xl:text-[110px]">
          Careers
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
        className="xl:h-[95px] xl:w-[95px] h-[54px] w-[54px]"
          src={"/assets/images/careers_page/smile-careers.svg"}
          width={80}
          height={80}
          alt="smile emoji"
        />
        <div className="content-neue-medium mt-[30px] text-center oops-text xl:leading-[42px] lg:leading-[36px] leading-[22px] text-[20px] lg:text-[30px] xl:text-[40px]">
          <h3>Oops!</h3>
          <h3>It looks like our tables are full!</h3>
        </div>
        <div>
          <p className="content-neue text-center mt-[10px] italic xl:text-[24px] text-[14px] lg:text-[20px]">
            Thank you for your interest. Stay tuned for future opportunities!
          </p>
        </div>
        <div className="my-[40px]">
          <p className="content-neue xl:text-[28px] lg:text-[22px] text-[14px]">
            Drop us a line at <Link className="careers-link" href="mailto:hr@thekreatr.com">hr@thekreatr.com</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersEmpty;
