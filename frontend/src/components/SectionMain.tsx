import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar1 } from "../../public/assets/Avatar1";
import { SectionRecommend } from "./SectionRecommend";

export const SectionMain = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="border rounded-xl bg-white flex p-4 gap-3 ">
        <div>
          <p className="w-[250px] text-gray-600 hover:text-black hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2">
            Automobiles
          </p>
          <p className="w-[250px] text-gray-600 hover:text-black hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2">
            Clothes and wear
          </p>
          <p className="w-[250px] text-gray-600 hover:text-black hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2">
            Home interiors
          </p>
          <p className="w-[250px] text-gray-600 hover:text-black hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2">
            Computer and tech
          </p>
          <p className="w-[250px] text-gray-600 hover:text-black hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2">
            Tools, equipments
          </p>
          <p className="w-[250px] text-gray-600 hover:text-black hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2">
            Sports and outdoor
          </p>
          <p className="w-[250px] text-gray-600 hover:text-black hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2">
            Animal and pets
          </p>
          <p className="w-[250px] text-gray-600 hover:text-black hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2">
            Machinery tools
          </p>
          <p className="w-[250px] text-gray-600 hover:text-black hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2">
            More category
          </p>
        </div>
        <div className="w-[664px] bg-gray-200">
          <div className=" bg-gray-200">
            <img className="w-[664px] h-[373px]" src="image1.png" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="  flex flex-col gap-2 text-base bg-blue-100 w-[200px] p-2 rounded-md">
            <div className="flex ">
              <Avatar1 />
              <p className=" ">Hi, user let’s get stated</p>
            </div>
            <div className=" bg-blue-500 text-xs flex justify-center items-center text-white p-2 rounded-md hover:cursor-pointer">
              Join now
            </div>
            <div className=" bg-white text-xs flex justify-center items-center text-blue-500 p-2 rounded-md hover:cursor-pointer border">
              Log in
            </div>
          </div>
          <div className="bg-orange-400 w-[200px] p-3 text-white  rounded-md">
            <p className="text-base w-[114px]">
              Get US $10 off with a new supplier
            </p>
          </div>
          <div className=" bg-teal-500 w-[200px] p-3 text-white  rounded-md">
            <p className="text-base w-[114px]">
              Send quotes with supplier preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
