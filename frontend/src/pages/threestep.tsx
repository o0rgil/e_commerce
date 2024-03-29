/** @format */

import ThreeStepPage from "@/components/ThreeStepPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <ThreeStepPage />
    </div>
  );
}
