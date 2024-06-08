import React from "react";
import { PacmanLoader } from "react-spinners";

const Spinner = ({loading}) => {
  return (
    <div className="loaderMainDiv">
      <PacmanLoader color="#000000" loading={loading} />
    </div>
  );
};

export default Spinner;
