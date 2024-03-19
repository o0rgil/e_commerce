import React from "react";
import { LeftNavBar } from "../pages/components/LeftNavBar";
import { OrderNav } from "../pages/components/OrderNav";

const order = () => {
  return (
    <div className="flex">
      <LeftNavBar />
      <OrderNav />
    </div>
  );
};
export default order;
