import axios from "axios";
import React, { useEffect, useState } from "react";

export const SectionRecommend = () => {
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
    <div className=" mt-12">
      <p className=" text-4xl">Recommended items</p>
      <div className=" grid grid-cols-5 gap-6">
        {data &&
          data.slice(0, 10).map((item) => (
            <div
              className=" w-[215.15px] hover:cursor-pointer h-[269.47px] bg-white gap-2 border rounded-lg flex flex-col justify-center items-center"
              key={item.id}
            >
              <img
                className=" w-[100px] h-[120px]"
                src={item.thumbnails}
                alt={item.title}
              />
              <p>${item.price}</p>
              <p className=" text-base"> {item.productName}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
