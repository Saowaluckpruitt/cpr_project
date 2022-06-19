import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";
import Layout from "../Layout/Layout";
import HomePage from "../page/HomePage";
import Login from "../component/auth/Login";
import Register from "../component/auth/Register";
import LinkCprAdrenalineTime from "../component/cpCycle/LinkCprAdrenalineTime";
import Print from "../component/print/Print";

export default function Router() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="/cprCycle" element={<LinkCprAdrenalineTime />} />
            <Route path="/print" element={<Print />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}
