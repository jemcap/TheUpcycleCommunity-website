import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Navlinks from "./navbar/Navlinks";
import DiscussionsSideBar from "./DiscussionsSideBar";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex align-elements">
        <Navlinks />
        <Outlet />
        <DiscussionsSideBar />
      </div>
    </>
  );
};

export default Layout;
