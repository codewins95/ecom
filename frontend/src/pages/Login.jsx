import React, { useContext, useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
// import axios from "axios";
import { toast } from "react-toastify";
import Context from "../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context)
  // console.log("genralContext", fetchUserDetails);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    const dataResponse = await fetch(SummaryApi.signIN.url, {
      method: SummaryApi.signIN.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!dataResponse.ok) {
        throw new Error("Network response was not ok");
    }

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      if (typeof fetchUserDetails === 'function') {
        fetchUserDetails();
      }
    } else if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };
  return (
    <>
      <section id="login">
        <div className="mx-auto container p-4">
          <div className="bg-white p-5 w-full max-w-sm mx-auto">
            <div className="w-20 h-20 mx-auto">
              <img src={loginIcons} alt="login icons" />
            </div>

            <form
              className="pt-6 flex flex-col gap-2"
              onSubmit={handleOnSubmit}
            >
              <div className="grid">
                <label>Email : </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label>Password : </label>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="enter password"
                    name="password"
                    value={data.password}
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setShowPassword((preve) => !preve)}
                  >
                    <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                  </div>
                </div>
                <Link
                  to={"/forget-password"}
                  className="block w-fit ml-auto hover:underline hover:text-red-600"
                >
                  Forgot password ?
                </Link>
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
              >
                Login
              </button>
            </form>

            <p className="my-5">
              Don't have account ?
              <Link
                to={"/sign-up"}
                className="text-red-600 hover:text-red-700 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
