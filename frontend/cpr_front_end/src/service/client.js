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

export const createCLine = async (number, mark) => {
  const takeCLine = await axios.post("/cLine", { number, mark });

  return takeCLine.data.CLine;
};
