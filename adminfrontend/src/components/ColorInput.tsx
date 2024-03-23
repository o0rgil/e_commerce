import { instance } from "@/instance"
import axios from "axios"
import { Inspiration } from "next/font/google"
import { eventNames } from "process"
import { useState, useEffect } from "react"

 
export const ColorInput=()=>{

    const [images, setImages] = useState("")

    const uploadImage = () => {
        // console.log(files[0])
        const formData = new FormData();
        formData.append("file", images);
        formData.append("upload_preset" , "ohoejzse");

        // axios.post("https://api.cloudinary.com/v1_1/dazsxzo7i/image/upload", formData).then((response) => {
        //     console.log("Response", response)
        // });
    }
   
    return(
        <div>
            <div className="p-6 flex flex-col gap-4 border rounded-2xl bg-white">
        <div className="flex flex-col gap-2">
          <p>Өнгө</p>
          <input
            placeholder="White"
            className="bg-[#F7F7F8] p-2 rounded-[8px]"
            type="text"
          />
        </div>
 
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">Барааны код</p>
          <input
            placeholder="#12345678"
            className="bg-[#F7F7F8] p-2 rounded-[8px]"
            type="text"
          />
        </div>
 
        <p className="text-sm font-semibold">Бүтээгдэхүүний зураг</p>
        <div className="flex gap-6">
        <div className="flex flex-col gap-4 items-center justify-center w-1/3" >  
              <label 
            id="avatarLable"
            className=" cursor-pointer w-full h-[200px] border-dashed border-gray-200 border-2 rounded-2xl flex justify-center items-center">
            <img className="w-[]" src="assets/icons/addedImage.svg" alt="" />
            <input
            onChange={(event) => {
               setImages(event.target.files[0])
            }}
              hidden
              type="file"
              name="image"
              id="avatar"
              
            />
            <p className="pl-4">zurag songoh</p>
              </label>
              <button onClick={uploadImage} className="border-2 w-60 h-10 rounded-lg bg-[#F7F7F8]">upload image</button>
          </div>
       
   
          <div className="flex flex-col gap-4 w-1/3 items-center justify-center" >  
              <label 
            id="avatarLable"
            className=" cursor-pointer w-full h-[200px] border-dashed border-gray-200 border-2 rounded-2xl flex justify-center items-center">
            <img className="" src="assets/icons/addedImage.svg" alt="" />
            <input
              hidden
              type="file"
              name="image"
              id="avatar"
            />
                 <p className="pl-4">zurag songoh</p>
              </label>
              <button className="border-2 w-60 h-10 rounded-lg bg-[#F7F7F8]">upload image</button>
          </div>
          <div className="flex gap-4 flex-col w-1/3 items-center justify-center" >  
              <label 
            id="avatarLable"
            className=" cursor-pointer w-full h-[200px] border-dashed border-gray-200 border-2 rounded-2xl flex justify-center items-center">
            <img className="w-[]" src="assets/icons/addedImage.svg" alt="" />
            <input
              hidden
              type="file"
              name="image"
              id="avatar"
            />
                 <p className="pl-4">zurag songoh</p>
              </label>
              <button className="border-2 w-60 h-10 rounded-lg bg-[#F7F7F8]">upload image</button>
          </div>
        </div>
      </div>
      </div>
    )
}