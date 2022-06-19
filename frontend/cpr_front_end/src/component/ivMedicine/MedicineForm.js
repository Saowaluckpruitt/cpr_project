import React, { useState } from "react";
import { createMedicineTake } from "../../service/client";

export default function MedicineForm({ doc, cprCycle }) {
  const [dose, setDose] = useState("");

  const handleMedicineFormDose = async (e) => {
    try {
      e.preventDefault();

      const medicineDose = await createMedicineTake(dose, cprCycle.id, doc.id);
      setDose("");
      console.log(medicineDose);
    } catch (err) {
      console.log("medicineDose err");
    }
  };
  return (
    <div className="border border-lime rounded-md px-3 py-2  mt-4 ml-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <h3>{doc.name}</h3>
      <label
        htmlFor="dose"
        className="-mt-px inline-block px-1 bg-black text-xs font-medium text-white"
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
      <button
        className="border-2 border-lime mt-2"
        onClick={handleMedicineFormDose}
      >
        Confirm
      </button>
    </div>
  );
}
