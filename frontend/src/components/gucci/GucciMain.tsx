/** @format */
import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import LoadingPage from "@/components/LoadingPage";
import { BoxStyle } from "@/components/bags/BoxStyle";
import { GucciHeader } from "./GucciHeader";
import { SearchValueContext } from "../../../contexts/SearchValue";

const BASE_URL = "http://localhost:8080";
interface Bags {
  _id: string;
  images: string[];
  bagName: string;
  adminColor: string;
  color: string;
}
interface Bag {
  bagName?: string;
  colors: Bags[];
  adminColor: string;
  color: string;
}

export default function GucciMain() {
  const [products, setProducts] = useState<Bag[]>([]);
  const [loading, setloading] = useState(false);
  const { searchValue, setSearchValue } = useContext(SearchValueContext);
  const [domData, setDomData] = useState<Bag[]>([]);

  const fetchProducts = async () => {
    setloading(true);
    try {
      const response = await axios.get(BASE_URL + "/gucciBag");
      setProducts(response.data.bags);
      setDomData(response.data.bags);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const filteringBySearchValue = useMemo(async () => {
    setDomData(
      products.filter((el) => {
        return (
          el.bagName?.toLowerCase().includes(searchValue.toLowerCase()) ||
          el.colors[0].color.toLowerCase().includes(searchValue.toLowerCase())
        );
      })
    );
  }, [searchValue]);
  return (
    <div className="bg-white">
      <GucciHeader />
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-4 gap">
          {domData.map((bag) => (
            <BoxStyle bags={bag} />
          ))}
        </div>
      )}
    </div>
  );
}
