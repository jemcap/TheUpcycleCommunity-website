import React from "react";
import { useLocation } from "react-router-dom"; // Assumes you're using React Router

const Navlinks = () => {
  const location = useLocation(); // Get the current path
  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Gallery", href: "/gallery" },
    { id: 4, name: "Contact", href: "/contact" },
    { id: 5, name: "Profile", href: "/profile" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-col gap-2 p-4 w-full max-w-xs"
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          tabIndex={0}
          className={`block w-full px-4 py-2 text-sm text-start rounded-md transition-all duration-200 ease-in-out ${
            location.pathname === link.href
              ? "text-white bg-gray-800"
              : "text-gray-800 hover:bg-gray-300 hover:text-gray-900"
          }`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Navlinks;
