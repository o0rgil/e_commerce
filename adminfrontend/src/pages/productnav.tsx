import React from "react";
import { ProductList } from "../pages/components/ProductList";
import { LeftNavBar } from "../pages/components/LeftNavBar";

const productnav = () => {
  return (
    <div className="flex">
      <LeftNavBar />
      <ProductList />
    </div>
  );
};
export default productnav;
