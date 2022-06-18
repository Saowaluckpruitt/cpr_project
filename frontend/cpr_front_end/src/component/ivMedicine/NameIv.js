import React, { useState } from "react";
import { createIvFluid } from "../../service/client";

export default function NameIv({ iv, cprCycle }) {
  const [name, setName] = useState("");
  const [maintained, setMaintained] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [dose, setDose] = useState("");

  const handleConfirmIvfluuid = async (e) => {
    try {
      e.preventDefault();

      const ivFluid = await createIvFluid(
        iv,
        maintained,
        loaded,
        dose,
        cprCycle.id
      );
      setMaintained("");
      setLoaded("");
      setDose("");
      console.log(ivFluid);
    } catch (err) {
      console.log("Iv fluid err");
    }
  };

  return (
    <div className="relative border border-lime rounded-md px-3 py-2  mt-2 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <form method="POST" onSubmit={handleConfirmIvfluuid}>
        <h3 className="mb-3">{iv}</h3>
        <label
          htmlFor="dose"
          className="absolute -top-2 left-2 -mt-px  inline-block px-1 bg-black text-xs font-medium text-white"
        ></label>
        <input
          type="text"
          name="dose"
          id="dose"
          className="block w-full border-2 border-lime  bg-black p-0 text-white placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Dose"
          value={dose}
          onChange={(e) => setDose(e.target.value)}
        />
        <div className="flex items-center">
          <input
            id="maintained"
            name="iv"
            value={maintained}
            type="radio"
            className="h-4 mt-3 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            onClick={(e) => setMaintained(true)}
          />
          <label htmlFor="maintained" className="ml-3 text-sm  mt-3 text-white">
            {" "}
            maintained
          </label>
          <input
            id="loaded"
            name="iv"
            value={loaded}
            type="radio"
            className="h-4 mt-3 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            onClick={(e) => setLoaded(true)}
          />
          <label htmlFor="loaded" className="ml-3 mt-3 text-sm text-white">
            {" "}
            loaded
          </label>
        </div>
        <button className="border-2 border-lime mt-2">Confirm</button>
      </form>
    </div>
  );
}
