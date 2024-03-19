import Image from "next/image";
import { Inter } from "next/font/google";
import { LeftNavBar } from "./components/LeftNavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-200 w-screen h-screen">
      <LeftNavBar />
    </div>
  );
}
