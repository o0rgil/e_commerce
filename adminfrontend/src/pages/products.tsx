import React from "react";
import { LeftNavBar } from "../components/LeftNavBar";
import { Products } from "../components/Products";

export default function products() {
  return (
    <div className="flex">
      <LeftNavBar />

      <div className="bg-gray-200 w-screen">
        <Products />
      </div>
    </div>
  );
}
