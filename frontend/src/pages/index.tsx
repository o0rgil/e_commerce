import App from "@/components/CountDown";
import { SectionMain } from "@/components/SectionMain";
import { SectionRecommend } from "@/components/SectionRecommend";
import { SectionSale } from "@/components/SectionSale";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-100 ">
      <SectionMain />
      <SectionSale />
    </div>
  );
}
