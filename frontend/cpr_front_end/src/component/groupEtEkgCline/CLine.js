import React, { useState } from "react";
import { createCLine } from "../../service/client";

export default function CLine() {
  const [cLineId, setClineId] = useState("");
  const [number, setNumber] = useState("");
  const [mark, setMark] = useState("");

  const setCLine = async (e) => {
    e.preventDefault();
    const cprCycleId = localStorage.getItem("cprCycleId");
    const Cline = await createCLine(number, mark, cprCycleId);
    setClineId(Cline.id);
  };

  return (
    <div className="mt-4 block  bg-black opacity-82 pb-10 border-2 border-lime ">
      <form method="POST" onClick={setCLine}>
        <span className="w-full h-full object-center object-cover lg:w-full lg:h-full text-black bg-lime">
          C-line.
        </span>
        <div>
          <label htmlFor="No" className="block text-sm font-medium text-white">
            No.
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="No"
              id="No"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-lime rounded-md"
              placeholder="C-line No."
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="Mark"
            className="block text-sm font-medium text-white"
          >
            Mark.
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="Mark"
              id="Mark"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-lime rounded-md"
              placeholder="C-line mark"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
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
