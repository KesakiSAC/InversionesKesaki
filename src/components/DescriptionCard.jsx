import { useState } from "react";
import { Button } from "./Button";
import Lobby from "../assets/images/lobby.png";

export const DescriptionCard = ({ handlePopup }) => {
  const descripcion = `
    Ubicado en una de las zonas más exclusivas de Santiago de Surco, el proyecto Alonso de Molina 546 ofrece 18 departamentos distribuidos en 5 pisos, con áreas que van desde 82 m² hasta 210 m². Diseñado para quienes buscan confort, elegancia y una ubicación estratégica, este proyecto se encuentra rodeado de prestigiosas universidades, centros comerciales, supermercados y servicios esenciales. Cada departamento cuenta con 1, 2 a 3 dormitorios más un estudio, estacionamiento propio y acabados de alta calidad. Alonso de Molina 546 representa la combinación perfecta entre diseño, funcionalidad y estilo de vida.

  `;

  const caracteristicas = `
    <strong>Ubicación:</strong> Jr. Alonso de Molina 546, Manzana B, Lote 11, Urb. Huertos de San Antonio, Santiago de Surco <br>
    <strong>Metraje:</strong> Desde 80.00 m² hasta 210.00 m² <br>
    <strong>Dormitorios:</strong> 1, 2 y 3 <br>
    <strong>Etapa:</strong> Pre Venta <br>
    <strong>Entrega Estimada:</strong> Diciembre 2026 <br>
    <strong>Precio Desde:</strong> $ 176,000
  `;

  const acabados = `
    Este proyecto cuenta con un edificio que ofrece departamentos de 1,  2 y 3 dormitorios más estudio, 
    diseñados siguiendo las últimas tendencias en interiorismo, con materiales de alta calidad.
  `;

  const [activeTab, setActiveTab] = useState("DESCRIPCIÓN");
  const [content, setContent] = useState(descripcion);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "DESCRIPCIÓN") setContent(descripcion);
    if (tab === "CARACTERÍSTICAS") setContent(caracteristicas);
    if (tab === "ACABADOS") setContent(acabados);
  };

  const activeClass =
    "text-acentGreen border-4 border-secondaryGreen bg-secondaryGreen font-bold p-3";
  const inactiveClass =
    "text-acentGreen border-4  border-secondaryGreen p-3 hover:font-bold cursor-pointer";
  const inactiveClassd =
    "text-acentGreen border-4 border-secondaryGreen  p-3 hover:font-bold cursor-pointer";

  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 items-stretch sm:items-center text-center">
          <span
            className={
              activeTab === "DESCRIPCIÓN" ? activeClass : inactiveClassd
            }
            onClick={() => handleTabClick("DESCRIPCIÓN")}>
            DESCRIPCIÓN
          </span>
          <span
            className={
              activeTab === "CARACTERÍSTICAS" ? activeClass : inactiveClass
            }
            onClick={() => handleTabClick("CARACTERÍSTICAS")}>
            CARACTERÍSTICAS
          </span>
          <span
            className={activeTab === "ACABADOS" ? activeClass : inactiveClass}
            onClick={() => handleTabClick("ACABADOS")}>
            ACABADOS
          </span>
        </div>
        <div className="bg-secondaryGreen p-10 flex flex-col items-center justify-center rounded-r-lg rounded-bl-lg">
          <div className="flex flex-col md:flex-row items-center justify-evenly pb-10 w-full gap-8">
            <p
              className="text-acentGreen text-base md:w-5/10 "
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <img
              className="rounded-lg max-w-full h-auto  md:w-1/3"
              src={Lobby}
              alt="Lobby del Edificio"
            />
          </div>
          <Button
            className="mt-5 self-center"
            onClick={(e) => {
              e.preventDefault();

              handlePopup(true);
            }}>
            ¡Cotiza Ahora!
          </Button>
        </div>
      </div>
    </div>
  );
};
