import React from "react";

export const HomeSection = () => {
  return (
    <div>
      <div className=" flex justify-center ">
        <div className="w-screen h-screen  relative">
          <img
            className="w-full h-full object-cover"
            src="assets/bagCollection1.jpeg"
            alt=""
          />
        </div>
        <div className=" absolute flex justify-center p-5 items-center gap-20">
          <div className=" hover:cursor-pointer">
            <p className=" font-mono text-base">Tote Bag</p>
          </div>
          <div className=" hover:cursor-pointer">
            <p className=" font-mono text-base">Backpack</p>
          </div>
          <img src="assets/icons/pine.svg" alt="" />
          <div className=" hover:cursor-pointer">
            <p className=" font-mono text-base">Messenger Bag</p>
          </div>
          <div className=" hover:cursor-pointer">
            <p className=" font-mono text-base">Clutch</p>
          </div>
        </div>
        <div className=" absolute flex bottom-1 right-52 p-5 gap-6">
          <img
            className="hover:cursor-pointer"
            src="assets/icons/linkedin.svg"
            alt=""
          />
          <img
            className="hover:cursor-pointer"
            src="assets/icons/instagram.svg"
            alt=""
          />
          <img
            className="hover:cursor-pointer"
            src="assets/icons/twitter.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" flex justify-center pt-32 gap-16">
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <div className="relative group  ">
            <img
              className="w-[300px] h-[400px] hover:scale-105  hover:opacity-80"
              src="/assets/hermes.jpeg"
              alt=""
            />
            <p className="absolute inset-0 flex justify-center font-mono text-base items-center bg-black bg-opacity-75 text-white opacity-0 transition duration-300 group-hover:opacity-100">
              Hermes
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <div className="relative group ">
            <img
              className="w-[300px] h-[400px]  hover:scale-105 hover:opacity-80"
              src="/assets/dior.jpeg"
              alt=""
            />
            <p className="absolute inset-0 flex justify-center font-mono text-base items-center bg-black bg-opacity-75 text-white opacity-0 transition duration-300 group-hover:opacity-100">
              Dior
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <div className="relative group">
            <img
              className="w-[300px] h-[400px]  hover:scale-105 hover:opacity-80"
              src="/assets/louisVuitton.jpeg"
              alt=""
            />
            <p className="absolute inset-0 flex justify-center font-mono text-base items-center bg-black bg-opacity-75 text-white opacity-0 transition duration-300 group-hover:opacity-100">
              Louis Vuitton
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <div className="relative group">
            <img
              className="w-[300px] h-[400px]  hover:scale-105 hover:opacity-80"
              src="/assets/burberry1.jpeg"
              alt=""
            />
            <p className="absolute inset-0 flex justify-center font-mono text-base items-center bg-black bg-opacity-75 text-white opacity-0 transition duration-300 group-hover:opacity-100">
              Burberry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
