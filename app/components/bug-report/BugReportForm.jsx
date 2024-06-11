import React from "react";
import LeftGifSection from "./leftGif-section/LeftGifSection";
import RightFormSection from "./rightForm-section/RightFormSection";


const ContactHero = () => {
  return (
    <section>
      <div className="container mx-auto  ">
        <div className="xl:py-[6.25rem] lg:mx-0 sm:mx-4 lg:py-[60px] py-[30px]">
          <div className="sm:grid sm:grid-cols-5 xl:gap-24 sm:gap-20 gap-10 flex flex-col items-center justify-center">
            <LeftGifSection />
            <RightFormSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
