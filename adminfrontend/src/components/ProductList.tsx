/** @format */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Loadingpage from "../pages/loading";
import { DeleteModal } from "../components/sub_components/DeleteModal";

const BASE_URL = "http://localhost:8080";
interface Product {
  _id: string;
  thumbnails: string;
  productName: string;
  price: number;
  qty: number;
  createdAt: string;
}

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();
  const [loading, setloading] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState();
  const [selectedProductIndex, setSelectedProductIndex] = useState();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  // Fetching Products from DB Scene ==============
  const fetchProducts = async () => {
    setloading(true);
    // console.log("first");
    try {
      const response = await axios.get("http://localhost:8080/bag");
      setProducts(response.data.bag);
      console.log(response.data);
      console.log("products", products);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Deleting Scene ===============================
  const openDeleteModal = (id: string, index: number) => {
    setDeleteModal(!deleteModal);
    setSelectedProductId(id);
    setSelectedProductIndex(index);
  };
  const handleDelete = async (_id: any, index: any) => {
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
  const handleEdit = async (_id: any, index: any) => {
    try {
      router.push({ pathname: "/products", query: { _id } });
    } catch (error) {
      console.error(error);
    }
  };

  // Date Formating Scene =============================
  const formatDate = (dataString: string) => {
    const date = new Date(dataString);
    const formattedDate = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}-${date.getHours()}:${date.getMinutes()}`;
    return formattedDate;
  };

  // Checking line Scene ==============================
  const handleCheckboxChange = (id: string) => {
    return () => {
      if (selectedCheckboxes.includes(id)) {
        setSelectedCheckboxes(
          selectedCheckboxes.filter((checkbox) => checkbox !== id)
        );
      } else {
        setSelectedCheckboxes([...selectedCheckboxes, id]);
      }
    };
  };
  const isButtonEnabled = selectedCheckboxes.length > 0;

  return (
    <div className="bg-gray-200 h-full w-screen pb-10">
      <div>
        {deleteModal && (
          <DeleteModal
            handleDelete={handleDelete}
            openDeleteModal={openDeleteModal}
            productId={selectedProductId}
            productIndex={selectedProductIndex}
          />
        )}
      </div>
      <div>
        <ul className="flex gap-1 w-screen text-base font-normal border-b border-gray-300 pt-4 px-4 h-[56px] fixed bg-gray-200 z-50">
          <li className="text-center w-[124px] hover:font-medium hover:border-b-2 hover:border-black duration-300 cursor-pointer active:scale-95">
            Бүтээгдэхүүн
          </li>
          <li className="text-center w-[88px] hover:font-medium hover:border-b-2 hover:border-black duration-300 cursor-pointer">
            Ангилал
          </li>
        </ul>
      </div>
      <Link href={"/products"}>
        <div className="flex justify-center items-center mt-[80px] ml-6 bg-white w-[280px] h-[48px] text-stone-500 font-bold gap-[9px] rounded-lg cursor-pointer border border-stone-300 hover:bg-stone-500 hover:text-white duration-500">
          <i className="fa-solid fa-plus"></i>
          <button>Бүтээгдэхүүн нэмэх</button>
        </div>
      </Link>
      <div className="flex px-6 justify-between mt-6 mb-6">
        <div className="flex gap-[13px]">
          <button
            disabled={!isButtonEnabled}
            className={`border border-gray-300 rounded-lg py-2 px-4 bg-white text-black hover:shadow-lg duration-300 ${
              !isButtonEnabled ? "opacity-30 cursor-not-allowed" : ""
            }`}>
            Устгах
          </button>
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
              <th className="w-[40px] flex justify-center items-center">№</th>
              <th className="w-[156.8px] h-[44px] flex justify-start items-center">
                Цүнхний нэр
              </th>
              <th className="w-[110px] h-[44px] flex justify-start items-center">
                Брэнд
              </th>
              <th className="w-[156.8px] h-[44px] flex justify-start items-center">
                Үнэ
              </th>
              <th className="w-[156.8px] h-[44px] flex justify-start items-center">
                Үлдэгдэл
              </th>
              <th className="w-[214px] h-[44px] flex justify-start items-center">
                Өнгө
              </th>
              <th className="w-[156.8px] h-[44px] flex justify-start items-center">
                Нэмсэн огноо
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <Loadingpage />
            ) : (
              <>
                {products.map((bag, index) => (
                  <tr
                    key={bag._id}
                    className={`flex text-sm text-[#3F4145] font-normal hover:bg-green-100 duration-500 w-[1170px] text-stone-500 ${
                      index % 2 === 0 ? `bg-stone-100` : `bg-stone-200`
                    } ${
                      selectedCheckboxes.includes(bag._id) && "bg-green-500"
                    }`}>
                    <td className="w-[68px] flex justify-center items-center">
                      <input
                        type="checkbox"
                        onClick={handleCheckboxChange(bag._id)}
                        checked={selectedCheckboxes.includes(bag._id)}
                      />
                    </td>
                    <td className="w-[40px] flex justify-center items-center text-xs text-stone-400">
                      {index + 1}
                    </td>
                    <td className="group relative w-[156.8px] h-[44px] flex justify-start items-center ">
                      <div className="truncate w-[120px] absolute z-0 flex flex-col">
                        {bag.bagName}
                      </div>
                      {/* Hovering bag name */}
                      <span className="absolute invisible group-hover:visible border bg-yellow-100 px-2 text-gray-400 ml-6 rounded-md">
                        {bag.bagName}
                      </span>
                    </td>
                    <td className="w-[110px] h-[44px] flex justify-start items-center">
                      {bag.brand}
                    </td>
                    <td className="w-[156.8px] h-[44px] flex justify-start items-center">
                      {bag.price}₮
                    </td>
                    <td className="w-[156.8px] h-[44px] flex justify-start items-center">
                      {bag.price}
                    </td>
                    <td className="w-[214px] h-[44px] flex justify-start items-center ">
                      <ul className="flex text-xs gap-1">
                        {bag.colors.map((color, index) => (
                          <li key={index}>{color.color},</li>
                        ))}
                      </ul>
                    </td>
                    <td className="w-[156.8px] h-[44px] flex justify-start items-center">
                      {formatDate(bag.CreatedAt)}
                    </td>
                    <td className="w-[156.8px] h-[44px] flex justify-start items-center gap-[10.5px]">
                      <img
                        src="/assets/icons/delete.svg"
                        alt=""
                        className="cursor-pointer hover:scale-[1.3] duration-200"
                        onClick={() => openDeleteModal(bag._id, index)}
                      />
                      <img
                        src="/assets/icons/edit.svg"
                        alt=""
                        className="cursor-pointer hover:scale-[1.3] duration-200"
                        onClick={(e) => handleEdit(bag._id, index)}
                      />
                    </td>
                  </tr>
                ))}
                <div className="w-[1170px] h-5 bg-white rounded-b-xl"></div>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
