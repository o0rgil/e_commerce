/** @format */

import React from "react";
import { LeftNavBar } from "../components/LeftNavBar";
import { TestingProduct } from "../components/TestingProduct";

export default function products() {
  return (
    <div className="flex">
      <LeftNavBar />

      <div className="bg-gray-200 w-screen">
        <TestingProduct />
      </div>
    </div>
  );
}
