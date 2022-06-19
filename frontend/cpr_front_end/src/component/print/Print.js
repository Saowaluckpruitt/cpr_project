import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listCprCycles, deleteMedicineTake } from "../../service/client";

export default function Print() {
  const [cprCycles, setCprCycles] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!cprCycles) {
      listCprCycles().then((docs) => setCprCycles(docs));
    }
  });

  if (!cprCycles) {
    return <></>;
  }

  const deleteClick = async (id) => {
    await deleteMedicineTake(id).then(() =>
      listCprCycles().then((docs) => setCprCycles(docs))
    );
  };

  return (
    <div className="py-8">
      {cprCycles.map((cprCycle) => {
        return (
          <div className="bg-gray-700 text-gray-400 overflow-hidden shadow rounded-lg mx-auto max-w-4xl  h-full my-4">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="font-semibold text-lg">CprCycle</h2>
              <h3>CPR Times</h3>
              <ul>
                {cprCycle.CprTimes.map((cprtime) => {
                  return <li>{cprtime.createdAt.toString()}</li>;
                })}
              </ul>
              <h3>Adrenaline Times</h3>
              <ul>
                {cprCycle.AdrenalineTimes.map((adrenalineTime) => {
                  return <li>{adrenalineTime.createdAt.toString()}</li>;
                })}
              </ul>
              <h3>Et-Tube</h3>
              {cprCycle.EtTube && (
                <>
                  <h4>Time</h4>
                  <p>{cprCycle.EtTube.createdAt.toString()}</p>
                  <h4>Number</h4>
                  <p>{cprCycle.EtTube.number}</p>
                  <h4>Mark</h4>
                  <p>{cprCycle.EtTube.mark}</p>
                </>
              )}

              <h3>C-Line</h3>
              {cprCycle.CLine && (
                <>
                  <h4>Time</h4>
                  <p>{cprCycle.CLine.createdAt.toString()}</p>
                  <h4>Number</h4>
                  <p>{cprCycle.CLine.number}</p>
                  <h4>Mark</h4>
                  <p>{cprCycle.CLine.mark}</p>
                </>
              )}

              <h3>EKG</h3>
              <ul>
                {cprCycle.Ekgs.map((ekg) => {
                  return (
                    <li>
                      <p>{ekg.createdAt.toString()}</p>
                      <p>{ekg.name}</p>
                      <p>{ekg.charge}</p>
                    </li>
                  );
                })}
              </ul>

              <h3>Medicine Take</h3>
              <ul>
                {cprCycle.MedicineTakes.map((medicineTake) => {
                  return (
                    <li>
                      <p>{medicineTake.createdAt.toString()}</p>
                      <p>{medicineTake.dose}</p>
                      <p>{medicineTake.MedicineDoc.name}</p>
                      <button
                        className="text-red-500"
                        onClick={() => deleteClick(medicineTake.id)}
                      >
                        X
                      </button>
                    </li>
                  );
                })}
              </ul>

              <h3>Iv fluid</h3>
              <ul>
                {cprCycle.IvFluids.map((ivFluid) => {
                  return (
                    <li>
                      <p>{ivFluid.createdAt.toString()}</p>
                      <p>{ivFluid.dose}</p>
                      <p>{ivFluid.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
