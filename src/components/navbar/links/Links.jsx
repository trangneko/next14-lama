"use client";
import { useState } from "react";
import NavLink from "./navLink/navLink";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const [open, setOpen] = useState(true);

  const session = true;
  const isAdmin = true;

  return (
    <>
      <div className="hidden md:flex items-center">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="px-4 py-2 rounded-xl bg-gray-900">Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <div className="md:hidden">
        <button
          id="mobile-menu-button"
          className="focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {open && (
          <div className="mobileLinks">
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Links;
