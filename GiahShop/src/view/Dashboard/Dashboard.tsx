import { useState } from "react";
import Header from "../Home/Header";
import profile from "../../../public/Dashboard/profile.jpg";
import ShowProfile from "./profile";
// Import your SVG files correctly
import pic1 from "../../../components/icons/pic1.svg";
import pic2 from "../../../components/icons/pic2.svg";
import pic3 from "../../../components/icons/pic3.svg";
import sv from '../../../public/Dashboard/Vector.svg';

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(<ShowProfile />);

  const buttons = [
    { id: 1, icon: pic1, text: "مشخصات حساب کاربری", component: <ShowProfile /> },
    // Uncomment when you create these components
    // { id: 2, icon: pic2, text: "مشاوره با گیاه پزشک", component: <ConsultWithDoctor /> },
    // { id: 3, icon: pic3, text: "پیام های دریافتی", component: <Messages /> },
  ];

  return (
    <div className="w-full h-full px-10">
      <Header />
      <main className="px-11 w-full h-screen  flex">
        {/* Sidebar */}
        <div className="flex w-1/4 flex-col border-l-2 border-gray-200">
          <div className="flex flex-col justify-between h-screen">
            <div>
              <div className="flex gap-3 py-7">
                <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
                <div className="flex flex-col gap-3">
                  <strong>فرهاد ریوف</strong>
                  <span>090321456</span>
                </div>
              </div>
              <div className="flex flex-col my-6 gap-5">
                {buttons.map((btn) => (
                  <button
                    key={btn.id}
                    className={`flex gap-3 w-3/4 rounded-md p-3 items-center transition-all ${
                      activeButton === btn.id
                        ? "bg-[#F3FDFA] text-[#417F56]"
                        : "text-black"
                    }`}
                    onClick={() => {
                      setActiveButton(btn.id);
                      setActiveComponent(btn.component);
                    }}
                  >
                    <img src={btn.icon} alt="icon" className="w-4 h-4" />
                    <span>{btn.text}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <button className="bg-[#FFF2F2] mb-24 flex px-4 py-3 rounded-md text-red-500 items-center gap-3 justify-center w-3/4">
                <img src={sv} alt="Logout" />
                <span>خروج از حساب کاربری</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4">
          {activeComponent}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;