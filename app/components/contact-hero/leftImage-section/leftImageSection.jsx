import React from "react";

const LeftImageSection = () => {
  return (
    <main className=" lg:ml-4 flex flex-col min-h-[100%] ">
      <div className="contact-heading xl:text-[110px] lg:text-[90px]">
        <h1>Get In Touch-</h1>
      </div>
      <div className="flex justify-center  items-center">
        <div className="content-neue xl:mt-10">
          <p className=" contact-text xl:text-[18px] xl:w-[55%]" >
            For all your ‘I have a doubt!’, ‘Can I…’, ‘What if…’, or simply want
            to grab a coffee…?
          </p>
          <ul>
            <li><a className="flex items-center xl:text-[18px]"><img className="xl:h-[20px] xl:w-[20px]" src="/assets/images/contact_page/Email-form.svg" alt="Email" />marketing@thekreatr.com</a></li>
            <li><a className="flex ite xl:text-[18px]"><img className="xl:h-[20px] xl:w-[20px]" src="/assets/images/contact_page/Phone-form.svg" alt="Phone" />+91 72040 04953</a></li>
          </ul>
        </div>
        <div>
          <img className="xl:h-[191px] xl:w-[418px]" src="/assets/images/contact_page/form-img.svg" alt="form img" />
        </div>
      </div>
    </main>
  );
};

export default LeftImageSection;
