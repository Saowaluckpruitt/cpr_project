import React from "react";
import NameMedicine from "./NameMedicine";

export default function MedicineTake() {
  return (
    <div className="bg-black opacity-90 rounded-md -space-y-px text-white">
      <h4 className="text-white">Medicine</h4>
      {/* {listMedicineDoc().map(doc => {
          return  <NameMedicine name={doc.name} medicineDocId={doc.id} /> 
      })} */}
      <NameMedicine name="Adrenaline 1 mg/ml" />
      <NameMedicine name=" Atropine 0.6 mg/ml" />
      <NameMedicine name="  Lidocain 2%(20mg/ml)" />

      <label className="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
        <input
          type="checkbox"
          name="privacy-setting"
          value="Public access"
          className="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          aria-labelledby="privacy-setting-0-label"
          aria-describedby="privacy-setting-0-description"
        />
        <div class="relative border border-lime rounded-md px-3 py-2  mt-2 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            for="name"
            class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-black text-xs font-medium text-white"
          >
            Lidocain 2%(20mg/ml)
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
      </label>
      <label className="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
        <input
          type="checkbox"
          name="privacy-setting"
          value="Public access"
          className="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          aria-labelledby="privacy-setting-0-label"
          aria-describedby="privacy-setting-0-description"
        />
        <div class="relative border border-lime rounded-md px-3 py-2  mt-2 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            for="name"
            class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-black text-xs font-medium text-white"
          >
            Calcium gluconate 10%
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
      </label>
      <label className="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
        <input
          type="checkbox"
          name="privacy-setting"
          value="Public access"
          className="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          aria-labelledby="privacy-setting-0-label"
          aria-describedby="privacy-setting-0-description"
        />
        <div class="relative border border-lime rounded-md px-3 py-2  mt-2 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            for="name"
            class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-black text-xs font-medium text-white"
          >
            50% Glucose 50ml
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
      </label>
      <label className="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
        <input
          type="checkbox"
          name="privacy-setting"
          value="Public access"
          className="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          aria-labelledby="privacy-setting-0-label"
          aria-describedby="privacy-setting-0-description"
        />
        <div class="relative border border-lime rounded-md px-3 py-2  mt-2 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            for="name"
            class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-black text-xs font-medium text-white"
          >
            {" "}
            Diazepam 10 mg/2ml
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
      </label>
      <label className="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
        <input
          type="checkbox"
          name="privacy-setting"
          value="Public access"
          className="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          aria-labelledby="privacy-setting-0-label"
          aria-describedby="privacy-setting-0-description"
        />
        <div class="relative border border-lime rounded-md px-3 py-2  mt-2 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            for="name"
            class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-black text-xs font-medium text-white"
          >
            {" "}
            50% Magnesium sulfate
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
      </label>
      <label className="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
        <input
          type="checkbox"
          name="privacy-setting"
          value="Public access"
          className="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          aria-labelledby="privacy-setting-0-label"
          aria-describedby="privacy-setting-0-description"
        />
        <div class="relative border border-lime rounded-md px-3 py-2  mt-2 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            for="name"
            class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-black text-xs font-medium text-white"
          >
            {" "}
            Levophed 1mg/ml(4ml)
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
      </label>
    </div>
  );
}
