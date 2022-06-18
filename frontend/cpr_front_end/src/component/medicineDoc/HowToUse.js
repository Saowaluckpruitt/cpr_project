import React from "react";

export default function HowToUse({ text }) {
  return (
    <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
      <div
        aria-hidden="true"
        className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
      ></div>
      <div className="p-6 flex items-end sm:absolute sm:inset-0">
        <div>
          <h3 className="font-semibold text-white">
            <a href="#">
              <span className="absolute inset-0"></span>
              How to use
            </a>
          </h3>
          <p aria-hidden="true" className="mt-1 text-sm text-white">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
