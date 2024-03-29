/** @format */

import React from "react";
import { Loading } from "@/components/Loading";

const LoadingPage = () => {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 pr-[300px]">
        <Loading />
        <div className="text-center text-gray-400">Түр хүлээнэ үү...</div>
      </div>
    </div>
  );
};
export default LoadingPage;
