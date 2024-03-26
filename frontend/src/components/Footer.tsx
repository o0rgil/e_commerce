/** @format */

import React from "react";

export default function footer() {
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
                  <a href="">FAQs</a>
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
                  <a href="">Gucci</a>
                </u>
                <u>
                  <a href="">Hermes</a>
                </u>
                <u>
                  <a href="">LV</a>
                </u>
                <u>
                  <a href="">Prada</a>
                </u>
              </div>
            </div>
          </div>

          <div className="w-[620px] flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <p>CONTACT US</p>

              <input
                className="h-[43px] text-[16px] border-b bg-white"
                placeholder="FEEDBACK"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2 border-b">
                <input
                  className="text-[16px] bg-white text-white w-[600px] h-[43px]"
                  placeholder="Email"
                  type="text"
                />

                <button>
                  <img className="w-6 h-6" src="assets/send.svg" alt="" />
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
}
