const cprCycleId = "cprCycleId";
const setcprCycleId = (cprCycleId) =>
  localStorage.setItem(cprCycleId, cprCycle.id);
const getcprCycleId = () => localStorage.getItem(cprCycle);
export { setcprCycleId, getcprCycleId };
