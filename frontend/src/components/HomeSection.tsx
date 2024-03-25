import React from "react";
import Footer from "./Footer";
import { NewArrivals } from "./NewArrivals";
import { BrandsCard } from "./BrandsCard";

export const HomeSection = () => {
  return (
    <div className=" bg-[#FFFBEE]">
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
      </div>
      <BrandsCard />
      <NewArrivals />
      <div className="bg-[#FFFBEE] p-32 flex flex-col items-center justify-center gap-20">
        <p className="text-5xl ">Why To Buy From Us</p>
        <div className=" flex gap-52 ">
          <div>
            <p> Free Shipping</p>
          </div>
          <div>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
