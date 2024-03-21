import React from "react";
import Link from "next/link";

export const SignUp = () => {
  return (
    <div className="flex justify-center  items-center ">
      <div className=" w-[440px] gap-6 flex flex-col mt-44 justify-items-center border rounded-xl p-10">
        <p className=" text-4xl font-bold flex justify-center">Бүртгүүлэх</p>
        <div className=" flex flex-col gap-4">
          <div className=" flex flex-col gap-2">
            <p className=" text-base">Таны имэйл </p>
            <input
              placeholder="Имэйл"
              type="email"
              name=""
              id=""
              className=" w-[360px] h-[56px] p-2 bg-gray-100 border rounded-lg"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" text-base">Таны нэр </p>
            <input
              placeholder="Hэр "
              type="email"
              name=""
              id=""
              className=" w-[360px] h-[56px] p-2 bg-gray-100 border rounded-lg"
            />
          </div>
        </div>
        <button>
          <Link
            className="w-[360px] relative  h-[56px] flex justify-center bg-black rounded-lg items-center p-2 text-white text-lg"
            href="/threestep"
          >
            Дараах
            <img
              className=" absolute right-7"
              src="assets/icons/rightArrow.svg"
              alt=""
            />
          </Link>
        </button>
        <hr />
        <div className=" flex flex-col gap-4">
          <button className="w-[360px] h-[56px] flex justify-center gap-1 bg-gray-100 rounded-lg items-center p-2 text-white text-lg">
            <img src="assets/icons/google.svg" />
            <p className=" text-black text-base">Google-ээр нэвтрэх</p>
          </button>
          <button className="w-[360px] h-[56px] flex justify-center gap-1 bg-gray-100 rounded-lg items-center p-2 text-white text-lg">
            <img src="assets/icons/microsoft.svg" />
            <p className=" text-black text-base">Microsoft-оор нэвтрэх</p>
          </button>
          <button className="w-[360px] h-[56px] flex justify-center gap-1 bg-gray-100 rounded-lg items-center p-2 text-white text-lg">
            <img src="assets/icons/apple.svg" />
            <p className=" text-black text-base">Apple-аар нэвтрэх</p>
          </button>
        </div>
        <hr />
        <div className=" flex justify-center gap-1">
          <p className=" text-gray-600 text-sm">Бүртгэлтэй юу?</p>
          <div className=" hover:cursor-pointer hover:bg-gray-400 rounded-sm">
            <p className="text-sm">Нэвтрэх</p>
            <hr className=" border-black  " />
          </div>
        </div>
      </div>
    </div>
  );
};
