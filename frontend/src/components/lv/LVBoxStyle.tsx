/** @format */

import React, { useState } from "react";

interface Bags {
  _id: string;
  images: string[];
  bagName: string;
}
interface Bag {
  bagName?: string;
  colors: Bags[];
}

interface BoxStyleProps {
  bags: Bag;
}

export const LVBoxStyle = ({ bags }: { bags: Bag }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleColorSelect = (colorIndex: number) => {
    setSelectedColor(colorIndex);
    setSelectedImage(0);
  };

  const handlePrevClick = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0
        ? bags.colors[selectedColor].images.length - 1
        : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === bags.colors[selectedColor].images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <div className="border-r border-b">
      <div className="relative w-full h-full ">
        <div className="carousel-container relative w-full h-full ">
          {bags.colors[selectedColor]?.images.map((image: any, idx: number) => (
            <img
              key={idx}
              src={image}
              alt={`Color ${selectedColor + 1}`}
              style={{ display: idx === selectedImage ? "block" : "none" }}
            />
          ))}
          <div className="hover:cursor-pointer absolute flex justify-between inset-0 opacity-0 hover:opacity-100">
            <button className="p-3" onClick={handlePrevClick}>
              <p className="text-3xl">❮</p>
            </button>
            <button className="p-3" onClick={handleNextClick}>
              <p className="text-3xl">❯</p>
            </button>
          </div>
          <div className="absolute bottom-3 items-center flex justify-between">
            <h1>{bags.bagName}</h1>
            <div className="flex gap-2">
              {bags.colors.map((color, index) => (
                <div
                  key={index}
                  className={`border border-spacing-2 border-black rounded-full lg:w-4 lg:h-4 cursor-pointer w-2 h-2 ${
                    selectedColor === index ? "bg-black" : ""
                  }`}
                  onClick={() => handleColorSelect(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
