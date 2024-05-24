import React from "react";
import CareerOpening from "./career-opening/CareerOpening";
import CareersEmpty from "./career-empty/CareersEmpty";


const CareersBox = () => {
  const jobVacancies = [
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "In-Office",
      description:
        "We’re looking for a mid-level Graphic Designer to join our team",
    },
  ];

  return (
    <div>
      {jobVacancies.length === 0 ?<CareerOpening jobVacancies={jobVacancies}  />:<CareersEmpty />}
    </div>
  );
};

export default CareersBox;
