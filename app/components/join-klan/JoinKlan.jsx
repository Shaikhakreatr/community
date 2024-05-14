import React from "react";

const JoinKlan = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="page-heading text-[48px] sm:text-[65px] lg:text-[86px] xl:text-[96px]">
          JoIn our Klan
        </h1>
        <p className="content-neue text-[16px] italic text-blue-900 sm:text-[18px] lg:text-[20px] xl:text-[24px]">
          (Note: We use the word “Klan” to replace “clan.”)
        </p>
      </div>
      <div className="flex">
        <img src="/assets/images/JOK_page/left-arrow.svg" alt="left arrow" />
        <img
          src="/assets/images/JOK_page/center-arrow.svg"
          alt="center arrow"
        />
        <img src="/assets/images/JOK_page/right-arrow.svg" alt="right arrow" />
      </div>
      <div>
        <div className="h-[272px] w-[255px]">
          <img
            src="/assets/images/JOK_page/instagram-JOK.svg"
            alt="instagram"
          />
          <p>“Pop” goes our hearts when you leave one!</p>
        </div>
        <div className="h-[272px] w-[255px]">
          <img src="/assets/images/JOK_page/whatsapp-JOK.svg" alt="whatsapp" />
          <p>The biggest green flag you will ever see.</p>
        </div>
        <div className="h-[272px] w-[255px]">
          <img src="/assets/images/JOK_page/linkdin-JOK.svg" alt="linkdin" />
          <p>For your professional needs!</p>
        </div>
      </div>
    </div>
  );
};

export default JoinKlan;
