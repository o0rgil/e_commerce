/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import Loadingpage from "../pages/loading";
import { useRouter } from "next/router";
import { instance } from "@/instance";
import { Loading } from "../components/sub_components/Loading";
import { link } from "fs";

export const TestingProduct = () => {
  const router = useRouter();
  const [bagName, setBagName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [bagType, setBagType] = useState("");
  const [sale, setSale] = useState("");
  const [colorInput, setColorInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<FileList | null>(null);
  // const [fileInputs, setFileInputs] = useState<string[]>([]);

  const [colors, setColors] = useState<
    { colorName: string; bagCode: string; images: string[] }[]
  >([]);

  const [uploadedImage01, setUploadedImage01] = useState<string | undefined>();
  const [uploadedImage02, setUploadedImage02] = useState<string | undefined>();
  const [uploadedImage03, setUploadedImage03] = useState<string | undefined>();
  // console.log(uploadedImage, "uploadedImage");
  const [imageLoading01, setImageLoading01] = useState(false);
  const [imageLoading02, setImageLoading02] = useState(false);
  const [imageLoading03, setImageLoading03] = useState(false);
  const handleBack = () => {
    router.push("/productnav");
  };

  const handleAddBag = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const bagData = {
        bagName,
        price,
        brand,
        bagType,
        sale,
        colors: colors.map((color) => ({
          colorName: color.colorName,
          bagCode: color.bagCode,
          images: color.images,
        })),
      };
      console.log(bagData, "BagData");
      const response = await axios.post(
        "http://localhost:8080/bagCreate",
        bagData
      );
      console.log(response.data.message);
      alert(response.data.message);
      setBagName("");
      setPrice("");
      setBrand("");
      setBagType("");
      setSale("");
      setColors([]);
      setImages(null);
    } catch (error) {
      console.error("Error creating bag:", error);
    } finally {
      setLoading(false);
    }
  };

  //Uploading image and recieving to uploadedImage state =====================================
  // Upload01 ===
  const uploadImage01 = async (
    e: React.ChangeEvent<HTMLInputElement>,
    inputIndex: number
  ) => {
    setImageLoading01(true);
    const config = { headers: { "Content-type": "multipart/form-data" } };
    const formData = new FormData();
    const target = e.target;
    const selectedFile = target.files as FileList;
    formData.append("image", selectedFile[0]);
    try {
      const res = await instance.post("/upload", formData, config);
      console.log(res, "Response");
      setUploadedImage01(res.data.imageUrl);
      alert("Зураг амжилттай Cloudinary-руу орлоо");
    } catch (error) {
      alert("Зураг оруулахад алдаа гарлаа");
    } finally {
      setImageLoading01(false);
    }
  };
  // Upload02 ===
  const uploadImage02 = async (
    e: React.ChangeEvent<HTMLInputElement>,
    inputIndex: number
  ) => {
    setImageLoading02(true);
    const config = { headers: { "Content-type": "multipart/form-data" } };
    const formData = new FormData();
    const target = e.target;
    const selectedFile = target.files as FileList;
    formData.append("image", selectedFile[0]);
    try {
      const res = await instance.post("/upload", formData, config);
      console.log(res, "Response");
      setUploadedImage02(res.data.imageUrl);
      alert("Зураг амжилттай Cloudinary-руу орлоо");
    } catch (error) {
      alert("Зураг оруулахад алдаа гарлаа");
    } finally {
      setImageLoading02(false);
    }
  };
  //upload03 ===
  const uploadImage03 = async (
    e: React.ChangeEvent<HTMLInputElement>,
    inputIndex: number
  ) => {
    setImageLoading03(true);
    const config = { headers: { "Content-type": "multipart/form-data" } };
    const formData = new FormData();
    const target = e.target;
    const selectedFile = target.files as FileList;
    formData.append("image", selectedFile[0]);
    try {
      const res = await instance.post("/upload", formData, config);
      console.log(res, "Response");
      setUploadedImage03(res.data.imageUrl);
      alert("Зураг амжилттай Cloudinary-руу орлоо");
    } catch (error) {
      alert("Зураг оруулахад алдаа гарлаа");
    } finally {
      setImageLoading03(false);
    }
  };
  //=========================================

  // Adding colors===========================
  const handleColorAdd = () => {
    if (colorInput !== "") {
      setImages(null);
      let newCode = Math.random().toString(16).slice(2, 8);
      const imagesArray: (string | undefined)[] = [
        uploadedImage01,
        uploadedImage02,
        uploadedImage03,
      ];
      const filteredImages = imagesArray.filter(
        (image) => image !== undefined
      ) as string[];
      setColors((prev) => [
        ...prev,
        {
          colorName: colorInput,
          bagCode: newCode,
          images: filteredImages,
        },
      ]);
      setColorInput("");
    }
  };

  const handleColorDelete = (colorIndex: number) => {
    const updatedColors = [...colors];
    updatedColors.splice(colorIndex, 1);
    setColors(updatedColors);
  };
  console.log("images", images);
  return (
    <div className="flex flex-col items-center">
      <button
        className="mt-10 border border-black px-4 py-1 rounded-lg bg-white flex gap-4 items-center hover:bg-black hover:text-white duration-300"
        onClick={handleBack}>
        <i className="fa-solid fa-arrow-left"></i>
        Бүтээгдэхүүнээ харах
      </button>
      {loading ? (
        <Loadingpage />
      ) : (
        <div className="flex flex-col bg-white w-[800px] justify-center p-8 gap-2 items-between mt-12 rounded-xl">
          <label className="flex justify-between">
            Bag Name:
            <input
              type="text"
              value={bagName}
              onChange={(e) => setBagName(e.target.value)}
              className="border px-2"
            />
          </label>
          <label className="flex justify-between">
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border px-2"
            />
          </label>
          <label className="flex justify-between">
            Brand:
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="border cursor-pointer">
              <option value="">Select Brand</option>
              <option value="Prada">Prada</option>
              <option value="LV">LOUIS VUITTON</option>
              <option value="Gucci">Gucci</option>
              <option value="Hermes">Hermes</option>
            </select>
          </label>
          <label className="flex justify-between">
            Bag Type:
            <select
              value={bagType}
              onChange={(e) => setBagType(e.target.value)}
              className="border cursor pointer">
              <option value="">Select Bag Type</option>
              <option value="Hand_bag">Hand bag</option>
              <option value="Accessory_bag">Accessory bag</option>
              <option value="Travel_bag">Travel bag</option>
              <option value="Back_pack">Back pack</option>
            </select>
          </label>

          <label className="flex justify-between">
            Sale:
            <input
              type="number"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
              className="border px-2"
            />
          </label>
          <label>
            <div className=" border p-4 border-gray-300 border-dashed">
              <p>Colors:</p>

              <div className="flex justify-between flex-col">
                <input
                  type="text"
                  value={colorInput}
                  onChange={(e) => setColorInput(e.target.value)}
                  className="border w-[150px] px-2"
                />
                {/* Зураг оруулах хэсэг ===== */}
                <div className="flex justify-around my-6">
                  <div className="relative w-[200px] h-[150px] border rounded-xl border-dashed">
                    {imageLoading01 ? (
                      <div className="flex justify-center mt-6">
                        <Loading />
                      </div>
                    ) : (
                      <div className="absolute mt-9 ml-10">
                        {uploadedImage01 ? "Зураг солих" : "Зураг оруулах"}{" "}
                      </div>
                    )}
                    <img
                      src={uploadedImage01}
                      alt=""
                      className="opacity-20 w-full h-full absolute"
                    />
                    <input
                      onChange={(e) => uploadImage01(e)}
                      type="file"
                      accept="image/*"
                      className="opacity-0 absolute w-full h-full bg-black"
                    />
                  </div>

                  <div className="relative w-[200px] h-[150px] border rounded-xl border-dashed">
                    {imageLoading02 ? (
                      <div className="flex justify-center mt-6">
                        <Loading />
                      </div>
                    ) : (
                      <div className="absolute mt-9 ml-10">
                        {uploadedImage02 ? "Зураг солих" : "Зураг оруулах"}{" "}
                      </div>
                    )}
                    <img
                      src={uploadedImage02}
                      alt=""
                      className="opacity-20 w-full h-full absolute"
                    />
                    <input
                      onChange={(e) => uploadImage02(e)}
                      type="file"
                      accept="image/*"
                      className="opacity-0 absolute w-full h-full bg-black"
                    />
                  </div>
                  <div className="relative w-[200px] h-[150px] border rounded-xl border-dashed">
                    {imageLoading03 ? (
                      <div className="flex justify-center mt-6">
                        <Loading />
                      </div>
                    ) : (
                      <div className="absolute mt-9 ml-10">
                        {uploadedImage03 ? "Зураг солих" : "Зураг оруулах"}{" "}
                      </div>
                    )}
                    <img
                      src={uploadedImage03}
                      alt=""
                      className="opacity-20 w-full h-full absolute"
                    />
                    <input
                      onChange={(e) => uploadImage03(e)}
                      type="file"
                      accept="image/*"
                      className="opacity-0 absolute w-full h-full bg-black"
                    />
                  </div>
                </div>
                {/* ============= */}
                <button
                  onClick={handleColorAdd}
                  type="button"
                  className="border px-3 rounded hover:text-white hover:bg-black duration-300">
                  Add Color
                </button>
              </div>
            </div>
            <ul>
              {colors.map(
                ({ colorName, bagCode, images: colorImages }, colorIndex) => (
                  <li
                    key={colorIndex + colorName}
                    className="flex items-center justify-around w-full">
                    {colorName}
                    <div>
                      <p className="text-[10px] text-gray-500">Bag code:</p>
                      <div>{bagCode}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500">Images</div>
                      {colorImages.map((imageUrl, index) => (
                        <img
                          key={index}
                          src={imageUrl}
                          alt={`Color ${colorIndex} Image ${index}`}
                          className="w-[50px] h-[50px]"
                        />
                      ))}
                    </div>
                    <button
                      className=""
                      type="button"
                      onClick={() => handleColorDelete(colorIndex)}>
                      <i className="fa-solid fa-trash text-gray-400 text-sm"></i>
                    </button>
                  </li>
                )
              )}
            </ul>
          </label>
          <button
            type="submit"
            onClick={handleAddBag}
            className="border py-1 rounded-lg hover:text-white hover:bg-black duration-300">
            Create Bag
          </button>
        </div>
      )}
    </div>
  );
};
