import React from "react";

const LeftImageSection = () => {
  return (
    <div className="col-span-3 flex min-h-[100%] flex-col ">
      <div className="contact-heading lg:text-[90px] xl:text-[110px]">
        <h1>Get In Touch-</h1>
      </div>
      <div className="grid grid-cols-5 gap-12 bg-blue-600">
        <div className="content-neue col-span-2 bg-red-400">
          <p className=" contact-text xl:text-[18px]">
            For all your ‘I have a doubt!’, ‘Can I…’, ‘What if…’, or simply want
            to grab a coffee…?
          </p>
          <ul>
            <li>
              <a className="flex items-center xl:text-[18px]">
                <img
                  className="xl:h-[20px] xl:w-[20px]"
                  src="/assets/images/contact_page/Email-form.svg"
                  alt="Email"
                />
                marketing@thekreatr.com
              </a>
            </li>
            <li>
              <a className="ite flex xl:text-[18px]">
                <img
                  className="xl:h-[20px] xl:w-[20px]"
                  src="/assets/images/contact_page/Phone-form.svg"
                  alt="Phone"
                />
                +91 72040 04953
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-3 bg-slate-400">
          <img
            className="xl:h-[191px] xl:w-[418px]"
            src="/assets/images/contact_page/form-img.svg"
            alt="form img"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftImageSection;
