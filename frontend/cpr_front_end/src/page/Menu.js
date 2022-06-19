import React from "react";

export default function Menu() {
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
                  Medicine
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

          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6 text-lime"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6 text-lime "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
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
