import React from "react";

export default function header() {
  return (
    <div className="bg-white flex flex-col text-black">
      <div className="px-[130px] py-5 flex justify-between border-b-[1px] border-gray-200">
        <img src="assets/icons/logo.svg" alt="" />

        <div className="flex h-10 border-[1px] border-[#0D6EFD] rounded-[6px]">
          <input
            className=" w-[421px] rounded-l-[6px] p-[10px]"
            placeholder="Search"
            type="text"
          />

          <select
            className="p-[10px] w-[145px] border-[1px] border-l-[#0D6EFD]"
            name=""
            id=""
          >
            <option value="">All category</option>
          </select>

          <button className="text-white rounded-r-[6px] bg-[#0D6EFD] w-[100px]">
            Search
          </button>
        </div>

        <div className="flex gap-[18px]">
          <button>
            <img src="assets/icons/profile.svg" alt="" />
          </button>

          <button>
            <img src="assets/icons/message.svg" alt="" />
          </button>

          <button>
            <img src="assets/icons/orders.svg" alt="" />
          </button>

          <button>
            <img src="assets/icons/cart.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="px-[130px] py-5 flex justify-between">
        <div className="flex gap-[6px]">
          <img src="assets/icons/hamburger.svg" alt="" />

          <div className="flex gap-[25px]">
            <button className="font-medium">All category</button>

            <button className="font-medium">Hot offers</button>

            <button className="font-medium">Gift boxes</button>

            <button className="font-medium">Projects</button>

            <button className="font-medium">Menu item</button>

            <select className="font-medium" name="" id="">
              <option value="">Help</option>
            </select>
          </div>
        </div>

        <div className="flex gap-9">
          <select className="font-medium" name="" id="">
            <option value="">English, USD</option>
            <option value="">Mongolia, MNT</option>
          </select>

          <select className="font-medium" name="" id="">
            <option value="">Ship to</option>
          </select>
        </div>
      </div>
    </div>
  );
}
