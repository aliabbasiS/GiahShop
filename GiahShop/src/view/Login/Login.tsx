import React, { useState } from "react";
import email from "../../../public/login/Email.png";
import password from "../../../public/login/Password.png";
import hide from "../../../public/login/hide.png";
import mobileicon from "../../../public/login/mobilephone.png";
import loginpage from "../../../public/login/Frame 1261153881.png";

type LoginForm = {
  phonenumber: number;
  email: string;
  password: string;
  rep_password: string;
};

const Login = () => {
  const [form, setForm] = useState<LoginForm>({
    phonenumber: 0,
    email: "",
    password: "",
    rep_password: "",
  });
  const [visibility, setVisibility] = useState(false);
  const [visibilityf, setVisibilityf] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "phonenumber" ? Number(value) : value,
    });
  };

  // Handle visibility toggle for password
  const toggleVisibility = (e: React.MouseEvent<HTMLButtonElement>, field: string) => {
    e.preventDefault();
    field === "password" ? setVisibilityf(!visibilityf) : setVisibility(!visibility);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-full h-full flex-1 flex justify-center items-center">
        <div className="justify-self-center flex-col w-4/5 flex h-3/5">
          <h1 className="font-semibold text-xl">ثبت نام</h1>
          {/* Form for login */}
          <form onSubmit={handleSubmit} className="w-full h-full gap-10 flex flex-col my-7">
            {/* Mobile Number Input */}
            <div className="flex h-14 border border-gray-300 rounded-lg lg:w-11/12 w-full gap-3 px-4">
              <label htmlFor="phonenumber" className="flex items-center justify-center">
                <img className="h-1/2 justify-self-center items-center" src={mobileicon} alt="" />
              </label>
              <input
                id="phonenumber"
                name="phonenumber"
                value={form.phonenumber || ""}
                onChange={handleChange}
                className="w-full text-lg outline-none"
                placeholder="شماره موبایل"
                type="number"
              />
            </div>

            {/* Email Input */}
            <div className="flex h-14 border border-gray-300 rounded-lg lg:w-11/12 w-full gap-3 px-4">
              <label htmlFor="email" className="flex items-center justify-center">
                <img className="h-4 justify-self-center items-center" src={email} alt="" />
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full text-lg outline-none"
                placeholder="ایمیل"
                type="text"
              />
            </div>

            {/* Password Input */}
            <div className="flex h-14 border border-gray-300 rounded-lg lg:w-11/12 w-full gap-3 px-4">
              <label htmlFor="password" className="flex items-center justify-center">
                <img className="h-4 justify-self-center items-center" src={password} alt="" />
              </label>
              <input
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full text-lg outline-none"
                placeholder="تعریف رمز عبور"
                type={visibilityf ? "text" : "password"}
              />
              <button onClick={(e) => toggleVisibility(e, "password")} className="flex items-center">
                <img className="h-5" src={hide} alt="Toggle Password Visibility" />
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="flex h-14 border border-gray-300 rounded-lg lg:w-11/12 w-full gap-3 px-4">
              <label htmlFor="rep_password" className="flex items-center justify-center">
                <img className="h-4 justify-self-center items-center" src={password} alt="" />
              </label>
              <input
                id="rep_password"
                name="rep_password"
                value={form.rep_password}
                onChange={handleChange}
                className="w-full text-lg outline-none"
                placeholder="تکرار رمز عبور"
                type={visibility ? "text" : "password"}
              />
              <button onClick={(e) => toggleVisibility(e, "rep_password")} className="flex items-center">
                <img className="h-5" src={hide} alt="Toggle Confirm Password Visibility" />
              </button>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-green-700 h-16 text-center lg:w-11/12 w-full text-white rounded-lg">
              ثبت نام
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-1">
        <img className="object-cover lg:object-fill w-full rounded-lg" src={loginpage} alt="Login Page Background" />
      </div>
    </div>
  );
};

export default Login;
