import React from "react";
import DataCurve from "../components/data-curve/index";
import ErrorMonitor from "../components/data-curve/index";

const Developer: React.FC = () => {
  return (
    <div>
      <DataCurve />
      <ErrorMonitor />
    </div>
  );
};

export default Developer;
