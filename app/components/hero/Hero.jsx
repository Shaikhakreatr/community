"use client";

import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Hero = () => {
  
  return (
    <section>
      <div className="container mx-auto lg:py-0 md:py-[70px] lg:pt-0">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:pb-[80px]  xl:pt-[40px]  lg:pb-[30px] lg:pt-5 sm:py-3  md:py-4 ml-3 pt-1 pb-10">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
