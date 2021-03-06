import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { listCprCycles, deleteMedicineTake } from "../../service/client";

export default function Print() {
  const [cprCycles, setCprCycles] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cprCycles) {
      listCprCycles().then((cprcycles) => setCprCycles(cprcycles));
    }
  });
  // const cprcycles   =   await listCprCycle()
  // setCprCycle(cprcycles)
  if (!cprCycles) {
    return <></>;
  }

  const deleteClick = async (id) => {
    await deleteMedicineTake(id).then(() =>
      listCprCycles().then((cprcycles) => setCprCycles(cprcycles))
    );
  };

  return (
    <div className="max-w-7xl mx-auto  py-8 my-bg4 ">
      {cprCycles.map((cprCycle, i) => {
        return (
          <div
            key={`cpr-cycle-${cprCycle.id}`}
            className="bg-black border-2 opacity-90 border-white text-gray-400 overflow-hidden shadow rounded-lg mx-auto max-w-4xl  h-full my-4"
          >
            <div className="px-4 py-5 sm:p-6">
              <h2 className="font-semibold text-lg text-lime">
                CprCycle {i + 1}
              </h2>

              <h3 className="text-lime  mt-5 mb-5 text-center">CPR Times</h3>
              <ul className="border-2 border-lime rounded-lg mb-5 text-center">
                {cprCycle.CprTimes.map((cprtime) => {
                  return (
                    <li key={`cpr-time-${cprtime.id}`}>
                      {moment(cprtime.createdAt).format("YY/MM/DD HH:mm:ss")}
                    </li>
                  );
                })}
              </ul>
              <hr />
              <h3 className="text-lime mt-5 mb-5 text-center">
                Adrenaline Times
              </h3>
              <ul className="border-2 border-lime rounded-lg mb-5 text-center">
                {cprCycle.AdrenalineTimes.map((adrenalineTime) => {
                  return (
                    <li key={`adrenaline-time-${adrenalineTime.id}`}>
                      {moment(adrenalineTime).format("YY/MM/DD HH:mm:ss")}
                    </li>
                  );
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
                  <p>
                    {moment(cprCycle.EtTube.createdAt).format(
                      "YY/MM/DD HH:mm:ss"
                    )}
                  </p>
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
                  <p>
                    {moment(cprCycle.CLine.createdAt).format(
                      "YY/MM/DD HH:mm:ss"
                    )}
                  </p>
                </div>
              )}
              <hr />

              <h3 className="text-lime mt-5 mb-5 text-center">EKG</h3>
              <ul>
                {cprCycle.Ekgs.map((ekg) => {
                  return (
                    <li
                      className="border-2 border-lime rounded-lg mb-2 text-center"
                      key={`ekg2-${ekg.id}`}
                    >
                      <p className="text-white">{ekg.name}</p>
                      <p>{ekg.charge}</p>
                      <p>{moment(ekg.createdAt).format("YY/MM/DD HH:mm:ss")}</p>
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
                      key={`medicineTake2-${medicineTake.id}`}
                    >
                      <p className="text-white">
                        {medicineTake.MedicineDoc.name}
                      </p>
                      <p>{medicineTake.dose}</p>
                      <p>
                        {moment(medicineTake.createdAt).format(
                          "YY/MM/DD HH:mm:ss"
                        )}
                      </p>
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
                      key={`Ivfluid1-${ivFluid.id}`}
                    >
                      <p className="text-white">{ivFluid.name}</p>
                      <p>{ivFluid.dose}</p>
                      <p>
                        {moment(ivFluid.createdAt).format("YY/MM/DD HH:mm:ss")}
                      </p>
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
