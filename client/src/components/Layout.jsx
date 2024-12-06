import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="align-elements">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
