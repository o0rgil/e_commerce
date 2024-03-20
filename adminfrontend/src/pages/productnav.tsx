import React from "react";
import { ProductList } from "../components/ProductList";
import { LeftNavBar } from "../components/LeftNavBar";

const productnav = () => {
  return (
    <div className="flex">
      <LeftNavBar />
      <ProductList />
    </div>
  );
};
export default productnav;
