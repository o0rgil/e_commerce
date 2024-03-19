import React from "react";

export const Products = () => {
  return (
    <form>
      <div className="flex flex-col">
        <div className="w-[1218px]">
          <button className="flex h-14 items-center">
            <img src="assets/icons/arrow.svg" alt="" />
            <p>Бүтээгдэхүүн нэмэх</p>
          </button>
        </div>

        <div className="p-8 h-full w-full flex gap-6">
          <div className="w-[563px] flex flex-col gap-6">
            <div className="bg-white p-6 rounded-[12px] flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Бүтээгдэхүүн нэмэх</p>
                <input
                  placeholder="Нэр"
                  className="bg-[#F7F7F8] p-2 rounded-[8px]"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Нэмэлт мэдээлэл</p>
                <input
                  placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                  className="bg-[#F7F7F8] p-2 rounded-[8px]"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Барааны код</p>
                <input
                  placeholder="#12345678"
                  className="bg-[#F7F7F8] p-2 rounded-[8px]"
                  type="text"
                />
              </div>
            </div>

            <div>
              <div className="w-[563px] h-[231px] border rounded-2xl bg-white">
                <p className="pt-6 pl-6 pb-4">Бүтээгдэхүүний зураг</p>
                <div className="flex pl-6 gap-6">
                  <button className="w-[125px] h-[125px] border-dashed border-gray-200 border-2 rounded-2xl flex justify-center items-center">
                    <img src="assets/icons/image.svg" alt="" />
                  </button>
                  <button className="w-[125px] h-[125px] border-dashed border-gray-200 border-2 rounded-2xl flex justify-center items-center">
                    <img src="assets/icons/image.svg" alt="" />
                  </button>
                  <button className="w-[125px] h-[125px] border-dashed border-gray-200 border-2 rounded-2xl flex justify-center items-center">
                    <img src="assets/icons/image.svg" alt="" />
                  </button>
                  <button>
                    <img src="assets/icons/add.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-[12px] flex gap-4">
              <div className="flex flex-col w-1/2 gap-2">
                <p className="text-sm font-semibold">Үндсэн үнэ</p>
                <input
                  placeholder="Үндсэн үнэ"
                  className="bg-[#F7F7F8] p-2 rounded-[8px]"
                  type="text"
                />
              </div>

              <div className="flex flex-col w-1/2 gap-2">
                <p className="text-sm font-semibold">Үлдэгдэл тоо ширхэг</p>
                <input
                  placeholder="Үлдэгдэл тоо ширхэг"
                  className="bg-[#F7F7F8] p-2 rounded-[8px]"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="w-[563px] flex flex-col gap-6">
            <div className=" flex flex-col p-6 gap-4 w-[573px] bg-white rounded-lg">
              <div className="flex flex-col gap-2">
                <p>Ерөнхий ангилал</p>
                <select className=" bg-gray-100 rounded-lg border p-2">
                  <option disabled selected>
                    Сонгох
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <p>Дэд ангилал</p>
                <select className="bg-gray-100 rounded-lg border p-2">
                  <option disabled selected>
                    Сонгох
                  </option>
                </select>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-6 rounded-[12px] bg-white">
              <p className="text-lg font-semibold">Төрөл</p>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <p>Өнгө</p>
                  <button>
                    <img src="assets/icons/add.svg" alt="" />
                  </button>
                </div>

                <div className="flex gap-2">
                  <p>Хэмжээ</p>
                  <button>
                    <img src="assets/icons/add.svg" alt="" />
                  </button>
                </div>
              </div>

              <button className="border-[1px] border-[#D6D8DB] h-9 w-[118px] rounded-[8px] font-semibold">
                Төрөл нэмэх
              </button>
            </div>

            <div className="p-6 flex flex-col gap-1 bg-white h-[210px] rounded-[12px]">
              <p className="font-semibold">Таг</p>

              <input
                placeholder="Таг нэмэх"
                className="bg-[#F7F7F8] p-2 h-[58px] rounded-[8px]"
                type="text"
              />

              <p className="text-sm text-[#5E6166]">
                Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-8 gap-6">
          <button className="py-4 px-5 rounded-[8px] bg-white border-[1px] border-[#D6D8DB]">
            Ноорог
          </button>

          <button className="py-4 px-5 rounded-[8px] bg-black border-[1px] border-[#D6D8DB] text-white">
            Нийтлэх
          </button>
        </div>
      </div>
    </form>
  );
};
