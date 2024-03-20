import React from "react";

export const DashBoard = () => {
  return (
    <div className="">
      <div className="bg-gray-200 w-screen h-screen">
        <div className="flex ml-6 gap-6 pt-[36px]">
          <div className="flex flex-col justify-between w-[573px] h-[136px] bg-white rounded-xl px-6 py-4 hover:scale-[1.01] duration-200">
            <div className="flex text-base font-semibold gap-[13.7px]">
              <img src="/assets/icons/dollar.svg" alt="" />
              <p>Орлого</p>
            </div>
            <p className="text-[32px] font-bold">235,000₮</p>
            <p className="text-[14px] font-normal text-[#5E6166]">Өнөөдөр</p>
          </div>
          <div className="flex flex-col justify-between w-[573px] h-[136px] bg-white rounded-xl px-6 py-4 hover:scale-[1.01] duration-200">
            <div className="flex text-base font-semibold gap-[13.7px]">
              <img src="/assets/icons/board.svg" alt="" />
              <p>Захиалга</p>
            </div>
            <p className="text-[32px] font-bold">58</p>
            <p className="text-[14px] font-normal text-[#5E6166]">Өнөөдөр</p>
          </div>
        </div>
      </div>
    </div>
  );
};
