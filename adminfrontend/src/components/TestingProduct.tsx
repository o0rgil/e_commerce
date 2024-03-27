/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import Loadingpage from "../pages/loading";
import { useRouter } from "next/router";

export const TestingProduct = () => {
  const router = useRouter();
  const [bagName, setBagName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [bagType, setBagType] = useState("");
  // const [coupon, setCoupon] = useState("");
  const [sale, setSale] = useState("");

  const [colors, setColors] = useState<string[]>([]);
  const [colorInput, setColorInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState("");
  const [image, setImage] = useState<string[]>([]);

  const [bagCode, setBagCode] = useState<string[]>([]);
  const [generatedCode, setGeneratedCode] = useState("");

  const [colorsNaraa, setColorsNaraa] = useState<
    { colorName: string; bagCode: string }[]
  >([]);

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
        sale,
        colorsNaraa,
      };

      console.log(valueInput, "valueInput");
      console.log("images", images);
      console.log("colorsNaraa", colorsNaraa);
      const response = await axios.post(
        "http://localhost:8080/bagCreate",
        valueInput
      );
      console.log(response.data);
      alert(response.data.message);
      setBagName("");
      setPrice("");
      //   setBagCode("");
      // setCoupon("");
      setSale("");
    } catch (error) {
      // alert(error.response.data.message);
      console.error("Error creating bag:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleColorAdd = () => {
    if (colorInput !== "") {
      setImages("");
      let newCode = Math.random().toString(16).slice(2, 8);
      // const formData = new FormData();
      // formData.append("images", JSON.stringify(images));
      setColorsNaraa((prev) => [
        ...prev,
        { colorName: colorInput, bagCode: newCode, images: images },
      ]);

      if (setImages == setImages) {
        return;
      }
      setColors((prev) => [...prev, colorInput]);
      setColorInput("");
      setImage((prev) => [...prev, images]);
      setGeneratedCode(newCode);
      setBagCode((prev) => [...prev, newCode]);

      //   setGeneratedCode("");
    } else {
      return;
    }
  };

  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const imageFile = e.target.value;
  //     const newImages = Array.from(imageFile);
  //     setImages([...images, ...newImages]);
  //   };

  const handleColorDelete = (colorIndex: number) => {
    const updatedColors = [...colorsNaraa];
    updatedColors.splice(colorIndex, 1);
    setColorsNaraa(updatedColors);
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
            <p>Colors:</p>
            <div className="flex justify-between">
              <input
                type="text"
                value={colorInput}
                onChange={(e) => setColorInput(e.target.value)}
                className="border w-[150px] px-2"
              />
              <input
                onChange={(e: any) => {
                  setImages((prev) => [...prev, e.target.value]);
                }}
                type="file"
                accept="image"
                multiple
                name=""
                id=""
              />
              <input
                onChange={(e: any) => {
                  setImages((prev) => [...prev, e.target.value]);
                }}
                type="file"
                accept="image"
                multiple
                name=""
                id=""
              />
              <input
                onChange={(e: any) => {
                  setImages((prev) => [...prev, e.target.value]);
                }}
                type="file"
                accept="image"
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
              {colorsNaraa.map(({ colorName, bagCode }, colorIndex) => (
                <li
                  key={colorIndex + colorName}
                  className="flex items-center justify-between w-full">
                  {colorName}
                  <div>
                    <p className="text-[10px] text-gray-500">Bag code:</p>
                    <li>
                      <div>{bagCode}</div>
                    </li>
                    <li>{images}</li>
                  </div>
                  <button
                    className=""
                    type="button"
                    onClick={() => handleColorDelete(colorIndex)}>
                    <i className="fa-solid fa-trash text-gray-400 text-sm"></i>
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-2">
              <ul>
                {/* {images.map((image, index) => (
                  <img
                    src={URL.createObjectURL(image)}
                    key={index}
                    alt={`Image ${index}`}
                  />
                ))} */}
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
