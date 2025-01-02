import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Register",
      link: "/register",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container flex justify-between items-center py-5">
      {/* logo */}
      <img
        src="https://www.picsum.photos/id/1005/200/200"
        alt="logo"
        className="size-6 rounded-full"
      />
      {/* menus desktop */}
      <ul className="sm:flex gap-4 items-center hidden">
        {/* pengulangan array atau list menus */}
        {menus.map((menu, index) => (
          <li key={index}>
            <Link to={menu.link} className="hover:opacity-50 transition-all">
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* button triger mobile menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
        Menu
      </button>

      {/* menus mobile */}
      <ul
        className={`sm:hidden gap-4 items-center flex font-bold flex-col bg-blue-200 fixed top-0 right-0 w-2/3 h-full z-50 py-12 ${
          isOpen ? `translate-x-0` : `translate-x-full`
        } transition-all`}
      >
        {/* Button close */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
        {/* pengulangan array atau list menus */}
        {menus.map((menu, index) => (
          <li key={index}>
            <Link to={menu.link} className="hover:opacity-50 transition-all">
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* background overlay */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-all ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
}
