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
    <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 my-bg2">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">
          Medicine
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {medicineDocs.map((doc) => {
          return (
            <div
              key={doc.id}
              className="w-full h-70 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80"
            >
              <div className="group">
                <img
                  src={doc.medicinePic}
                  alt={doc.name}
                  className="w-40 h-60 object-center object-cover lg:w-full"
                />
              </div>

              <h3 className="text-xl text-black text-center border-2 bg-white ">
                <button onClick={() => setCurrentMedicineDoc(doc)}>
                  {doc.name}
                </button>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
