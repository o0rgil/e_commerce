import Image from "next/image";
import { Inter } from "next/font/google";
import { LeftNavBar } from "./components/LeftNavBar";

import { DashBoard } from "../pages/components/DashBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex bg-gray-200 w-screen h-screen">
      <LeftNavBar />
      <DashBoard />
      {/* Testing */}
    </div>
  );
}

