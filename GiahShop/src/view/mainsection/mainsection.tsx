import plantphoto from "../../../public/header/image123.png";
import { useEffect, useState } from "react";

const Mainsection = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  const targetNumber1 = 924;
  const targetNumber2 = 234;
  const targetNumber3 = 128;

  const useDynamicCounter = (
    number: any,
    setNumber: any,
    targetNumber: any,
    slowThreshold: any
  ) => {
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
      <main className="md:hidden flex">
        {/* Placeholder for mobile-specific content */}
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
          <article className="lg:text-xl w-full leading-6 lg:w-3/4 text-gray-500 text-md sm:line-clamp-3 line-clamp-4">
            با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه
            استفاده کن. علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت
            مشاوره بگیری.
          </article>

          {/* Buttons */}
          <div className="lg:5/6 w-3/4 flex gap-2">
            <button className="md:w-1/2 w-1/4 bg-neutral-2 px-6 py-3 rounded-lg text-white">
              گیاهان تخفیف دار
            </button>
            <button className="md:w-1/2 w-1/4 lg:justify-center gap-1 justify-evenly text-neutral-2 flex items-center flex-row-reverse text-center rounded-lg outline-dashed outline-1">
              <div className="flex items-center relative">
                <img
                  className="w-4/5 relative"
                  src="../../../public/header/vector.svg"
                  alt="Vector illustration"
                />
              </div>
              مشاوره با گیاه پزشک
            </button>
          </div>

          {/* Display Incrementing Numbers */}
          <div className="flex justify-between lg:5/6 w-3/4 ">

          <div className="flex flex-col">
            <span className="text-neutral-4 text-xl">{number1}+</span>
            <span className="text-lg text-neutral-1">گیاه خانگی </span>
            </div>
          <div className="flex flex-col">
            <span className="text-neutral-4 text-xl">{number2}+</span>
            <span className="text-lg text-neutral-1"> گیاه تزئینی</span>
            </div>
          <div className="flex flex-col">
            <span className="text-neutral-4 text-xl">{number3}+</span>
            <span className="text-lg text-neutral-1">گیاه کادویی</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div  className="flex-1 flex w-full object-contain">
          <img
            className="w-full  object-cover"
            src={plantphoto}
            alt="Plant photo"
          />
        </div>
      </main>
    </>
  );
};

export default Mainsection;
