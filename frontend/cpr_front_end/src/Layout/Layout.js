import { Outlet } from "react-router-dom";

import React from "react";
import Menu from "../page/Menu";

export default function Layout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}
