"use client";

import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Hero = () => {
  
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:pb-12 lg:pt-5 sm:py-3  md:py-4 ml-3 pt-4 pb-12">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
