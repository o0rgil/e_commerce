import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { instance } from "@/instance";
import cloudinary from "cloudinary";

export const ProducStepOne= () => {


const [bagType, setBagType] = useState("")
const [bagBrand, setBagBrand] = useState("")
const [bagName, setBagName] = useState("")
const [price, setPrice] = useState("")

const addProductStepOne = async(e: any) => {
    try {
        const input = {
            bagType,
            bagBrand,
            bagName,
            price
        };
console.log("input", input)
await instance.post("/productCreate", input);

    } catch (error) {
        
    }
}



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
          <div className="w-full flex flex-col gap-6">
            <div className="bg-white p-6 rounded-[12px] flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Бүтээгдэхүүн нэмэх</p>
                  <input
                  onChange={(e) => setBagName(e.target.value)}
                    placeholder="Нэр"
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
              </div>
              <div className=" bg-white rounded-[12px] flex gap-4">
              <div className="flex flex-col w-full gap-2">
                <p className="text-sm font-semibold">Үндсэн үнэ</p>
                  <input
                  onChange={(e) => setPrice(e.target.value)}
                    placeholder="Үндсэн үнэ"
                    className="bg-[#F7F7F8] p-2 rounded-[8px]"
                    type="text"
                  />
              </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Brand</p>
                <select
                  className="border-[1px] bg-[#F7F7F8] p-2 rounded-[8px]"
                  onChange={(e) => {
                    const selectBrand = e.target.value;
                    setBagBrand(selectBrand);
                  }}
                  >
                  <option value=""></option>
                  <option value="LOUIS VUTTON">LV</option>
                  <option value="Hermes">Hermes</option>
                  <option value="Burberry">Burberry</option>
                  <option value="Dior">Dior</option>
                </select>
                {bagBrand}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Aнгилал</p>
                <select
                  className="border-[1px] bg-[#F7F7F8] p-2 rounded-[8px]"
                  onChange={(e) => {
                    const selectBagType = e.target.value;
                    setBagType(selectBagType);
                  }}
                  >
                  <option value="P"></option>
                  <option value="Hand bag">Hand Bag</option>
                  <option value="Travel bag">Travel Bag</option>
                  <option value="Back pack">Back Bag</option>
                  <option value="Accessory bag">Assessory Bag</option>
                </select>
                {bagType}
              </div>
            </div>
          </div>
        </div>

        <div  className="flex  p-8">
        <button
            onClick={addProductStepOne}
              className="py-4 px-5 rounded-[8px] bg-black border-[1px] border-[#D6D8DB] text-white">

                Үндсэн мэдээлэл илгээх
            </button>
          </div>
         

      </div>
    </div>
  );
};
