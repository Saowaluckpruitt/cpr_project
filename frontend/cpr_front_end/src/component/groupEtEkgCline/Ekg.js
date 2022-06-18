import React, { useState } from "react";
import { createEkg } from "../../service/client";

export default function Ekg({ cprCycle }) {
  const [name, setName] = useState("");
  const [charge, setCharge] = useState("");

  const handleConfirmEkg = async (e) => {
    try {
      e.preventDefault();

      const ekg = await createEkg(name, charge, cprCycle.id);
      console.log(ekg);
    } catch (err) {
      console.log("Ekg confirm err");
    }
  };
  return (
    <div className="mt-4 block  bg-black opacity-82  border-2 border-lime">
      <form method="POST" onSubmit={handleConfirmEkg}>
        <span className="w-full h-full object-center object-cover lg:w-full lg:h-full text-black bg-lime">
          {" "}
          EKG
        </span>
        <div>
          <label htmlFor="No" className="block text-sm font-medium text-white">
            EKG Type
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="No"
              id="No"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-lime rounded-md"
              placeholder="EKG type."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="Mark"
            className="block text-sm font-medium text-white"
          >
            Defibulation(J)
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="Mark"
              id="Mark"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-lime rounded-md"
              placeholder="Defibulation"
              value={charge}
              onChange={(e) => {
                setCharge(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent mt-2 shadow-sm text-sm font-medium text-black bg-lime hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
