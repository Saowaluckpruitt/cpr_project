import "./App.css";
import "./my_css.css";

import Menu from "./route/Menu";
import HomePage from "./route/HomePage";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import LinkCprAdrenalineTime from "./route/LinkCprAdrenalineTime";
import GroupEtEkgCline from "./component/groupEtEkgCline/GroupEtEkgCline";
import IvMedicineFluid from "./route/IvMedicineFluid";
import MedicineLibary from "./route/MedicineLibary";
import MedicineDoc from "./route/MedicineDoc";

function App() {
  return (
    <>
      <Menu />
      <HomePage />
      <Login />
      <Register />
      <LinkCprAdrenalineTime />
      <GroupEtEkgCline />
      <IvMedicineFluid />
      <MedicineLibary />
      <MedicineDoc />
    </>
  );
}

export default App;
