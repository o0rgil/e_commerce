/** @format */

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "@/components/Loading";
import LoadingPage from "@/components/LoadingPage";
import { BoxStyle } from "@/components/bags/BoxStyle";

const BASE_URL = "http://localhost:8080";
interface Bags {
  _id: string;
  images: string[];
  bagName: string;
}

export default function Gucci() {
  const [products, setProducts] = useState<Bags[]>([]);
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
    <div className="bg-white">
      <Header />
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-4 gap-1">
          {products.map((bag) => (
            <BoxStyle key={bag._id} bags={bag} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
