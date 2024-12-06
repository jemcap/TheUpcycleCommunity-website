import React, { useState } from "react";

import { NAVBAR_LINKS } from "../../utils/links";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import { FaUser } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="z-10 relative top-0 left-0 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl flex items-center font-bold py-5">
            <h1>The Upcycle Community</h1>
          </div>
          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex item-center gap-6 text-gray-600">
              {NAVBAR_LINKS.map((link) => (
                <li>
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
            <div className="flex items-center gap-6">
              <button className=" text-2xl rounded-lg px-3 py-1  font-semibold hover:bg-green-700 hover:text-white transition-all 2s ease">
                <FaUser />
              </button>
            </div>
          </div>
          {/* Mobile hamburger menu */}
          <div
            className="block md:hidden text-4xl font-bold cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </nav>
      {/* // Mobile Sidebar */}
      <div className="block md:hidden">
        <Sidebar open={open} />
      </div>
    </>
  );
};

export default Navbar;
