import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/LOGO.svg";

export const Footer = () => {
  return (
    <footer className="bg-secondaryGreen border-t border-acentOrange1 shadow-inner">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-10">
        <div className="md:flex md:justify-between md:items-start gap-12">
          <div className="mb-6 md:mb-0 flex items-center gap-4">
            <a
              href=""
              className="flex items-center space-x-3 rtl:space-x-reverse ">
              <img
                src={logo}
                className="h-12 rounded-lg"
                alt="Inversiones Kesaki Logo"
              />
              <div className="flex flex-col md:pe-20">
                <span className="self-center md:text-lg text-title font-onest font-bold whitespace-nowrap">
                  Inversiones Kesaki
                </span>
                <span className="self-center text-[0.40rem] md:text-[0.60rem] text-gray-500 font-onest font-bold whitespace-nowrap">
                  CONSTRUCTORA E INMOBILIARIA
                </span>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm mt-6 md:mt-0">
            <div>
              <h3 className="text-acentGreen font-semibold uppercase mb-4">
                Contacto
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} /> (+51)937 255 091 | Ventas
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} /> (+51)937 255 091 | Servicio
                  al ciente
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-acentGreen font-semibold uppercase mb-4">
                Categorías
              </h3>
              <ul className="space-y-2 text-gray-500">
                <NavLink to="proyecto/entregados">
                  <li className="hover:text-white cursor-pointer">Proyectos</li>
                </NavLink>
                <NavLink to="/nosotros">
                  <li className="hover:text-white cursor-pointer">Nosotros</li>
                </NavLink>
                <li className="hover:text-white cursor-pointer">
                  Servicio al cliente
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-acentGreen font-semibold uppercase mb-4">
                Síguenos en:
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.facebook.com/InversionesKesaki"
                  target="_blank"
                  className="hover:text-white text-gray-500">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
                <a
                  href="https://www.facebook.com/InversionesKesaki"
                  target="_blank"
                  className="hover:text-white text-gray-500">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
