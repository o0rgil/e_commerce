import { useState, useEffect } from "react";
import { ColorInput } from "./ColorInput";
 
export const ProductStepTwo = () => {
    const [add,setAdd]=useState(0)
 
    const colorAdd=()=>{
        setAdd(prevStep => prevStep <= 2 ? prevStep + 1 : 2);
    }
 
  return (
    <div>
      <div className="flex flex-col">
        <div className="p-8 flex flex-col gap-6">
          <div className="w-full flex flex-col gap-6">
              <ColorInput/>
              {add>=1&& <ColorInput/> }
              {add>=2&&<ColorInput/>}
          </div>
          <div className="flex">
            <button onClick={colorAdd}  
              className=" w-[150px] py-4 px-5 rounded-[8px] bg-black border-[1px] border-[#D6D8DB] text-white">
              Өнгө нэмэх</button>
            <button
              className=" w-[150px] py-4 px-5 rounded-[8px] bg-black border-[1px] border-[#D6D8DB] text-white">
              Нийтлэх
            </button></div>
        </div>
      </div>
    </div>
  );
};