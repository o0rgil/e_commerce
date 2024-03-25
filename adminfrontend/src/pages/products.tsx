/** @format */

import React from "react";
import { LeftNavBar } from "../components/LeftNavBar";
import { ProducStepOne } from "@/components/ProductStepOne";
import { ProductStepTwo } from "@/components/ProductStepTwo";
import { TestingProduct } from "../components/TestingProduct";

export default function products() {
  return (
    <div className="flex">
      <LeftNavBar />

      <div className="bg-gray-200 w-screen">
        {/* <ProducStepOne />
        <ProductStepTwo/> */}
        <TestingProduct />
      </div>
    </div>
  );
}
