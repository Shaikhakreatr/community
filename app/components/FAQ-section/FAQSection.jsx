import React from "react";
import SearchSection from "./search-section/SearchSection";
import AccordianSection from "./accordian/AccordianSection";

const FAQSection = () => {
  return (
    <section>
      <div className="container mx-auto gap-5">
        <SearchSection />
        <AccordianSection />
      </div>
    </section>
  );
};

export default FAQSection;
