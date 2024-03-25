/** @format */

import { useState } from "react";
import axios from "axios";
import Loadingpage from "../pages/loading";
import { useRouter } from "next/router";

export const TestingProduct = () => {
  const router = useRouter();
  const [bagName, setBagName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [bagType, setBagType] = useState("");
  const [bagCode, setBagCode] = useState("");
  const [coupon, setCoupon] = useState("");
  const [sale, setSale] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [colorInput, setColorInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [generatedCode, setGeneratedCode] = useState<string[]>([]);

  const handleBack = () => {
    router.push("/productnav");
  };
  const handleAddBag = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const valueInput = {
        bagName,
        price,
        brand,
        bagType,
        bagCode,
        coupon,
        sale,
        colors,
      };
      console.log(valueInput, "valueInput");
      const response = await axios.post(
        "http://localhost:8080/bag_create",
        valueInput
      );
      console.log(response.data);
      alert(response.data.message);
      setBagName("");
      setPrice("");
      setBagCode("");
      setCoupon("");
      setSale("");
    } catch (error) {
      alert(error.response.data.message);
      console.error("Error creating bag:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleColorAdd = () => {
    if (colorInput !== "") {
      setColors([...colors, colorInput]);
      setColorInput("");
    } else {
      return;
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.value;
    const newImages = Array.from(imageFile);
    setImages([...images, ...newImages]);
  };
  var generateCode = Math.random().toString(16).slice(2).toString();

  const handleColorDelete = (index: number) => {
    const updatedColors = [...colors];
    updatedColors.splice(index, 1); // Remove the color at the specified index
    setColors(updatedColors);
    setGeneratedCode(generateCode);
  };

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
        <form className="flex flex-col bg-white w-[800px] justify-center p-8 gap-2 items-between mt-12 rounded-xl">
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
              <option value="Hand bag">Hand bag</option>
              <option value="Accessory bag">Accessory bag</option>
              <option value="Travel bag">Travel bag</option>
              <option value="Back pack">Back pack</option>
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
            Colors:
            <div className="flex flex-col justify-between">
              <input
                type="text"
                value={colorInput}
                onChange={(e) => setColorInput(e.target.value)}
                className="border w-[150px] px-2"
              />

              <input
                type="file"
                accept="image"
                onChange={(e: any) => {
                  setImages(e.target);
                }}
                multiple
                name=""
                id=""
              />
              <button
                onClick={handleColorAdd}
                type="button"
                className="border px-3 rounded hover:text-white hover:bg-black duration-300">
                Add Color
              </button>
            </div>
            <ul>
              {colors.map((color, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between w-[160px]">
                  {color}
                  {generatedCode.map((code) => {
                    code: {
                      code;
                    }
                  })}

                  <button
                    className=""
                    type="button"
                    onClick={() => handleColorDelete(index)}>
                    <i className="fa-solid fa-trash text-gray-400 text-sm"></i>
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-2">
              <ul>
                {images.map((image, index) => (
                  <p>{images}</p>
                ))}
              </ul>
            </div>
          </label>
          <button
            type="submit"
            onClick={handleAddBag}
            className="border py-1 rounded-lg hover:text-white hover:bg-black duration-300">
            Create Bag
          </button>
        </form>
      )}
    </div>
  );
};
