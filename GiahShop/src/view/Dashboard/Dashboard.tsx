import { useState } from "react";
import Header from "../Home/Header";
import profile from "../../../public/Dashboard/profile.jpg";

const pic1 = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z" />
  </svg>
);

const pic2 = (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.5 12H3V9H5.5V6.5H8.5V9H11V12H8.5V14.5H5.5V12ZM14 5V16C14 17.1 13.1 18 12 18H2C0.9 18 0 17.1 0 16V5C0 3.9 0.9 3 2 3H12C13.1 3 14 3.9 14 5ZM12 5H2V16H12V5ZM13 0H1V2H13V0Z" />
  </svg>
);

const pic3 = (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM18 14H2V4L10 9L18 4V14Z" />
  </svg>
);
import sv from '../../../public/Dashboard/Vector.svg'
const Dashboard = () => {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { id: 1, icon: pic1, text: "مشخصات حساب کاربری" },
    { id: 2, icon: pic2, text: "مشاوره با گیاه پزشک" },
    { id: 3, icon: pic3, text: "پیام های دریافتی" },
  ];

  return (
    <>
      <Header />
      <main className="px-11 py-7 w-full h-screen">
        <div className="flex w-1/4 flex-col">
          <div className="flex gap-5 w-full flex-col  ">
            <div className="flex flex-col justify-between h-screen ">
              <div>

              <div className="flex gap-3">
                <img src={profile} alt="" />
                <div className="flex flex-col gap-3">
                  <strong>فرهاد ریوف</strong>
                  <span>090321456</span>
                </div>
              </div>
              <div className="flex flex-col  my-6 gap-5">
                {buttons.map((btn) => (
                  <button
                  key={btn.id}
                  className={`flex  gap-3 w-3/4 rounded-md p-3 items-center transition-all ${
                    activeButton === btn.id
                    ? "bg-[#F3FDFA] text-[#417F56]"
                    : "text-black"
                  }`}
                  onClick={() => setActiveButton(btn.id )}
                  >
                    <span
                      className={`w-4 h-4 ${
                        activeButton === btn.id
                        ? "text-[#417F56]"
                        : "text-black"
                      }`}
                      >
                      {btn.icon}
                    </span>
                    <span>{btn.text}</span>
                  </button>
                ))}
                </div>
              </div>
              <div>

                <button className="bg-[#FFF2F2] mb-24 flex px-4 py-3 rounded-md text-red-500 items-center  gap-3 justify-center w-3/4"><img src={sv} alt="" /><span>خروج از حساب کاربری</span></button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
