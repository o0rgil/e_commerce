import React, { useState } from "react";
import Link from "next/link";

export const LeftNavBar = () => {
  const [navStyle, setnavStyle] = useState(
    "flex gap-[19px] w-[222px] py-[10px] px-4 cursor-pointer hover:bg-gray-200 hover:pl-5 duration-200"
  );
  return (
    <div>
      <div className="w-[222px] h-screen bg-white">
        <div className="fixed pt-6 z-10 bg-white">
          <ul className="flex flex-col">
            <Link href={"/dashboard"}>
              <div className={`${navStyle}`}>
                <img src="/assets/icons/dashboard.svg" alt="" />
                <li className="text-base font-semibold">Хяналтын самбар</li>
              </div>
            </Link>
            <Link href={"/order"}>
              <div className={`${navStyle}`}>
                <img src="/assets/icons/board.svg" alt="" />
                <li className="text-base font-semibold">Захиалга</li>
              </div>
            </Link>
            <div className={`${navStyle}`}>
              <img src="/assets/icons/income.svg" alt="" />
              <li className="text-base font-semibold">Орлого</li>
            </div>
            <Link href={"/productnav"}>
              <div className={`${navStyle}`}>
                <img src="/assets/icons/products.svg" alt="" />
                <li className="text-base font-semibold">Бүтээгдэхүүн</li>
              </div>
            </Link>

            <div className={`${navStyle}`}>
              <img src="/assets/icons/settings.svg" alt="" />
              <li className="text-base font-semibold">Тохиргоо</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
