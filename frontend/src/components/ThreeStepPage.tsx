import React, { useState } from "react";

import Link from "next/link";

const ThreeStepPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleMinusStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <>
          <div className=" flex justify-center items-center flex-col p-10 gap-28">
            <div className="flex justify-center items-center gap-12 flex-col">
              <ul className="steps  w-[792px]">
                <li className="step  step-neutral ">Утасны дугаар</li>
                <li className="step ">Xаяг</li>
                <li className="step ">Нууц үг</li>
              </ul>
            </div>
            <div className=" flex flex-col gap-8 w-[404px]">
              <div className=" flex flex-col gap-1">
                <div className=" flex flex-col gap-3">
                  <p className=" text-3xl font-bold">Утасны дугаар</p>
                  <p className=" text-lg font-bold ">
                    таны утасны дугаар хэд вэ?
                  </p>
                </div>
                <input
                  className=" bg-gray-100 w-[404px] rounded-lg h-[56px] p-3  "
                  placeholder="Дугаар"
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <button className=" btn rounded-full ">
                  <Link href="signup">
                    <img src="assets/icons/leftArrow.svg" />
                  </Link>
                </button>
                <button onClick={handleNextStep} className="button btn flex ">
                  Дараах
                  <img className=" " src="assets/icons/rightArrowBlack.svg" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className=" flex justify-center items-center flex-col p-10 gap-28">
            <div className="flex justify-center items-center gap-12 flex-col">
              <ul className="steps w-[792px]">
                <li className="step step-neutral">Утасны дугаар</li>
                <li className="step step-neutral">Xаяг</li>
                <li className="step ">Нууц үг</li>
              </ul>
            </div>

            <div className=" flex flex-col gap-8 w-[404px]">
              <div className=" flex flex-col gap-3">
                <div className=" flex flex-col gap-3">
                  <p className=" text-3xl font-bold">Xаяг</p>
                  <p className=" text-lg font-bold ">Гэрийн хаяг хаана бэ?</p>
                </div>
                <div>
                  <p>Хот/Аймаг</p>
                  <select
                    className=" bg-gray-100 w-[404px] rounded-lg h-[56px] p-3  "
                    name=""
                    id=""
                  >
                    <option disabled>Сонгох</option>
                    <option>Улаанбаатар хот</option>
                    <option>Архангай</option>
                    <option>Баян-Өлгий</option>
                    <option>Баянхонгор</option>
                    <option>Булган</option>
                    <option>Говь-Алтай</option>
                    <option>Говьсүмбэр</option>
                    <option>Дархан-Уул</option>
                    <option>Дорноговь</option>
                    <option>Дорнод</option>
                    <option>Дундговь</option>
                    <option>Завхан</option>
                    <option>Орхон</option>
                    <option>Өвөрхангай</option>
                    <option>Өмнөговь</option>
                    <option>Сүхбаатар</option>
                    <option>Сэлэнгэ</option>
                    <option>Төв</option>
                    <option>Увс</option>
                    <option>Ховд</option>
                    <option>Хөвсгөл</option>
                    <option>Хэнтий</option>
                  </select>
                </div>
                <div>
                  <p>Сум/Дүүрэг</p>
                  <input
                    className=" bg-gray-100 w-[404px] rounded-lg h-[56px] p-3  "
                    placeholder="Сум/Дүүрэг"
                    type="text"
                  />
                </div>
                <div>
                  <p>Хороо</p>
                  <input
                    className=" bg-gray-100 w-[404px] rounded-lg h-[56px] p-3  "
                    placeholder="Хороо"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handleMinusStep}
                  className=" btn rounded-full "
                >
                  <img src="assets/icons/leftArrow.svg" />
                </button>
                <button onClick={handleNextStep} className="button btn flex ">
                  Дараах
                  <img className=" " src="assets/icons/rightArrowBlack.svg" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <>
          <div className=" flex justify-center items-center flex-col p-10 gap-28">
            <div className="flex justify-center items-center gap-12 flex-col">
              <ul className="steps w-[792px]">
                <li className="step step-neutral">Утасны дугаар</li>
                <li className="step step-neutral">Xаяг</li>
                <li className="step step-neutral">Нууц үг</li>
              </ul>
            </div>
            <div className=" flex flex-col gap-6 w-[404px]">
              <p className=" text-3xl font-bold">Нууц үг</p>
              <div className="flex justify-between  flex-col gap-8 w-[404px]">
                <div className=" flex flex-col gap-3">
                  <p>Нууц үг</p>
                  <input
                    className=" bg-gray-100 w-[404px] rounded-lg h-[56px] p-3  "
                    placeholder="Дугаар"
                    type="text"
                  />
                  <p>Дахин нууц үг</p>
                  <input
                    className=" bg-gray-100 w-[404px] rounded-lg h-[56px] p-3  "
                    placeholder="Дугаар"
                    type="password"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handleMinusStep}
                    className=" btn rounded-full "
                  >
                    <img src="assets/icons/leftArrow.svg" />
                  </button>
                  <button className="button btn flex ">
                    Дараах
                    <img className=" " src="assets/icons/rightArrowBlack.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThreeStepPage;
