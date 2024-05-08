"use client";

import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Hero = () => {
  
  return (
    <section>
      <div className="container mx-auto lg:py-0 md:py-[50px] lg:pt-[0px]">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:pb-[80px] lg:pb-[70px] lg:pt-[30px]  xl:pt-[50px]    sm:py-3  md:py-4 ml-3  pb-10">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
