"use client";

import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Hero = () => {
  
  return (
    <section>
      <div className="container mx-auto lg:py-0 md:py-[50px] lg:pt-[0px]">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-1 grid-cols-1 xl:pb-[80px] lg:pb-[70px]   xl:pt-[50px] sm:ml-0  pb-10">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
