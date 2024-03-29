/** @format */

import React, { useEffect, useState } from "react";
import App from "./CountDown";
import axios from "axios";
import { SectionRecommend } from "./SectionRecommend";

export const SectionSale = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      console.log("first");
      try {
        const response = await axios.get("http://localhost:8080/product");
        setData(response.data.product);
        console.log(response.data);
        console.log("products", data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  console.log(data);
  return (
    <div className=" mt-8 flex flex-col justify-center items-center ">
      <div className=" border rounded-xl bg-white flex p-4 gap-3 h-[240px] ">
        <div className=" flex flex-col gap-4">
          <div>
            <p className=" font-bold text-xl">Deals and offers</p>
            <p className=" text-gray-500 text-base">Hygiene equipments</p>
          </div>
          <App />
        </div>

        <div className=" flex ">
          {/* {data &&
            data.slice(0, 5).map((item) => (
              <div
                className=" w-[185px] gap-4 flex flex-col justify-center items-center"
                key={item.id}
              >
                <img
                  className=" w-[100px] h-[120px]"
                  src={item.thumbnails}
                  alt={item.title}
                />
                <p className=" text-base"> {item.productName}</p>
                <p className=" bg-red-200 text-red-500 p-2 rounded-full">
                  -{item.salePercent}%
                </p>
              </div>
            ))} */}
        </div>
      </div>
      <SectionRecommend />
    </div>
  );
};
