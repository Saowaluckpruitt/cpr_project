import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { Link } from "react-router-dom";

export default function Menu() {
  const { logout } = useContext(AuthContext);
  return (
    <nav className="bg-black  mt-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2  lg:px-0">
            <div className="flex-shrink-0">
              <h1>Survive by CPR</h1>
              <img
                className=" lg:show h-12 w-auto"
                src="pic/logoEkg.png"
                alt="Ekg"
              />
            </div>
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4  ml-5">
                <Link
                  to="homepage"
                  className="text-lime hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium border-2 border-lime"
                >
                  Home
                </Link>

                <button
                  onClick={logout}
                  className="text-lime hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium border-2 border-lime"
                >
                  LogOut
                </button>
                <Link
                  to="/print"
                  className="text-lime hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium border-2 border-lime"
                >
                  Print
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
