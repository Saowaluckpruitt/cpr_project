import axios from "../config/axios";
import { setEkg, getEkg } from "../service/ekgStorage";

//cpr
export const createCprCycle = async (cprStart) => {
  const startCprCycle = await axios.post("/cprCycle", { cprStart });

  return startCprCycle.data.cprCycle;
};

//ekg
// const idEkg = getEkg;
// export const confirmEkg = async (name, charge) => {

//   const confirm = await axios.post("/ekg", { name, charge });
//   return setEkg(confirm.data.idEkg);
// };
