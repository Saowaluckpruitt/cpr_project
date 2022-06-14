const cprCycle = "cprCycle";
const setcprCycle = (cprCycle) => localStorage.setItem(cprCycle, cprCycle.id);
const getcprCycle = () => localStorage.getItem(ekg);
export { setcprCycle, getcprCycle };
