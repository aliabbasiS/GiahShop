import plantphoto from "../../../public/header/image123.png";
import plantphotoa from "../../../public/main/bdeceba119ae248d6078e71f65e5cc23.jpg";
import creditcart from "../../../public/main/credit_card.png";
import validation from "../../../public/main/validation.png";
import localshipping from "../../../public/main/local_shipping.png";
import leaf1 from "../../../public/main/leaf1.png";
import leaf2 from "../../../public/main/leaf2.png";
import babaadam from "../../../public/shopescard/img1.png";

import { useEffect, useState } from "react";
import shopCardMaker from './shopcardmaker';
import ShopCardMaker from "./shopcardmaker";

const Mainsection = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  const targetNumber1 = 924;
  const targetNumber2 = 234;
  const targetNumber3 = 128;

  const useDynamicCounter = (number: any, setNumber: any, targetNumber: any, slowThreshold: any) => {
    useEffect(() => {
      const interval = number >= slowThreshold ? 250 : 1;
      const timeoutId = setTimeout(() => {
        if (number < targetNumber) {
          setNumber((prevNumber) => prevNumber + 1);
        }
      }, interval);
      return () => clearTimeout(timeoutId);
    }, [number, targetNumber, slowThreshold]);
  };

  //
  useDynamicCounter(number1, setNumber1, targetNumber1, 920);
  useDynamicCounter(number2, setNumber2, targetNumber2, 220);
  useDynamicCounter(number3, setNumber3, targetNumber3, 110);

  return (
    <>
      <main className="md:hidden flex flex-col items-center w-full py-6 h-full gap-6">
        <div className=" w-1/2  grid place-content-center ">
          <img className=" rounded-full  aspect-square flex-1" src={plantphotoa} alt="" />
        </div>
        <div className="flex flex-col  text-center items-center  gap-8">
          <h1 className=" flex text-2xl lg:text-4xl font-bold">
            خرید راحت گیاه؛
            <span className="text-neutral-1">با گیاه لند</span>
          </h1>
          <article className="lg:text-xl w-full leading-6 text-center lg:w-3/4 text-gray-500 text-md sm:line-clamp-3 line-clamp-4">
            با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن. علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره
            بگیری.
          </article>
          <div className="w-full flex gap-2 px-8 ">
            <button className="md:w-1/2 w-full  bg-neutral-2 px-6 py-3 rounded-lg text-white">گیاهان تخفیف دار</button>
            <button className="md:w-1/2 w-full lg:justify-center gap-1 justify-evenly text-neutral-2 flex items-center flex-row-reverse text-center rounded-lg outline-dashed outline-1">
              <div className="flex items-center relative">
                <img className="w-4/5 relative" src="../../../public/header/vector.svg" alt="Vector illustration" />
              </div>
              مشاوره با گیاه پزشک
            </button>
          </div>
          <div className="flex justify-between lg:w-5/6 w-full ">
            <div className="flex flex-col gap-2">
              <span className="text-neutral-4 text-xl text-center">{number1}+</span>
              <span className="text-lg text-neutral-1">گیاه خانگی </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-neutral-4 text-xl text-center">{number2}+</span>
              <span className="text-lg text-neutral-1"> گیاه تزئینی</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-neutral-4 text-xl text-center">{number3}+</span>
              <span className="text-lg text-neutral-1">گیاه کادویی</span>
            </div>
          </div>
        </div>
      </main>

      {/* Desktop view */}
      <main className="w-full h-1/2 mt-5 gap-6 md:flex hidden ">
        <div className="flex-1 flex py-1 flex-col text-right gap-5">
          {/* Title Section */}
          <div className="flex py-4 gap-4">
            <h1 className="flex-1 flex text-2xl lg:text-4xl font-bold">
              خرید راحت گیاه؛
              <span className="text-neutral-1">با گیاه لند</span>
            </h1>
          </div>

          {/* Description Section */}
          <article className="lg:text-xl w-full leading-6 lg:w-3/4 ctext-md sm:line-clamp-3 line-clamp-4">
            با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن. علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره
            بگیری.
          </article>

          {/* Buttons */}
          <div className="lg:5/6 w-3/4 flex gap-2">
            <button className="md:w-1/2 w-1/4 text-nowrap bg-neutral-2 px-6 py-3 rounded-lg text-white">گیاهان تخفیف دار</button>
            <button className="md:w-1/2 w-1/4 lg:justify-center gap-1 justify-evenly text-neutral-2 flex items-center flex-row-reverse text-center rounded-lg outline-dashed outline-1">
              <div className="flex items-center relative">
                <img className="w-4/5 relative" src="../../../public/header/vector.svg" alt="Vector illustration" />
              </div>
              مشاوره با گیاه پزشک
            </button>
          </div>

          {/* Display Incrementing Numbers */}
          <div className="flex justify-between lg:5/6 w-3/4 ">
            <div className="flex flex-col gap-1 text-center">
              <span className="text-neutral-4 text-xl text-center">{number1}+</span>
              <span className="text-lg text-neutral-1">گیاه خانگی </span>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <span className="text-neutral-4 text-xl">{number2}+</span>
              <span className="text-lg text-neutral-1"> گیاه تزئینی</span>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <span className="text-neutral-4 text-xl">{number3}+</span>
              <span className="text-lg text-neutral-1">گیاه کادویی</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex w-full object-contain">
          <img className="w-full md:object-contain  object-scale-down" src={plantphoto} alt="Plant photo" />
        </div>
      </main>
      <div className="w-full justify-between my-8 gap-6  flex  md:flex-row flex-col">
        <article className="fadein lg:w-1/3 w-full items-center jus flex gap-2 text-center flex-col">
          <div style={{ background: "#E5F2E9" }} className="p-3 flex rounded-full ">
            <img src={creditcart} alt="" />
          </div>
          <h2 className="font-bold ">پرداخت درب منزل</h2>
          <span className="w-2/3 text-gray-500 text-sm">برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد</span>
        </article>
        <article className="lg:w-1/3 fadein w-full items-center flex gap-2 text-center flex-col">
          <div style={{ background: "#E5F2E9" }} className="p-3 flex rounded-full ">
            <img src={validation} alt="" />
          </div>
          <h2 className="font-bold ">ضمانت محصول</h2>
          <span className="w-2/3 text-gray-500 text-sm">به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع کنید </span>
        </article>
        <article className="lg:w-1/3 w-full fadein items-center flex gap-2 text-center flex-col">
          <div style={{ background: "#E5F2E9" }} className="p-3 flex rounded-full ">
            <img src={localshipping} alt="" />
          </div>
          <h2 className="font-bold "> تحویل درب منزل</h2>
          <span className="w-2/3 text-gray-500 text-sm">با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل بگیرید</span>
        </article>
      </div>
      <div className="flex lg:flex-row flex-col items-center   gap-6 my-5">
        <img className="lg:w-1/2  w-11/12" src={leaf1} alt="" />
        <img className="lg:w-1/2 w-11/12" src={leaf2} alt="" />
      </div>
      <div className="flex gap-5 flex-col my-14">
        <h2 className="text-xl text-primary-7">گیاهان اپارتمانی</h2>
        <div className=" my-6 flex flex-row w-full flex-1 ">
          {/* shopingcard */}
         
          <ShopCardMaker/>
            
         
        </div>
      </div>
    </>
  );
};

export default Mainsection;
