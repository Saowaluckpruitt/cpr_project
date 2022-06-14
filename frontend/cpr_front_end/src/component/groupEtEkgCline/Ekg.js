import React from "react";

export default function Ekg() {
  return (
    <div class="mt-4 block  bg-black opacity-82 pb-10 border-2 border-lime">
      <span class="w-full h-full object-center object-cover lg:w-full lg:h-full text-black bg-lime">
        {" "}
        EKG
      </span>
      <div>
        <label for="No" class="block text-sm font-medium text-white">
          EKG Type
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="No"
            id="No"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-lime rounded-md"
            placeholder="EKG type."
          />
        </div>
      </div>
      <div>
        <label for="Mark" class="block text-sm font-medium text-white">
          Defibulation(J)
        </label>
        <div class="mt-1">
          <input
            type="text"
            name="Mark"
            id="Mark"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-lime rounded-md"
            placeholder="Defibulation"
          />
        </div>
      </div>
    </div>
  );
}
