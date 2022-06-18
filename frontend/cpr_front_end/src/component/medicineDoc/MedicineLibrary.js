import React, { useEffect, useState } from "react";
import { listMedicineDocs } from "../../service/client";

export default function MedicineLibrary({ setCurrentMedicineDoc }) {
  const [medicineDocs, setMedicineDocs] = useState(null);
  useEffect(() => {
    if (!medicineDocs) {
      listMedicineDocs().then((docs) => setMedicineDocs(docs));
    }
  });

  if (!medicineDocs) {
    return <></>;
  }
  return (
    <div className="bg-black opacity-90 ">
      <div className="max-w-2xl mx-auto py-16 px-4  ">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">
          Medicine
        </h2>
        {medicineDocs.map((doc) => {
          return (
            <div key={doc.id}>
              <div className="group relative ">
                <div className="bg-black rounded-md  group-hover:opacity-75  ">
                  <img
                    src={doc.medicinePic}
                    alt={doc.name}
                    className="w-40 h-32 object-center object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <h3 className="text-sm text-white border-2 border-lime ">
                    <button onClick={() => setCurrentMedicineDoc(doc)}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {doc.name}
                    </button>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
