import React from "react";

export default function etTube() {
  return (
    <div class="mt-4 block bg-black opacity-82 pb-10 border-2 border-lime">
      <span class="w-full h-full object-center object-cover lg:w-full lg:h-full text-black bg-lime">
        {" "}
        Et-tube.
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
            placeholder="Et-tube No."
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
            placeholder="Et-tube mark"
          />
        </div>
      </div>
    </div>
  );
}
