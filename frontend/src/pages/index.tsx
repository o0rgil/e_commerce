/** @format */

import { ContactUs } from "@/components/ContactUs";
import { HomeSection } from "@/components/HomeSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>

      <HomeSection />

    </div>
  );
}
