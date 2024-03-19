import React from "react";
import { LeftNavBar } from "../pages/components/LeftNavBar";
import { DashBoard } from "../pages/components/DashBoard";


const dashboard = () => {
  return (
    <div className="flex">
      <LeftNavBar />
      <DashBoard />
    </div>
  );
};
export default dashboard;
