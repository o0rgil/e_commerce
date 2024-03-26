/** @format */

import React, { useContext, useEffect, useState } from "react";
import { ContactUsBar } from "./ContactUsBar";
import { ContactVisiblityContext } from "../../contexts/ContactUs";
import { SearchVisiblityContext } from "../../contexts/SearchUs";
import { SearchUsBar } from "./SearchUsBar";

export default function Header() {
  const { isContactVisible, setIsContactVisible } = useContext(
    ContactVisiblityContext
  );

  const { isSearchVisible, setIsSearchVisible } = useContext(
    SearchVisiblityContext
  );

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e: any) => {
    console.log("clicked key : ", e.key);
  };

  return (
    <div className="w-full flex flex-col h-full absolute ">
      <div className="justify-between h-[90px] flex w-full items-center">
        <div className="flex pl-20  gap-5">
          {/* <button className="flex items-center  gap-2">
          <img className="w-4 h-4" src="assets/icons/hamburger.svg" alt="" />
          <p className="text-[#000000] text-xs">Menu</p>
        </button> */}
          <button
            onClick={() => {
              setIsSearchVisible(true);
            }}
            className="flex items-center gap-2">
            <img className="w-4 h-4" src="assets/icons/search.svg" alt="" />
            <p className="text-[#000000] text-xs">Search</p>
          </button>
        </div>
        <div className=" uppercase justify-center text-4xl">LOUIS VUITTON</div>
        <div className="pr-20 flex gap-[30px] h-[50px]">
          <button
            onClick={() => {
              setIsContactVisible(true);
            }}
            className="text-[#000000] text-xs">
            Call Us
          </button>
          <button className="text-[#000000] text-xs">Wishlist</button>
          <button>
            <img className="h-4 w-4" src="assets/icons/profile.svg" alt="" />
          </button>
          <button className="flex gap-1 justify-center items-center">
            <img className="w-4 h-4" src="assets/icons/basket.svg" alt="" />
            <p className="bg-black w-[15px] mb-3 rounded-xl text-white flex text-xs h-[15px] items-center justify-center">
              0
            </p>
          </button>
        </div>
      </div>
      {isContactVisible && <ContactUsBar />}
      {isSearchVisible && <SearchUsBar />}
    </div>
  );
}
