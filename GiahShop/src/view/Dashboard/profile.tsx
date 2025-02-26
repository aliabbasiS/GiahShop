import profile from "../../../public/Dashboard/profile.jpg";
import profileicon from "../../../public/Dashboard/person.jpg";
import tik from "../../../public/Dashboard/tik.jpg";
import lol from "../../../public/Dashboard/lol.jpg";
import location from "../../../public/Dashboard/location.svg";
import call from "../../../public/Dashboard/call.svg";
import visibile from "../../../public/Dashboard/visibile.svg";
const ShowProfile = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 order-1">
      <div className="flex h-full flex-col gap-5 px-5 py-3">
        <div className=" flex gap-3">
          <div className="w-[2px] h-full bg-gray-700"></div>
          <span className="font-bold ">مشخصات اطلاعات کاربردی</span>
        </div>
        <div className="flex  gap-3">
          <img src={profile} alt="" />

          <button className="h-3/5  my-2 bg-green-700 rounded-xl text-white px-3 py-1 text-center font-semibold">ویرایش با تصویر جدید</button>
          <button className="h-3/5  my-2 border-green-700 border rounded-xl text-green-700 font-semibold text-center px-3 py-1">حذف تصویر</button>
        </div>
        <form className="flex flex-col gap-5 w-full h-full">
          <div className="flex gap-4">
            <div className="flex w-1/2 h-10 rounded-lg border border-gray-200 px-3 ">
              <img className="py-3" src={profileicon} alt="" />
              <input placeholder="فرهاد" className=" w-full outline-none align- h-full px-4" type="text" />
            </div>
            <div className="flex w-1/2 h-10 rounded-lg border border-gray-200 px-3 ">
              <img className="py-3" src={profileicon} alt="" />
              <input placeholder="ریوفی" className=" w-full outline-none align- h-full px-4" type="text" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex w-1/2 h-10 rounded-lg border border-gray-200 px-3 ">
              <img className="py-3" src={tik} alt="" />
              <input placeholder="09037029121" className=" w-full outline-none align- h-full px-4" type="text" />
            </div>
            <div className="flex w-1/2 h-10 rounded-lg border border-gray-200 px-3 ">
              <img className="py-3" src={lol} alt="" />
              <input placeholder="ایمیل" className=" w-full outline-none align- h-full px-4" type="text" />
            </div>  
            
          </div>
        </form>
      </div>
    </div>
  );
};
export default ShowProfile;
