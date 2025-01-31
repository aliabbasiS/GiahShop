import React from "react";
import babaadam from "../../../public/shopescard/img1.png";
import yoga from "../../../public/shopescard/img2.png";
import sansoriya from "../../../public/shopescard/img3.png";
import sacolent from "../../../public/shopescard/img4.png";

// Define the PlantData interface
interface PlantData {
  Title: string;
  Price: number;
  ImgUrl: string;
  Urlto: string;
}

// Sample data array
const data: PlantData[] = [
  { Title: "بابا آدم", Price: 850000, ImgUrl: babaadam, Urlto: "" },
  { Title: "یوگا", Price: 560000, ImgUrl: yoga, Urlto: "" },
  { Title: "سانسوریا", Price: 250000, ImgUrl: sansoriya, Urlto: "" },
  { Title: "ساکولنت", Price: 560000, ImgUrl: sacolent, Urlto: "" },
];

const toFarsiDigits = (number: number | string): string => {
  const englishDigits = "0123456789";
  const farsiDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number
    .toString()
    .split("")
    .map((digit) =>
      englishDigits.includes(digit) ? farsiDigits[englishDigits.indexOf(digit)] : digit
    )
    .join("");
};

const ShopCardMaker: React.FC = () => {
  return (
    <div className="flex gap-3 w-full justify-between lg:justify-evenly">
      {data.length > 4 ? (
        <div>Hello</div>
      ) : (
        data.map((plant, index) => (
          <div key={index} className="p-1 flex flex-col gap-6 custom-dotted-outline outline-gray-200">
            <img src={plant.ImgUrl} alt={plant.Title} className="" />
            <h2 className="text-lg font-normal">گیاه طبیعی {plant.Title}</h2>
            <div className="flex justify-between text-center">
              <span className="text-sm flex items-center">قیمت:</span>
              <p className="text-lg">{toFarsiDigits(plant.Price.toLocaleString())} تومان</p>
            </div>
            <button className="w-full h-10 bg-neutral-2 rounded-lg text-white">
              <a href={plant.Urlto}>مشاهده بیشتر</a>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShopCardMaker;
