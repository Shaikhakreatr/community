import React from "react";

const AboutKreatrHeader = () => {
  return (
    <div className="mt-[30px]">
      <h1 className="page-heading text-center text-[48px] sm:text-[64px] lg:text-[86px] xl:text-[96px]">
        About Kreatr
      </h1>
      <p className="content-neue text-center text-[16px] italic leading-[18px] sm:text-[18px] lg:text-[22px] lg:leading-[26px] xl:text-[24px]">
        We are a digital ecosystem that encourages<br className="sm:hidden block" /> cross-industry<br className="sm:block hidden" /> collaboration
        and empowers<br className="sm:hidden block" /> creators like you.
      </p>
    </div>
  );
};

export default AboutKreatrHeader;
