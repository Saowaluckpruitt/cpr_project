import React, { useState, useContext } from "react";
import axios from "axios";
import localStorageService from "../service/localStorageService";
import { AuthContext } from "../contexts/AuthContextProvider";

export default function Register() {
  // const [input, setInput] = useState({
  //   username: "",
  //   phoneNumber: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  // const [error, setError] = useState({});
  // const { setIsAuthenticated } = useContext(AuthContext);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput((prev) => ({ ...prev, [name]: value }));
  //   if (name === "username") {
  //     if (!value) {
  //       setError((prev) => ({ ...prev, username: "username is require" }));
  //     } else if (name !== "username") {
  //       setError((prev) => ({ ...prev, usernaame: " invalid username " }));
  //     } else {
  //       setError((prev) => ({ ...prev, usernmae: false }));
  //     }
  //   }
  // };
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className=" bg-black opacity-80 py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                for="userName"
                className="block text-sm font-medium text-lime"
              >
                User Name
              </label>
              <div className="mt-1">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  autocomplete="userName"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                for="phoneNumber"
                className="block text-sm font-medium text-lime"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="phoneNumber"
                  autocomplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-lime"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-lime"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-lime hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
