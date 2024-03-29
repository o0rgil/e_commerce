/** @format */

import React, { useState } from "react";

interface Bag {
  bagName?: string;
  colors: { images: any[] }[];
}

interface BoxStyleProps {
  bags: Bag;
}

export const BoxStyle: React.FC<BoxStyleProps> = ({ bags }) => {
  const [index, setIndex] = useState(0);
  console.log("bags", bags);

  const handlePrevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? bags.colors[0].images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setIndex((prevIndex) =>
      prevIndex === bags.colors[0].images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-[300px]">
      <div className="relative w-full h-[300px]">
        <div className="carousel-container relative w-full h-full hover:cursor-pointer">
          {bags.colors[0]?.images.map((image: any, idx: number) => (
            <img
              key={idx}
              src={image || "/download.png"}
              alt={`Color ${idx + 1}`}
              style={{ display: idx === index ? "block" : "none" }}
            />
          ))}
          <div className="absolute flex justify-between left-5 right-5 top-1/2 transform -translate-y-1/2">
            <button className="bg-red-500" onClick={handlePrevClick}>
              ❮
            </button>
            <button onClick={handleNextClick}>❯</button>
          </div>
          <div className="absolute bottom-3 items-center left-3 right-5 flex justify-between">
            <h1>{bags.bagName || "Gucci"}</h1>
            <div className="flex gap-1">
              <div className="border border-spacing-2 rounded-full w-4 h-4 " />
              <div className="border border-spacing-2 rounded-full w-4 h-4 " />
              <div className="border border-spacing-2 rounded-full w-4 h-4 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
