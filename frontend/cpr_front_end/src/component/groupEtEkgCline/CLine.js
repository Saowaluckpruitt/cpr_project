import React from "react";
import { createCLine } from "../../service/client";

export default function cLine(number, mark) {
  const takeCline = async () => {
    await createCLine(number, mark);
  };
  return (
    <div class="mt-4 block  bg-black opacity-82 pb-10 border-2 border-lime ">
      <form method="POST" onSubmit={takeCline}>
        <span class="w-full h-full object-center object-cover lg:w-full lg:h-full text-black bg-lime">
          C-line.
        </span>
        <div>
          <label for="No" class="block text-sm font-medium text-white">
            No.
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="No"
              id="No"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-lime rounded-md"
              placeholder="C-line No."
            />
          </div>
        </div>
        <div>
          <label for="Mark" class="block text-sm font-medium text-white">
            Mark.
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="Mark"
              id="Mark"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-lime rounded-md"
              placeholder="C-line mark"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-lime hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
