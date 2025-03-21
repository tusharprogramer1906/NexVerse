"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const menuList = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Events", path: "/events" },
    { id: 3, name: "Team", path: "/team" },
    { id: 4, name: "Contact Us", path: "/#contact-section" },
  ];

  const path = usePathname();
  
  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 shadow-white/10 shadow-lg flex gap-10 sm:gap-20 justify-center items-center p-5 text-white text-sm sm:text-xl">
      {menuList.map((menu, index) => (
        <Link
          href={menu.path}
          key={index}
          className={`relative transition-transform duration-300 ease-in-out ${
            path === menu.path && "scale-105 font-extrabold"
          } hover:text-white hover:scale-110 hover:font-bold`}
        >
          {menu.name}
          <span
            className={`absolute left-0 right-0 h-[2px] bg-white origin-center transition-transform duration-300 ease-in-out ${
              path === menu.path ? "scale-x-100" : "scale-x-0"
            }`}
          ></span>
          <span
            className={`absolute left-0 right-0 -bottom-1 h-[2px] bg-white scale-x-0 origin-center transition-transform duration-300 ease-in-out ${
              path == menu.path ? "scale-x-100" : "hover:scale-x-100"
            }`}
          ></span>
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
