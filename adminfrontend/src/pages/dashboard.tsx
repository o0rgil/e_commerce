import React from "react";
import { LeftNavBar } from "../components/LeftNavBar";
import { DashBoard } from "../components/DashBoard";

const dashboard = () => {
  return (
    <div className="flex">
      <LeftNavBar />
      <DashBoard />
    </div>
  );
};
export default dashboard;
