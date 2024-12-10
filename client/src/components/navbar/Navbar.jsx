import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { clearCredentials } from "../../slices/authSlice";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const username = userInfo?.user?.username || userInfo?.username;

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md">
        <div className="align-elements container mx-auto flex justify-between items-center py-2">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            <h1>The Upcycle Community</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {userInfo ? (
              <>
                <div>
                  <button>Create post</button>
                </div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 cursor-pointer text-black"
                  >
                    <FaUser />
                    <span>Welcome, {username}</span>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content mt-2 p-2 shadow bg-white rounded-box w-52"
                  >
                    <li>
                      <a href="/profile">Profile</a>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="text-sm px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all"
              >
                Start Contributing
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div
            className="md:hidden text-4xl cursor-pointer text-black"
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sidebar open={open} />
      </div>
    </>
  );
};

export default Navbar;
