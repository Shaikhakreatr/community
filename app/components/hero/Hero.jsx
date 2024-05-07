"use client";

import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Hero = () => {
  
  return (
    <section>
      <div className="container mx-auto md:py-[70px] lg:pt-0">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:pb-[160px] lg:bg-green-400 2xl:bg-red-300 xl:pt-[50px] lg:pb-12 lg:pt-5 sm:py-3  md:py-4 ml-3 pt-4 pb-12">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
