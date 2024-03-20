import React from "react";

export default function footer() {
  return (
    <div className="text-black">
      <div className="flex items-center justify-center py-10 bg-gray-200">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Subscribe on our newsletter</p>

            <p className="text-[#606060]">
              Get daily news on upcoming offers from manu suppliers all over the
              world
            </p>
          </div>

          <div className="flex justify-center gap-2">
            <input
              className="p-2 rounded-[6px] w-[274px]"
              placeholder="Email"
              type="text"
            />

            <button className="px-4 bg-[#0D6EFD] text-white rounded-[6px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div className="flex justify-between py-10 px-[130px]">
          <div className="flex flex-col gap-[15px] w-[276px]">
            <img className="w-[150px]" src="assets/icons/logo.svg" alt="" />

            <p className="text-gray-600">
              Best information about the company gies here but now lorem ipsum
              is
            </p>

            <div className="flex gap-[10px]">
              <img src="assets/icons/facebook.svg" alt="" />

              <img src="assets/icons/twitter.svg" alt="" />

              <img src="assets/icons/linkedin.svg" alt="" />

              <img src="assets/icons/instagram.svg" alt="" />

              <img src="assets/icons/youtube.svg" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p className="font-medium">About</p>

            <div className="flex flex-col gap-[3px] items-start">
              <button className="text-gray-500">About us</button>

              <button className="text-gray-500">Find store</button>

              <button className="text-gray-500">Categories</button>

              <button className="text-gray-500">Blogs</button>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p className="font-medium">Partnership</p>

            <div className="flex flex-col gap-[3px] items-start">
              <button className="text-gray-500">About us</button>

              <button className="text-gray-500">Find store</button>

              <button className="text-gray-500">Categories</button>

              <button className="text-gray-500">Blogs</button>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p className="font-medium">Information</p>

            <div className="flex flex-col gap-[3px] items-start">
              <button className="text-gray-500">Help Center</button>

              <button className="text-gray-500">Money Refund</button>

              <button className="text-gray-500">Shipping</button>

              <button className="text-gray-500">Contact us</button>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p className="font-medium">For users</p>

            <div className="flex flex-col gap-[3px] items-start">
              <button className="text-gray-500">Login</button>

              <button className="text-gray-500">Register</button>

              <button className="text-gray-500">Settings</button>

              <button className="text-gray-500">My Orders</button>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p className="font-medium">Get app</p>

            <div className="flex flex-col gap-2">
              <button>
                <img src="assets/icons/appStore.svg" alt="" />
              </button>

              <button>
                <img src="assets/icons/playStore.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-10 px-[130px] bg-gray-200">
          <p className="text-[#606060]">© 2023 Ecommerce</p>

          <select className="bg-gray-200 text-[#606060]" name="" id="">
            <option value="">English</option>
            <option value="">Mongolia</option>
          </select>
        </div>
      </div>
    </div>
  );
}
