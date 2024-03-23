import React from "react";
import { LeftNavBar } from "../components/LeftNavBar";
import { ProducStepOne } from "@/components/ProductStepOne";
import { ProductStepTwo } from "@/components/ProductStepTwo";

export default function products() {
  return (
    <div className="flex">
      <LeftNavBar />

      <div className="bg-gray-200 w-screen">
        <ProducStepOne />
        <ProductStepTwo/>
      </div>
    </div>
  );
}
