import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:8080";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  // Fetching Products from DB Scene ==============
  const fetchProducts = async () => {
    // console.log("first");
    try {
      const response = await axios.get("http://localhost:8080/product");
      setProducts(response.data.product);
      console.log(response.data);
      console.log("products", products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Deleting Scene ===============================
  const handleDelete = async (_id: any, index: any) => {
    console.log(_id, "_id");

    try {
      await axios.delete(BASE_URL + `/productDelete/${_id}`);
      console.log("Deleting");
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    } catch (error) {
      console.error(error);
    }
  };

  // Editing Scene ================================
  // const handleEdit = async (_id, index) => {
  //   try {
  //     router.push({ pathname: "/product", query: { _id } });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
      <div className="flex px-6 justify-between mt-6 mb-6">
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
      {/* Product table */}
      <div className="w-[1170px] mx-6 bg-white rounded">
        <table className="">
          <thead className="border-b">
            <tr className="flex h-[44px] text-xs font-semibold">
              <th className="w-[68px]"></th>
              <th className="w-[156.8px] h-[44px] flex justify-start items-center">
                Бүтээгдэхүүн
              </th>
              <th className="w-[214px] h-[44px] flex justify-start items-center">
                Ангилал
              </th>
              <th className="w-[156.8px] h-[44px] flex justify-start items-center">
                Үнэ
              </th>
              <th className="w-[156.8px] h-[44px] flex justify-start items-center">
                Үлдэгдэл
              </th>
              <th className="w-[156.8px] h-[44px] flex justify-start items-center">
                Зарагдсан
              </th>
              <th className="w-[156.8px] h-[44px] flex justify-start items-center">
                Нэмсэн огноо
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {products.map((data, index) => (
              <tr
                key={data._id}
                className="flex text-sm text-[#3F4145] font-normal"
              >
                <td className="w-[68px] flex justify-center items-center">
                  <input type="checkbox" />
                </td>
                <td className="w-[156.8px] h-[44px] flex justify-start items-center">
                  <img src={data.thumbnails} alt="" />
                </td>
                <td className="w-[214px] h-[44px] flex justify-start items-center">
                  {data.productName}
                </td>
                <td className="w-[156.8px] h-[44px] flex justify-start items-center">
                  {data.price}
                </td>
                <td className="w-[156.8px] h-[44px] flex justify-start items-center">
                  {data.price}
                </td>
                <td className="w-[156.8px] h-[44px] flex justify-start items-center">
                  {data.qty}
                </td>
                <td className="w-[156.8px] h-[44px] flex justify-start items-center">
                  {data.createdAt}
                </td>
                <td className="w-[156.8px] h-[44px] flex justify-start items-center gap-[10.5px]">
                  <img
                    src="/assets/icons/delete.svg"
                    alt=""
                    className="cursor-pointer hover:scale-[1.3] duration-200"
                    onClick={(e) => handleDelete(data._id, index)}
                  />
                  <img
                    src="/assets/icons/edit.svg"
                    alt=""
                    className="cursor-pointer hover:scale-[1.3] duration-200"
                    // onClick={() => {
                    //   router.push({ pathname: "/product", query: { _id } });
                    // }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
