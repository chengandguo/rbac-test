import React from "react";
import ApiCard from "../components/api-card/index";
import DataCurve from "../components/data-curve/index";
import ErrorMonitor from "../components/data-curve/index";

const Admin: React.FC = () => {
  return (
    <div>
      <ApiCard />
      <DataCurve />
      <ErrorMonitor />
    </div>
  );
};

export default Admin;
