import React from "react";
import Link from "next/link";

const LeftImageSection = () => {
  return (
    <div className="sm:ml-0 relative col-span-3  items-center flex min-h-[100%] xl:mr-0 lg:mr-[85px] lg:mt-[-32px]">
      <div className="absolute sm:block hidden xl:left-[3.4%] xl:top-[10%]  lg:top-[12%] lg:left-[5.5%] sm:left-[-46px] text-[#2A2A2A] sm:top-[58px] page-heading lg:text-[94px] sm:text-[74px] text-[50px] xl:text-[110px]">
        <h1>Get In Touch-</h1>
      </div>
      <div className="absolute text-[#2A2A2A] sm:hidden block  top-[32%] left-[8%]  page-heading  text-[62px] ">
        <h1>Get In Touch</h1>
      </div>
      <div className="sm:grid sm:grid-cols-5 xl:gap-12 lg:gap-10 lg:mt-[60px]  ">
        <div className="sm:block hidden content-neue col-span-2 xl:ml-[9%] xl:mt-[20%] lg:mt-[40px] lg:ml-[34px] sm:mt-[60px] sm:ml-[-45px]">
          <p className=" contact-text text-[16px] sm:text-[14px] lg:text-[18px] lg:leading-[22px] xl:leading-[26px] xl:text-[22px] leading-5">
            For all your ‘I have a doubt!’, ‘Can I…’, ‘What if…’, or simply want
            to grab a coffee…?
          </p>
          <ul>
            <li>
              <Link href="mailto:marketing@thekreatr.com" className="flex items-center  xl:text-[18px] lg:text-[16px] sm:mt-[10px] xl:mt-[20px] lg:mt-[24px] sm:text-[13px]">
                <img
                  className="xl:h-[20px] mr-1 xl:w-[20px] lg:h-[20px] lg:w-[20px] sm:h-[15px] sm:w-[15px]"
                  src="/assets/images/contact_page/Email-form.svg"
                  alt="Email"
                />
                marketing@thekreatr.com
              </Link>
            </li>
            <li>
              <Link href="tel:+91 72040 04953" className="items-center  flex xl:text-[18px] lg:text-[16px] lg:mt-0 sm:mt-[0px] sm:text-[13px]">
                <img
                  className="xl:h-[20px] mr-1 xl:w-[20px] lg:h-[20px] lg:w-[20px] sm:h-[15px] sm:w-[15px]"
                  src="/assets/images/contact_page/Phone-form.svg"
                  alt="Phone"
                />
                +91 72040 04953
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-3 ">
          <img 
            className="rounded-xl xl:h-[191px] xl:w-[418px] object-cover object-center lg:h-[171px] lg:w-[400px] sm:h-[171px] sm:w-[400px] w-[19.625rem] h-[137px]"
            src="/assets/images/contact_page/contact-img.jpg"
            alt="form img"
          />
        </div>
        <div className="sm:hidden content-neue flex flex-col justify-center items-center mt-[50px] ">
          <p className=" contact-text  text-[16px] text-center leading-5">
            For all your ‘I have a doubt!’,<br /> ‘Can I…’, ‘What if…’, or simply want
            to<br /> grab a coffee…?
          </p>
          <ul>
            <li>
              <Link href="mailto:marketing@thekreatr.com" className="flex items-center gap-1  mt-[15px] text-[14px]">
                <img
                  className="xl:h-[15px] mr-1 xl:w-[15px]"
                  src="/assets/images/contact_page/Email-form.svg"
                  alt="Email"
                />
                marketing@thekreatr.com
              </Link>
            </li>
            <li>
              <Link href="tel:+91 72040 04953" className="items-center justify-center  mt-[5px] flex text-[14px]">
                <img
                  className="xl:h-[15px] mr-1 xl:w-[15px]"
                  src="/assets/images/contact_page/Phone-form.svg"
                  alt="Phone"
                />
                +91 72040 04953
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftImageSection;
