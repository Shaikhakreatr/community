import React from "react";

const LeftImageSection = () => {
  return (
    <div className=" sm:ml-0 relative col-span-3  items-center flex min-h-[100%] xl:mr-0 lg:mr-[85px] lg:mt-[-32px]">
      <div className="absolute xl:left-[6%] xl:top-[9%] top-[28%] left-[14%] lg:top-[16%] lg:left-[5%] sm:left-[-43px] sm:top-[90px] page-heading lg:text-[90px] sm:text-[70px] text-[50px] xl:text-[110px]">
        <h1>Get In Touch-</h1>
      </div>
      <div className="sm:grid sm:grid-cols-5 xl:gap-12 lg:gap-10 lg:mt-[60px]  ">
        <div className="sm:block hidden content-neue col-span-2 xl:ml-[20%] xl:mt-[20%] lg:mt-[40px] lg:ml-[38px] sm:mt-[60px] sm:ml-[-45px]">
          <p className=" contact-text sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-5">
            For all your ‘I have a doubt!’,<br /> ‘Can I…’, ‘What if…’, or simply<br /> want
            to grab a coffee…?
          </p>
          <ul>
            <li>
              <a className="flex items-center  xl:text-[18px] lg:text-[16px] sm:mt-[10px] sm:text-[13px]">
                <img
                  className="xl:h-[20px] mr-1 xl:w-[20px] lg:h-[20px] lg:w-[20px] sm:h-[15px] sm:w-[15px]"
                  src="/assets/images/contact_page/Email-form.svg"
                  alt="Email"
                />
                marketing@thekreatr.com
              </a>
            </li>
            <li>
              <a className="items-center  flex xl:text-[18px] lg:text-[16px] lg:mt-0 sm:mt-[0px] sm:text-[13px]">
                <img
                  className="xl:h-[20px] mr-1 xl:w-[20px] lg:h-[20px] lg:w-[20px] sm:h-[15px] sm:w-[15px]"
                  src="/assets/images/contact_page/Phone-form.svg"
                  alt="Phone"
                />
                +91 72040 04953
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-3 ">
          <img 
            className="xl:h-[191px] xl:w-[418px] lg:h-[171px] lg:w-[400px] sm:h-[171px] sm:w-[400px] w-[19.625rem] h-[7.125rem]"
            src="/assets/images/contact_page/form-img.svg"
            alt="form img"
          />
        </div>
        <div className="sm:hidden content-neue flex flex-col justify-center items-center mt-[50px] ">
          <p className=" contact-text  text-[17px] text-center leading-5">
            For all your ‘I have a doubt!’,<br /> ‘Can I…’, ‘What if…’, or simply want
            to<br /> grab a coffee…?
          </p>
          <ul>
            <li>
              <a className="flex items-center gap-1  mt-[15px] text-[14px]">
                <img
                  className="xl:h-[15px] mr-1 xl:w-[15px]"
                  src="/assets/images/contact_page/Email-form.svg"
                  alt="Email"
                />
                marketing@thekreatr.com
              </a>
            </li>
            <li>
              <a className="items-center justify-center  mt-[5px] flex text-[14px]">
                <img
                  className="xl:h-[15px] mr-1 xl:w-[15px]"
                  src="/assets/images/contact_page/Phone-form.svg"
                  alt="Phone"
                />
                +91 72040 04953
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftImageSection;
