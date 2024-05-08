import React from "react";
import LeftImageSection from "./leftImage-section/leftImageSection";
import FormSection from "./RightForm-section/FormSection";

const ContactHero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className=" bg-green-300 sm:py-24">
          <div className="grid sm:grid-cols-5 gap-24">
            <LeftImageSection />
            <FormSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
