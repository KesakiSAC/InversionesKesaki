import logo from "../assets/LOGO.svg";
import { useState } from "react";
import { Button } from "../components/Button";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Header = ({ handlePopup }) => {
  const [hidden, setHidden] = useState(true);
  const location = useLocation();
  const isProyectDetail = location.pathname === "/";

  const activeClass =
    "block py-2 px-3 md:p-0 text-white text-lg font-redHat   bg-acentOrange1 font-bold md:bg-transparent md:text-acentOrange1  ";
  const inactiveClass =
    "block py-2 px-3 md:p-0 text-gray-900 text-lg  font-redHat  rounded-sm hover:bg-gray-100  md:hover:bg-transparent hover:font-bold md:hover:text-acentOrange1 ";
  return (
    <header>
      <nav
        className={`${
          isProyectDetail ? "bg-brownheader/55" : "bg-brownheader"
        } relative h-20 py-6`}>
        <div className="max-w-screen-xl mx-auto p-2 flex items-center justify-between h-full relative">
          <div className="flex items-center space-x-8 left-3 flex-wrap">
            <Link
              to=""
              className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src={logo}
                className="h-10 md:h-14 rounded-lg ml-4 "
                alt="Inversiones Kesaki Logo"
              />
              <div className="flex flex-col">
                <span className="hidden md:inline self-center text-xs md:text-xl text-title font-onest font-bold whitespace-nowrap">
                  Inversiones Kesaki
                </span>
                <span className=" hidden md:inline self-center text-[0.40rem] md:text-[0.60rem] text-acentGreen font-onest font-bold whitespace-nowrap">
                  CONSTRUCTORA E INMOBILIARIA
                </span>
              </div>
            </Link>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button
              onClick={(e) => {
                e.preventDefault();
                console.log("Button clicked");
                handlePopup(true);
              }}>
              ¡Cotiza Ahora!
            </Button>
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              hidden ? "hidden" : "absolute top-full left-0 right-0 z-10"
            }
               items-center justify-between  w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky">
            <ul
              className={`${
                hidden
                  ? "  flex flex-col font-medium  p-8 md:p-0 mt-4   md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
                  : "bg-brownheader/95 flex flex-col font-medium  p-8 md:p-0 mt-4   md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
              } `}>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                  aria-current="page">
                  Proyecto Alonso{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/proyecto/entregados"
                  onClick={() => setHidden(true)} // ✅ CLOSE MENU ON CLICK
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }>
                  Proyectos Entregados
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosotros"
                  onClick={() => setHidden(true)} // ✅ CLOSE MENU ON CLICK
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }>
                  Nosotros
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
