import React from "react";
import LeftImageSection from "./leftImage-section/leftImageSection";
import FormSection from "./RightForm-section/FormSection";

const ContactHero = () => {
  return (
    <section>
      <div className="container mx-auto ">
        <div className="xl:py-[6.25rem] lg:py-[60px] py-[50px]">
          <div className="sm:grid sm:grid-cols-5 xl:gap-24 lg:gap-6 gap-10 flex flex-col items-center justify-center">
            <LeftImageSection />
            <FormSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
