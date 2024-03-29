/** @format */

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Footer = () => {
  const router = useRouter();
  const handleJumpHermes = () => {
    router.push("hermes");
  };
  const handleJumpGucci = () => {
    router.push("gucci");
  };
  const handleJumpPrada = () => {
    router.push("prada");
  };
  const handleJumpLouisVuitton = () => {
    router.push("LouisVuitton");
  };
  return (
    <div className="flex justify-center bg-white text-black text-[12px]">
      <div className="py-20 flex justify-between">
        <div className="flex">
          <div className="flex w-[620px]">
            <div className="flex flex-col gap-6 w-1/2">
              <p>MAY WE HELP YOU?</p>

              <div className=" flex flex-col gap-6">
                <u>
                  <a href="">My Order</a>
                </u>
                <u>
                  <a href="/faq">FAQs</a>
                </u>
                <u>
                  <a href="">Email Unsubscribe</a>
                </u>
                <u>
                  <a href="">Sitemop</a>
                </u>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-1/2">
              <p>THE COMPANY</p>

              <div className="flex flex-col gap-6 text-[14px]">
                <u>
                  <p className="cursor-pointer w-1/6" onClick={handleJumpGucci}>
                    Gucci
                  </p>
                </u>
                <u>
                  <p
                    className="cursor-pointer w-1/6"
                    onClick={handleJumpHermes}>
                    Hermes
                  </p>
                </u>
                <u>
                  <p
                    className="cursor-pointer w-1/6"
                    onClick={handleJumpLouisVuitton}>
                    LV
                  </p>
                </u>
                <u>
                  <p className="cursor-pointer w-1/6" onClick={handleJumpPrada}>
                    Prada
                  </p>
                </u>
              </div>
            </div>
          </div>

          <div className="w-[620px] flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <p>CONTACT US</p>

              <input
                className="h-[43px] outline-0 text-[16px] border-b bg-white"
                placeholder="FEEDBACK"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2 border-b">
                <input
                  className="text-[16px] outline-0 bg-white w-[600px] h-[43px]"
                  placeholder="Email"
                  type="text"
                />

                <button>
                  <img
                    className="w-4 h-4"
                    src="assets/icons/sendMail.svg"
                    alt=""
                  />
                </button>
              </div>

              <p className="text-[10px]">
                We will reply to your email after receiving your feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
