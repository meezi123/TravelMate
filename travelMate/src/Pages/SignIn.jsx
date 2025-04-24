import React from "react";
import img from "../assets/bg.jpg";
import Button from "../Components/Button";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    navigate("/tour");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
          filter: "blur(8px)",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative grid grid-cols-2 h-[80%] w-[70%] shadow-2xl rounded-[30px] overflow-hidden">

        {/* Left Side - Image & Text */}
        <div className="absolute inset-0 w-[50%] h-full z-0">
          <img
            src={img}
            alt="Beach sunset background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative h-full w-full">
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))`,
              mixBlendMode: "multiply",
            }}
          />

          <div className="relative z-20 flex flex-col justify-center h-full p-10 text-white space-y-6">
            <h1 className="text-4xl font-bold">
              Welcome Back! <br />
              Ready to Continue Your <br />
              <span className="text-[#48e2d7]">Adventure!</span> 🌍
            </h1>
            <p className="text-lg">
              Log in to access breathtaking destinations, <br />
              amazing tours, <br />
              and your personalized travel experience.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="h-full w-full flex items-center justify-center bg-white">
          <div className="h-full w-full flex flex-col py-[50px] px-10 space-y-[50px]">
            <div className="w-full flex justify-center items-center">
              <h1 className="font-medium text-3xl text-[#48e2d7]">Sign In</h1>
            </div>
            <div className="w-full">
              <form
                className="space-y-8 w-full flex flex-col items-center mt-[50px]"
                onSubmit={handleSubmit}
              >
                <div className="w-[50%]">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-4 relative rounded-md ">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block bg-transparent w-full pl-10 py-2 sm:text-sm border-b border-gray-200 rounded-md outline-none"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="w-[50%]">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-4 relative rounded-md ">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block bg-transparent w-full pl-10 py-2 sm:text-sm border-b border-gray-200 rounded-md outline-none"
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <Button
                    bgColor="bg-[#48e2d7]"
                    color="text-[#f0f8ff]"
                    type="submit"
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-[50%]">
                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <div className="flex items-center space-x-2 px-4 bg-white">
                    <span className="text-gray-500 sm:text">Don't have an account?</span>
                    <Link to="/signup" className="text-[#48e2d7] font-[600]">
                      Sign Up
                    </Link>
                  </div>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
