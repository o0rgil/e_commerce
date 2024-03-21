import { instance } from "@/instance";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export const Products = () => {
  // ID from edit button=========
  const router = useRouter();
  const { _id } = router.query;
  // console.log(_id, "ID from Edit side");
  const [update, setUpdate] = useState(false);
  const [product, setProduct] = useState({});
  // console.log(product, "product on state");
  useEffect(() => {
    if (_id) {
      setUpdate(true);
    } else {
      return;
    }
  });
  //=============================

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [productNumber, setProductNumber] = useState();
  const [images, setImages] = useState();
  const [qty, setQty] = useState();

  const addProduct = async (e: any) => {
    try {
      const input = {
        productName: productName,
        description: description,
        price: price,
        productNumber: productNumber,
        qty: qty,
      };


      if (
        !images ||
        !productName ||
        !description ||
        !price ||
        !productNumber ||
        !qty
      )
        return;
      console.log("wtf", input);

      const formData = new FormData();
      formData.append("input", JSON.stringify(input));
      formData.append("image", images);
      await instance.post("/productCreate", formData);

      console.log("first", formData);
    } catch (error) {
      console.log("hhhhe");
    }

  };

  // Fetching data to update it =======================================
  const gettingData = async () => {
    try {
      if (_id) {
        const response = await axios.get(
          `http://localhost:8080/products/${_id}`
        );
        // console.log(response.data.product, "response");
        setProduct(response.data.product);
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    gettingData();
  }, []);

  // Updating product scene =============================================
  const updateProduct = async () => {
    try {
      const input = {
        name: productName,
        desc: description,
        price: price,
        categoryid: categoryId,
        qnty: qty,
        img: img,
      };

      const response = await axios.put(
        `http://localhost:8080/productUpdate/${_id}`,
        input
      );
      if (response.status === 200) {
        alert("Product updated successfully");
        console.log(response.data);
      } else {
        alert("Failed to update product");
        console.error(response.data);
      }
      console.log(response);
    } catch (error) {
      alert(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="w-[1218px]">
          <Link href="/productnav" className="flex h-14 items-center ju">
            <img src="assets/icons/arrow.svg" alt="" />
            <p>Бүтээгдэхүүн нэмэх</p>
          </Link>
        </div>
        <div className="p-8 flex gap-6">
          <div className="w-1/2 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-[12px] flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Бүтээгдэхүүн нэмэх</p>
                {update ? (
                  <input
                    onChange={(e) => setProductName(e.currentTarget.value)}
                    defaultValue={product.productName}
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
                ) : (
                  <input
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Нэр"
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Нэмэлт мэдээлэл</p>
                {update ? (
                  <input
                    onChange={(e) => setDescription(e.target.value)}
                    defaultValue={product.description}
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
                ) : (
                  <input
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Барааны код</p>
                <input
                  onChange={(e) => setProductNumber(e.target.value)}
                  placeholder="#12345678"
                  className="bg-[#F7F7F8] p-2 rounded-[8px]"
                  type="text"
                />
              </div>
            </div>

            <div>
              <div className="h-[231px] p-6 flex flex-col gap-4 border rounded-2xl bg-white">
                <p className="text-sm font-semibold">Бүтээгдэхүүний зураг</p>
                <div className="flex gap-6 justify-between">
                  <label
                    id="avatarLable"
                    className=" cursor-pointer w-1/3 h-[125px] border-dashed border-gray-200 border-2 rounded-2xl flex justify-center items-center"
                  >
                    <img src="assets/icons/addedImage.svg" alt="" />
                    <input
                      hidden
                      type="file"
                      className=""
                      id="avatar"
                      onChange={(e) => {
                        setImages(e.target.files[0]);
                      }}
                    />
                  </label>
                  <label className="cursor-pointer w-1/3 h-[125px] border-dashed border-gray-200 border-2 rounded-2xl flex justify-center items-center">
                    <img src="assets/icons/addedImage.svg" alt="" />
                    <input
                      hidden
                      type="file"
                      className=""
                      onChange={(e) => {
                        setImages(e.target.files[0]);
                      }}
                    />
                  </label>
                  <label className="cursor-pointer w-1/3 h-[125px] border-dashed border-gray-200 border-2 rounded-2xl flex justify-center items-center">
                    <img src="assets/icons/addedImage.svg" alt="" />
                    <input
                      hidden
                      type="file"
                      className=""
                      onChange={(e) => {
                        setImages(e.target.files[0]);
                      }}
                    />
                  </label>
                  <button>
                    <img src="assets/icons/add.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-[12px] flex gap-4">
              <div className="flex flex-col w-1/2 gap-2">
                <p className="text-sm font-semibold">Үндсэн үнэ</p>
                {update ? (
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    defaultValue={product.price}
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
                ) : (
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Үндсэн үнэ"
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
                )}
              </div>

              <div className="flex flex-col w-1/2 gap-2">
                <p className="text-sm font-semibold">Үлдэгдэл тоо ширхэг</p>
                {update ? (
                  <input
                    onChange={(e) => setQty(e.target.value)}
                    defaultValue={product.qty}
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
                ) : (
                  <input
                    onChange={(e) => setQty(e.target.value)}
                    placeholder="Үлдэгдэл тоо ширхэг"
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-6">
            <div className=" flex flex-col p-6 gap-4 bg-white rounded-lg">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Ерөнхий ангилал</p>
                <input
                  className="h-14 bg-[#F7F7F8] rounded-[8px] p-2"
                  placeholder="Сонгох"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Дэд ангилал</p>
                <input
                  className="h-14 bg-[#F7F7F8] rounded-[8px] p-2"
                  placeholder="Сонгох"
                  type="text"
                />
              </div>
            </div>

            <div className="p-6 flex flex-col gap-6 rounded-[12px] bg-white">
              <p className="text-lg font-semibold">Төрөл</p>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <p>Өнгө</p>
                  <button className="pl-[25px]">
                    <img src="assets/icons/add.svg" alt="" />
                  </button>
                </div>

                <div className="flex gap-2">
                  <p>Хэмжээ</p>
                  <button className="pl-[3px]">
                    <img src="assets/icons/add.svg" alt="" />
                  </button>
                </div>
              </div>

              <button className="border-[1px] border-[#D6D8DB] h-9 w-[118px] rounded-[8px] font-semibold">
                Төрөл нэмэх
              </button>
            </div>

            <div className="p-6 flex flex-col gap-1 bg-white h-[184px] rounded-[12px]">
              <p className="font-semibold">Таг</p>

              <input
                placeholder="Таг нэмэх"
                className="bg-[#F7F7F8] p-2 h-[58px] rounded-[8px]"
                type="text"
              />

              <p className="text-sm text-[#5E6166]">
                Санал болгох: Гутал , Цүнх , Эмэгтэй
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-8">
          {update ? (
            <button
              onClick={updateProduct}
              className="py-4 px-5 rounded-[8px] bg-black border-[1px] border-[#D6D8DB] text-white"
            >
              Засах
            </button>
          ) : (
            <button
              onClick={addProduct}
              className="py-4 px-5 rounded-[8px] bg-black border-[1px] border-[#D6D8DB] text-white"
            >
              Нийтлэх
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
