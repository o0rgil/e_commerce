/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";
import { BoxStyle } from "../bags/BoxStyle";

const BASE_URL = "http://localhost:8080";
interface Bags {
  _id: string;
  images: string[];
  bagName: string;
}

export default function HermesMain() {
  const [products, setProducts] = useState<Bags[]>([]);
  const [loading, setloading] = useState(false);

  const fetchProducts = async () => {
    setloading(true);
    try {
      const response = await axios.get(BASE_URL + "/hermesBag");
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
    <div>
      <div className="bg-white">
        {loading ? (
          <LoadingPage />
        ) : (
          <div className="grid grid-cols-3 ">
            {products.map((bag) => (
              <BoxStyle key={bag._id} bags={bag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
