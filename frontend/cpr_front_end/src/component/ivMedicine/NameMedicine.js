import React from "react";

export default function NameMedicine({ name }) {
  return (
    <div class="relative border border-lime rounded-md px-3 py-2  mt-2 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label
        for="name"
        class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-black text-xs font-medium text-white"
      >
        {name}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        class="block w-full border-2 border-lime  bg-black p-0 text-white placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder="Dose"
      />
      <button className="border-2 border-lime mt-2">Confirm</button>
    </div>
  );
}
