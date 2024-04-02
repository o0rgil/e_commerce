/** @format */
import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "@/components/LoadingPage";
import { BoxStyle } from "@/components/bags/BoxStyle";

const BASE_URL = "http://localhost:8080";
interface Bags {
  _id: string;
  images: string[];
  bagName: string;
}
interface Bag {
  bagName?: string;
  colors: Bags[];
}

export default function GucciMain() {
  const [products, setProducts] = useState<Bag[]>([]);
  const [loading, setloading] = useState(false);

  const fetchProducts = async () => {
    setloading(true);
    try {
      const response = await axios.get(BASE_URL + "/gucciBag");
      setProducts(response.data.bags);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="bg-white flex flex-col items-center">
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {products.map((bag) => (
            <BoxStyle bags={bag} />
          ))}
        </div>
      )}

      <button className="bg-white py-3 px-5 rounded-xl my-10 text-black  w-[250px] border-[2px] hover:bg-black hover:text-white hover:border-black">
        Load All
      </button>
    </div>
  );
}
