import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAVBAR_LINKS } from "../../utils/links";

const Sidebar = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-14 right-0 w-full h-screen z-20"
        >
          <div className="text-sm font-semibold uppercase bg-white py-10 shadow-xl rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
