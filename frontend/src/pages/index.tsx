/** @format */

import { SectionMain } from "@/components/SectionMain";
import { SectionSale } from "@/components/SectionSale";

import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-100 ">
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <SectionMain />
      <SectionSale /> */}
      {/* <Login /> */}
    </div>
  );
}
