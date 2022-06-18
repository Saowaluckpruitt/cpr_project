import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-black  mt-8 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex justify-between  ">
        <div className="relative flex items-center  h-16">
          <div className="flex items-center px-2  lg:px-0">
            <div className="flex-shrink-0">
              <img
                className=" lg:show h-12 w-auto"
                src="pic/logoEkg.png"
                alt="Ekg"
              />
            </div>
            <div className="hidden lg:block lg:ml-6 ">
              <div className="flex space-x-4  ml-5">
                <a
                  href="#"
                  className="text-lime hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium border-2 border-lime"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-lime hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium border-2 border-lime"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="text-lime hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium border-2 border-lime"
                >
                  Print
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:ml-4">
            <div className="flex items-center">
              <div className="ml-4 relative flex-shrink-0">
                <div
                  className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Toggle with JS */}
      <div className="hidden lg:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="bg-gray-900 text-lime block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lime font-medium"
          >
            Medicine
          </a>
          <a
            href="#"
            className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lime font-medium"
          >
            Print
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-lime">Tom Cook</div>
              <div className="text-sm font-medium text-lime">
                tom@example.com
              </div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-lime font-medium  hover:text-white hover:bg-gray-700"
            >
              Your Profile
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-lime font-medium hover:text-white hover:bg-gray-700"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
