/** @format */

import React from "react";
import { LeftNavBar } from "../components/LeftNavBar";
import { TestingProduct } from "../components/TestingProduct";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";

export default function products() {
  return (
    <div className="flex">
      <LeftNavBar />
      <div className="bg-gray-200 w-screen">
        <TestingProduct />
        {/* <StepOne />
        <StepTwo /> */}
      </div>
    </div>
  );
}
