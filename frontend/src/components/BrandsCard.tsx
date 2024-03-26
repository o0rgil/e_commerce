/** @format */

import React from "react";

import { useRouter } from "next/router";

export const BrandsCard = () => {
  const router = useRouter();
  const handleJumpHermes = () => {
    router.push("/hermes");
  };
  return (
    <div>
      <div className=" flex justify-center p-32 gap-16">
        <div className="flex flex-col justify-center items-center gap-4  ">
          <div className="relative group flex flex-col justify-center items-center ">
            <img
              className="w-[300px] h-[400px]  rounded-xl "
              src="/assets/hermes.jpeg"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center font-mono text-base items-end text-white ">
              <div className=" flex flex-col justify-center items-center p-2">
                <p className="text-xl">Hemres</p>
                <button
                  onClick={handleJumpHermes}
                  className="border p-5 w-[150px] bg-black bg-opacity-50  hover:bg-black hover:bg-opacity-70 flex justify-center items-center  hover:cursor-pointer rounded-md transform translate-y-1 transition duration-700 hover:translate-y-0">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div className="relative group flex flex-col justify-center items-center ">
            <img
              className="w-[300px] h-[400px] rounded-xl hover:scale-105 hover:opacity-80"
              src="/assets/prada.jpeg"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center font-mono text-base items-end text-white">
              <div className=" flex flex-col justify-center items-center p-2">
                <p className="text-xl">Prada</p>
                <div className="border p-5 w-[150px] bg-black bg-opacity-50  hover:bg-black hover:bg-opacity-70 flex justify-center items-center  hover:cursor-pointer rounded-md transform translate-y-1 transition duration-700 hover:translate-y-0">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="relative group flex flex-col justify-center items-center">
            <img
              className="w-[300px] h-[400px] rounded-xl hover:scale-105 hover:opacity-80"
              src="/assets/louisVuitton.jpeg"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center font-mono text-base items-end text-white">
              <div className=" flex flex-col justify-center items-center p-2">
                <p className="text-xl">Louis Vuitton</p>
                <div className="border p-5 w-[150px] bg-black bg-opacity-50  hover:bg-black hover:bg-opacity-70 flex justify-center items-center  hover:cursor-pointer rounded-md transform translate-y-1 transition duration-700 hover:translate-y-0">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div className="relative  flex flex-col justify-center items-center ">
            <img
              className="w-[300px] h-[400px] rounded-xl "
              src="/assets/gucci.jpeg"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center font-mono text-base items-end text-white">
              <div className=" flex flex-col  justify-center items-center p-2">
                <p className="text-xl">Gucci</p>
                <div className="border p-5 w-[150px]   bg-black bg-opacity-50  hover:bg-black hover:bg-opacity-70 flex justify-center items-center  hover:cursor-pointer rounded-md transform translate-y-1 transition duration-700 hover:translate-y-0">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
