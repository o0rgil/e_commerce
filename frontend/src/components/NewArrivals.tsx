import React from "react";

export const NewArrivals = () => {
  return (
    <div>
      <div className=" flex bg-white justify-center pt-32 items-center">
        <p className=" text-5xl"> New Arrivals</p>
      </div>
      <div className=" flex justify-center bg-white pt-16 pb-32 gap-16 ">
        <div className="w-[200px]  rounded-xl">
          <img src="assets/hermes.jpeg" alt="" className="rounded-t-xl" />
          <div className="bg-[#f5c5a5] flex flex-col justify-center rounded-b-xl items-center hover:cursor-pointer">
            <div className="flex flex-col items-center ">
              <p>Lorem, ipsum.</p>
              <p>$200</p>
            </div>
          </div>
        </div>
        <div className="w-[200px]  rounded-xl">
          <img src="assets/hermes.jpeg" alt="" className="rounded-t-xl" />
          <div className="bg-[#f5c5a5] flex flex-col justify-center rounded-b-xl items-center hover:cursor-pointer">
            <div className="flex flex-col items-center ">
              <p>Lorem, ipsum.</p>
              <p>$200</p>
            </div>
          </div>
        </div>
        <div className="w-[200px]  rounded-xl">
          <img src="assets/hermes.jpeg" alt="" className="rounded-t-xl" />
          <div className="bg-[#f5c5a5] flex flex-col justify-center rounded-b-xl items-center hover:cursor-pointer">
            <div className="flex flex-col items-center ">
              <p>Lorem, ipsum.</p>
              <p>$200</p>
            </div>
          </div>
        </div>
        <div className="w-[200px]  rounded-xl">
          <img src="assets/hermes.jpeg" alt="" className="rounded-t-xl" />
          <div className="bg-[#f5c5a5] flex flex-col justify-center rounded-b-xl items-center hover:cursor-pointer">
            <div className="flex flex-col items-center ">
              <p>Lorem, ipsum.</p>
              <p>$200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
