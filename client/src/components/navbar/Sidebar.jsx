import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const Sidebar = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="align-elements absolute top-0 right-0 w-full h-full backdrop-blur-md bg-white/50 flex  justify-start items-center"
        >
          <div className="text-sm uppercase py-10 text-black rounded-3xl ">
            <div className="border-t-2">
              <Link
                to="/login"
                className="inline-block text-gray-950 font-light text-[1.25rem] hover: hover:bg-gray-500/50 rounded-lg px-4 py-2 transition-all 2s ease mt-5"
              >
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
