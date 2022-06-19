import "./App.css";
import "./my_css.css";

import Menu from "./page/Menu";
import HomePage from "./page/HomePage";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import LinkCprAdrenalineTime from "./component/cpCycle/LinkCprAdrenalineTime";
import GroupEtEkgCline from "./component/groupEtEkgCline/GroupEtEkgCline";
import IvMedicineFluid from "./component/ivMedicine/IvMedicineFluid";
import Medicine from "./component/medicineDoc/Medicine";
import TimerStarCpr from "./component/Timer/TimerStarCpr";

function App() {
  return (
    <>
      <Menu />
      {/* <HomePage /> */}
      {/* <TimerStarCpr /> */}
      {/* <Login />
      <Register /> */}
      <LinkCprAdrenalineTime />
      {/* <GroupEtEkgCline /> */}
    </>
  );
}

export default App;
