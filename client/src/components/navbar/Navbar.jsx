import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NAVBAR_LINKS } from "../../utils/links";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import { FaUser } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { clearCredentials } from "../../slices/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [logout, { isLoading, error }] = useLogoutMutation();

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  const username = userInfo?.user?.username || "User";

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      dispatch(clearCredentials());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="z-10 absolute top-0 left-0  w-full ">
        <div className="align-elements container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl flex items-center text-white font-bold py-5">
            <h1>The Upcycle Community</h1>
          </div>
          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex item-center gap-6 text-sm text-white">
              {NAVBAR_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="inline-block px-3 py-1 hover:text-green-700"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons */}
          <div className="hidden md:block">
            <div className="flex items-center gap-6 text-white">
              {userInfo ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost rounded-btn"
                  >
                    <FaUser />
                    <p>Welcome, {username}</p>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-base-100 text-black rounded-box z-[1] mt-4 w-52 p-2 shadow"
                  >
                    <li>
                      <a>Profile</a>
                    </li>
                    <li>
                      <a onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  className=" rounded-lg px-3 py-1  font-semibold hover:bg-green-700 hover:text-white transition-all 2s ease"
                >
                  <h1>Start Contributing</h1>
                </Link>
              )}
            </div>
          </div>
          {/* Mobile hamburger menu */}
          <div
            className="block md:hidden text-4xl font-bold cursor-pointer text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </nav>
      {/* // Mobile Sidebar */}
      <div className="block md:hidden ">
        <Sidebar open={open} />
      </div>
    </>
  );
};

export default Navbar;
