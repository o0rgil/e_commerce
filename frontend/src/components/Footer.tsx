import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center bg-white text-[12px]">
      <div className="py-20 flex justify-between">
        <div className="flex">
          <div className="flex w-[620px]">
            <div className="flex flex-col gap-6 w-1/2">
              <p>MAY WE HELP YOU?</p>

              <div className="text-white flex flex-col gap-6">
                <u>
                  <a href="">Contact us</a>
                </u>
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

              <div className="flex flex-col gap-6 text-white text-[14px]">
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
              <p>FEEDBACK</p>

              <input
                className="bg-black h-[43px] text-[16px] border-b"
                placeholder="FEEDBACK"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-6">
              <p>SIGN UP FOR GUCCI UPDATES</p>

              <p className="text-white">
                By entering your email address below, you consent to receiving
                our newsletter with access to our latest collections, events and
                initiatives.
              </p>

              <input
                className="text-[16px] bg-black h-[43px] border-b"
                placeholder="Email"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
