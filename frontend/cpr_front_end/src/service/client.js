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

export const createCLine = async (number, mark, cprCycleId) => {
  const takeCLine = await axios.post("/cLine", {
    number,
    mark,

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

  return ekg.data.ekg;
};

export const createEtTube = async (number, mark, cprCycleId) => {
  const makeEtTube = await axios.post("/etTube", {
    number,
    mark,

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

export const createIvFluid = async (
  iv,
  maintained,
  loaded,
  dose,
  cprCycleId
) => {
  const createIvFluid = await axios.post("/ivFluid", {
    iv,
    maintained,
    loaded,
    dose,
    cprCycleId,
  });
  return createIvFluid.data.ivFluid;
};
