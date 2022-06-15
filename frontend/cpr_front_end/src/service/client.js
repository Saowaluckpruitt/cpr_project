import axios from "../config/axios";

export const createCprCycle = async (cprStart) => {
  const startCprCycle = await axios.post("/cprCycle", { cprStart });

  return startCprCycle.data.cprCycle;
};

export const createAdrenalineTime = async (startTime, cprCycleId) => {
  const createAdrenalineTime = await axios.post("/AdrenalineTime", {
    startTime,
    cprCycleId,
  });
  console.log(createAdrenalineTime);
  return createAdrenalineTime.data.adrenalineTime;
};

export const createCLine = async (number, mark, time, cprCycleId) => {
  const takeCLine = await axios.post("/cLine", {
    number,
    mark,
    time,
    cprCycleId,
  });

  return takeCLine.data.cLine;
};

export const createEkg = async (name, charge, cprCycleId) => {
  const ekg = await axios.post("/ekg", {
    name,
    charge,
    cprCycleId,
  });

  return ekg.data.Ekg;
};

export const createEtTube = async (number, mark, time, cprCycleId) => {
  const makeEtTube = await axios.post("/etTube", {
    number,
    mark,
    time,
    cprCycleId,
  });

  return makeEtTube.data.etTube;
};

export const createCprTime = async (startTime, cprCycleId) => {
  const createCprTime = await axios.post("/cprTime", {
    startTime,
    cprCycleId,
  });
  console.log(createCprTime);
  return createCprTime.data.cprTime;
};
