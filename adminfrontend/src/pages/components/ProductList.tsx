import React from "react";
import Link from "next/link";

export const ProductList = () => {
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <div>
        <ul className="flex gap-1 w-screen text-base font-normal border-b border-gray-300 pt-4 px-4 h-[56px] fixed">
          <li className="text-center w-[124px] hover:font-medium hover:border-b-2 hover:border-black duration-300 cursor-pointer active:scale-95">
            Бүтээгдэхүүн
          </li>
          <li className="text-center w-[88px] hover:font-medium hover:border-b-2 hover:border-black duration-300 cursor-pointer">
            Ангилал
          </li>
        </ul>
      </div>
      <Link href={"/products"}>
        <div className="mt-[80px] ml-6 bg-black w-[280px] h-[48px] text-white flex justify-center gap-[9px] rounded-lg cursor-pointer hover:scale-105 duration-200">
          <img src="/assets/icons/plus.svg" alt="" className="w-[14px]" />
          <button>Бүтээгдэхүүн нэмэх</button>
        </div>
      </Link>
      <div className="flex px-6 justify-between mt-6">
        <div className="flex gap-[13px]">
          <div className="flex w-[147px] h-[40px] justify-between items-center rounded-lg bg-white px-[18px]">
            <img src="/assets/icons/category.svg" alt="" className="w-[19px]" />
            <p>Ангилал</p>
            <img
              src="/assets/icons/down_arrow.svg"
              alt=""
              className="w-[12px]"
            />
          </div>
          <div className="flex w-[113px] h-[40px] justify-between items-center rounded-lg bg-white px-[18px]">
            <img src="/assets/icons/dollar.svg" alt="" className="w-[18px]" />
            <p>Үнэ</p>
            <img
              src="/assets/icons/down_arrow.svg"
              alt=""
              className="w-[12px]"
            />
          </div>
          <div className="flex w-[140px] h-[40px] justify-between items-center rounded-lg bg-white px-[18px]">
            <img src="/assets/icons/calendar.png" alt="" className="w-[18px]" />
            <p>Сараар</p>
            <img
              src="/assets/icons/down_arrow.svg"
              alt=""
              className="w-[12px]"
            />
          </div>
        </div>
        <div className="flex border border-gray-300 rounded-lg w-[419px] h-[40px] bg-white items-center px-4 gap-4">
          <img src="/assets/icons/scope.svg" alt="" className="w-[17px]" />
          <input
            type="text"
            className="w-[400px]"
            placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
          />
        </div>
      </div>
    </div>
  );
};
