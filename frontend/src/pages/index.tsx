import { HomeSection } from "@/components/HomeSection";
import { SectionMain } from "@/components/SectionMain";
import { SectionSale } from "@/components/SectionSale";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <HomeSection />
    </div>
  );
}
