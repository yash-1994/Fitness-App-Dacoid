import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ButtonBase } from "@mui/material";

const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full relative">
      <div className="p-1 text-xl font-semibold leading-6 text-left mt-2">
        Welcome Back
      </div>
      <form className=" flex  flex-col   px-1 mt-10 ">
        <div className="mb-7">
          <input
            placeholder="Email"
            className="h-[50px] rounded-lg appearance-none border-2 w-full py-2 px-3 bg-[#F1F1F1] text-[#7F7F7F] transition-all duration-200 ease-in leading-tight focus:outline-none focus:border-gray-400 focus:shadow-outline"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Password"
            className="h-[50px] rounded-lg appearance-none border-2 w-full py-2 px-3 bg-[#F1F1F1] text-[#7F7F7F] leading-tight transition-all duration-200 ease-in focus:outline-none focus:border-gray-400 focus:shadow-outline"
            id="pass"
            type="password"
          />
        </div>
        <div className="mb-6 px-2">
          <p className="flex cursor-pointer underline items-center text-[#7F7F7F] text-[12px] font-bold mb-2">
            Forgot your password?{" "}
          </p>
        </div>
      </form>
      <div className="h-[220px] absolute bottom-0 w-full">
        <div className="flex items-center justify-between">
        <ButtonBase
          className="w-full"
             onClick={() => {
              setTimeout(() => {
                navigate("/goal");
              }, 300);
             }}>
            <button
            className="w-full hover:ring-2 ring-blue-400 h-[50px] bg-gradient-to-r from-[#95BEFF] to-[#7B91FF]  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
          </ButtonBase>
        </div>
        <div className="flex px-1 w-full items-center mt-6">
          <div className=" mr-2 border-t flex-1 border-gray-400"></div>
          <div className="text-xs text-gray-500">Or</div>
          <div className="ml-2 border-t flex-1 border-gray-400"></div>
        </div>
        <div className="flex items-center gap-4 justify-center mt-6">
          <ButtonBase>
          <button className="border border-[#7F7F7F] rounded-lg h-11 w-11  flex items-center justify-center">
            <FcGoogle className="" />
          </button>
          </ButtonBase>
          <ButtonBase>
          <button className="border border-[#7F7F7F] rounded-lg h-11 w-11  flex items-center justify-center">
            <FaFacebookF className="text-blue-700" />
          </button>
          </ButtonBase>
        </div>
        <p className="mt-5 gap-1 text-[14px] flex items-center justify-center">
        Don’t have an account yet? 
          <span
            className="text-blue-500"
            onClick={() => {
              navigate("/register");
            }}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
