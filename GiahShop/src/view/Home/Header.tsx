import login from "/header/login.svg";
import shoppingcart from "../../../public/header/shopping_cart.svg";
import search from "../../../public/header/search.svg";
import DrawerMobileNavigation from "./drawer";

const Header = () => {
  return (
    <header className="flex border-b whitespace-nowrap  py-4 justify-between  ">
      <div className="flex  gap-3 font-normal text-center">
  




        <div className=" p-1 lg:hidden flex  items-center justify-center">
          <DrawerMobileNavigation />
        </div>
        <h2 className="font-bold text-neutral-2 flex items-center ">
          گیاه لند
        </h2>
        <div className="lg:flex  hidden   gap-3 ">
          <button>
            <h2 className="text-neutral-1 flex items-center">صحفه اصلی</h2>
          </button>
          <button>
            <h2 className="flex items-center">گیاه پزشک</h2>
          </button>
          <button>
            <h2 className="flex items-center">وبلاگ</h2>
          </button>
          <button>
            <h2 className="flex items-center">تماس با ما</h2>
          </button>
          <button>
            <h2 className="flex items-center">درباره ما</h2>
          </button>
        </div>
      </div>
      <div className="flex gap-2 ">
        <button
          style={{ borderWidth: "1.3px" }}
          className="border md:flex hidden  border-spacing-2 p-2 border-primary-7 rounded-md"
        >
          <img
            className="p-1 text-neutral-4 hidden lg:flex"
            src={login}
            alt=""
          />
          <span className="text-primary-7 ">ورود/ ثبت نام</span>
        </button>
        <button
          style={{ borderWidth: "1.3px" }}
          className="border border-spacing-2 p-1  flex items-center  border-primary-7 rounded-md"
        >
          <img src={search} alt="" />
        </button>
        <button
          style={{ borderWidth: "1.3px" }}
          className="border border-spacing-2 p-1 border-primary-7 rounded-md"
        >
          <img src={shoppingcart} alt="" />
        </button>
      </div>
    </header>
  );
};
export default Header;
