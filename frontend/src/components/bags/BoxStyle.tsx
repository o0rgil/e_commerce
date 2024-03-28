/** @format */

import React, { useState } from "react";

export const BoxStyle = ({
  bags,
}: {
  bags: { bagName?: String; colors: { images: any[] }[] };
}) => {
  const [index, setIndex] = useState(0);
  console.log("bags", bags);
  const handlePrevClick = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="w-[300px]">
      <div className="relative w-full h-[300px]">
        <div className="carousel-container relative w-full h-full hover:cursor-pointer">
          {bags.colors[0]?.images.map((image: any, index: number) => (
            <img
              defaultValue={index}
              key={index + 1}
              src={image || "/download.png"}
              alt={`Color ${index + 1}`}
            />
          ))}
          <div className="absolute flex justify-between left-5 right-5 top-1/2 transform -translate-y-1/2">
            <button onClick={handlePrevClick}>❮</button>
            <button onClick={handleNextClick}>❯</button>
          </div>
          <div className="absolute bottom-3 items-center left-3 right-5 flex justify-between">
            <h1>{bags.bagName || "Gucci"}</h1>
            <div className="flex gap-1">
              <div className="border border-spacing-2 rounded-full w-4 h-4 bg-black" />
              <div className="border border-spacing-2 rounded-full w-4 h-4 bg-red-500" />
              <div className="border border-spacing-2 rounded-full w-4 h-4 bg-violet-500" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
