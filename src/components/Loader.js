import React from "react";
import Spinner from "react-svg-spinner";

const Loader = () => {
  return (
    <div className="min-h-[300px] flex justify-center items-center">
      <div className="block mb-6">
        <Spinner color="white" size="60px" thickness={2} />
      </div>
    </div>
  );
};

export default Loader;
