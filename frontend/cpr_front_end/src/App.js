import "./App.css";
import "./my_css.css";
import Navbar from "./service/Navbar1";

import Menu from "./route/Menu";
import HomePage from "./route/HomePage";
import Login from "./route/Login";
import Register from "./route/Register";
import LinkCprAdrenalineTime from "./route/LinkCprAdrenalineTime";
import GroupEtEkgCline from "./route/GroupEtEkgCline";
import IvMedicineFluid from "./route/IvMedicineFluid";
import MedicineLibary from "./route/MedicineLibary";
import MedicineDoc from "./route/MedicineDoc";

function App() {
  return (
    <>
      <Menu />
      <HomePage />
      <LinkCprAdrenalineTime />
      <GroupEtEkgCline />
    </>
  );
}

export default App;
