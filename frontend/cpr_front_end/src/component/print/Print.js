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
    <div className="max-w-7xl mx-auto  py-8 my-bg4 ">
      {cprCycles.map((cprCycle) => {
        return (
          <div className="bg-black border-2 opacity-90 border-white text-gray-400 overflow-hidden shadow rounded-lg mx-auto max-w-4xl  h-full my-4">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="font-semibold text-lg text-lime">CprCycle</h2>

              <h3 className="text-lime  mt-5 mb-5 text-center">CPR Times</h3>
              <ul className="border-2 border-lime rounded-lg mb-5 text-center">
                {cprCycle.CprTimes.map((cprtime) => {
                  return <li>{cprtime.createdAt.toString()}</li>;
                })}
              </ul>
              <hr />
              <h3 className="text-lime mt-5 mb-5 text-center">
                Adrenaline Times
              </h3>
              <ul className="border-2 border-lime rounded-lg mb-5 text-center">
                {cprCycle.AdrenalineTimes.map((adrenalineTime) => {
                  return <li>{adrenalineTime.createdAt.toString()}</li>;
                })}
              </ul>
              <hr />
              <h3 className="text-lime mt-5 mb-5 text-center">Et-Tube</h3>
              {cprCycle.EtTube && (
                <div className="border-2 border-lime rounded-lg mb-5 text-center">
                  <h4 className="text-white ">Number</h4>
                  <p>{cprCycle.EtTube.number}</p>
                  <hr />
                  <h4 className="text-white">Mark</h4>
                  <p>{cprCycle.EtTube.mark}</p>
                  <hr />
                  <h4 className="text-white">Time</h4>
                  <p>{cprCycle.EtTube.createdAt.toString()}</p>
                </div>
              )}
              <hr />
              <h3 className="text-lime mt-5 mb-5 text-center">C-Line</h3>
              {cprCycle.CLine && (
                <div className="border-2 border-lime rounded-lg mb-5 text-center">
                  <h4 className="text-white">Number</h4>
                  <p>{cprCycle.CLine.number}</p>
                  <hr />
                  <h4 className="text-white">Mark</h4>
                  <p>{cprCycle.CLine.mark}</p>
                  <hr />
                  <h4 className="text-white">Time</h4>
                  <p>{cprCycle.CLine.createdAt.toString()}</p>
                </div>
              )}
              <hr />

              <h3 className="text-lime mt-5 mb-5 text-center">EKG</h3>
              <ul>
                {cprCycle.Ekgs.map((ekg) => {
                  return (
                    <li
                      className="border-2 border-lime rounded-lg mb-2 text-center"
                      key="ekg2"
                    >
                      <p className="text-white">{ekg.name}</p>
                      <p>{ekg.charge}</p>
                      <p>{ekg.createdAt.toString()}</p>
                    </li>
                  );
                })}
              </ul>
              <hr />

              <h3 className="text-lime mt-5 mb-5 text-center">Medicine Take</h3>
              <ul>
                {cprCycle.MedicineTakes.map((medicineTake) => {
                  return (
                    <li
                      className="border-2 border-lime rounded-lg mb-2 pl-3 text-center"
                      key="medicineTake2"
                    >
                      <p className="text-white">
                        {medicineTake.MedicineDoc.name}
                      </p>
                      <p>{medicineTake.dose}</p>
                      <p>{medicineTake.createdAt.toString()}</p>
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
              <hr />
              <h3 className="text-lime mt-5 mb-5 text-center">Iv fluid</h3>
              <ul>
                {cprCycle.IvFluids.map((ivFluid) => {
                  return (
                    <li
                      className="border-2 border-lime rounded-lg mb-2 pl-2 text-center pt-2 "
                      key="Ivfluid1"
                    >
                      <p className="text-white">{ivFluid.name}</p>
                      <p>{ivFluid.dose}</p>
                      <p>{ivFluid.createdAt.toString()}</p>
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
