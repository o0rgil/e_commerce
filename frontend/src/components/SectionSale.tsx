import React from "react";
import App from "./CountDown";

export const SectionSale = () => {
  return (
    <div className=" mt-8 flex justify-center items-center ">
      <div className=" border rounded-xl bg-white flex p-4 gap-3 h-[240px] ">
        <div className=" flex flex-col gap-4">
          <div>
            <p className=" font-bold text-xl">Deals and offers</p>
            <p className=" text-gray-500 text-base">Hygiene equipments</p>
          </div>
          <App />
        </div>
        <div></div>
      </div>
    </div>
  );
};
