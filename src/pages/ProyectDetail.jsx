import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import BackgroundSala from "../assets/images/backgroundSala.png";
import BackgroundSalaBlur from "../assets/images/backgroundSala-blur.png";
import Fachada from "../assets/images/Fachada.png";
import { GaleriaPlantas } from "../components/GaleriaPlantas";
import { GaleriaImg } from "../components/GaleriaImg";
import { GaleriaPlantaDuplex } from "../components/GaleriaPlantaDuplex";
import Mapa from "../assets/images/Mapa.png";
import MapaZoom from "../assets/images/Mapa-Zoom.png";
import Parque from "../assets/images/parque.PNG";
import Supermercado from "../assets/images/supermercado.PNG";
import Universidad from "../assets/images/universidad.PNG";
import Bottom from "../assets/images/fachadablurry.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";
import { DescriptionCard } from "../components/DescriptionCard";

export const ProyectDetail = ({ handlePopup }) => {
  const [bgImage, setBgImage] = useState(BackgroundSalaBlur);
  useEffect(() => {
    const img = new Image();
    img.src = BackgroundSala;
    img.onload = () => setBgImage(BackgroundSala);
  }, []);
  return (
    <div>
      <div
        className="bg-cover md:bg-center h-screen overflow-clip transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${BackgroundSala})` }}>
        <Header handlePopup={handlePopup}></Header>
        <section className="max-w-7xl  mx-auto pt-10">
          <div className="flex  md:flex-row  flex-wrap justify-center items-center sm:items-center p-8 gap-20">
            <div className="bg-white/50 p-5 flex flex-col rounded-lg ">
              <h2 className="text-acentOrange1  text-xl  font-bold pb-5 shrink ">
                PROYECTO ALONSO DE MOLINA
              </h2>
              <h1 className="text-acentGreen text-3xl font-bold pb-8">
                Departamentos diseñados <br /> pensando en tu futuro
              </h1>
              <a
                href="/BROCHURE2025.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <Button className="self-center">VER BROCHURE</Button>
              </a>
            </div>

            <img
              className="border-white/50 border-4 rounded-lg max-w-full h-auto md:w-1/4 lg:w-1/3 hidden md:block"
              src={Fachada}
              alt="Fachada del edificio"></img>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto pt-30 px-4  sm:px-6 lg:px-8">
        <DescriptionCard handlePopup={handlePopup}></DescriptionCard>
      </div>

      <div className="max-w-7xl mx-auto pt-30 px-4  sm:px-6 lg:px-8">
        <div className="flex flex-col pb-25">
          <div className="pb-5 text-center md:text-left">
            <h1 className="text-acentGreen text-3xl md:text-5xl font-roboto font-bold pb-2">
              Nuestros Espacios
            </h1>

            <span className="text-acentOrange1 text-lg md:text-2xl font-bold ">
              Departamento Virtual Piloto
            </span>
          </div>

          <GaleriaImg></GaleriaImg>
        </div>
      </div>

      <div className=" mx-auto pt-0 bg-secondaryGreen">
        <div className="max-w-7xl  mx-auto  ">
          <a
            href="https://www.google.com/maps/place/Jr.+Alonso+de+Molina+546,+Lima+15023,+Peru/@-12.1123297,-76.9752349,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c79bb433d4b5:0xa40ee91e507a6fb8!8m2!3d-12.112335!4d-76.9726546!16s%2Fg%2F11rzgs_hc1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank">
            <img
              className="rounded-lg py-9 hidden md:block"
              src={Mapa}
              alt="Ubicación del proyecto"
            />
            <img
              className="rounded-lg py-9 block md:hidden"
              src={MapaZoom}
              alt="Ubicación del proyecto (Zoom)"
            />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-30 px-4 text-center md:text-left sm:px-6 lg:px-8">
        <h1 className="text-acentGreen text-3xl md:text-5xl font-bold pb-2">
          Plantas
        </h1>
        <h2 className="text-acentOrange1 text-lg md:text-2xl font-bold ">
          Departamentos de 1, 2 y 3 habitaciones
        </h2>
        <div className="flex flex-col items-center ">
          <GaleriaPlantas></GaleriaPlantas>
          <h2 className="text-acentOrange1 items-start text-lg md:text-2xl font-bold pt-3 ">
            Departamentos Duplex
          </h2>
          <GaleriaPlantaDuplex></GaleriaPlantaDuplex>

          <Button
            className="self-center "
            onClick={(e) => {
              e.preventDefault();

              handlePopup(true);
            }}>
            ¡Cotiza Ahora!
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-30 px-4 flex flex-col sm:px-6 lg:px-8">
        <h1 className="text-acentGreen text-3xl  md:text-5xl font-bold pb-2 self-center">
          Entorno
        </h1>
        <div className="flex items-center justify-evenly py-8">
          <img
            className="rounded-lg max-w-3/10  self-center"
            src={Parque}
            alt="Departamento Piloto"
          />
          <img
            className="rounded-lg max-w-3/10  self-center"
            src={Supermercado}
            alt="Departamento Piloto"
          />
          <img
            className="rounded-lg max-w-3/10  self-center"
            src={Universidad}
            alt="Departamento Piloto"
          />
        </div>
        <p className="text-base md:text-lg px-4 md:px-10">
          Proyecto Alonso está ubicado en Jr. Alonso de Molina 546, en el
          distrito de Surco, ofreciendo excelente conectividad con puntos
          estratégicos de la ciudad. Además, se encuentra cerca de bancos,
          parques, centros comerciales, colegios, universidades y hospitales,
          brindando comodidad y acceso a todo lo que necesitas.
        </p>
      </div>

      <div
        className="bg-cover bg-no-repeat md:bg-bottom h-full flex justify-center items-center py-50"
        style={{ backgroundImage: `url(${Bottom})` }}>
        <div className="max-w-7xl mx-auto  px-4  flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faClock}
            className="py-6 text-5xl text-acentGreen"
          />
          <h1 className="text-acentGreen text-2xl font-bold pb-2">
            Horario de Atención
          </h1>
          <p className="py-1 text-sm md:text-base">L-S: 9:00 am a 5:00 pm</p>
          <p className="py-1 text-sm md:text-base">D: 10:00 am a 5:00 pm</p>
          <p className="py-1 text-sm md:text-base">
            Sala de ventas: Jr. Alonso de Molina 546, distrito de Santiago de
            Surco.
          </p>
          <p className="py-1 font-bold text-acentGreen">
            Te recordamos que estamos atendiendo a través de todos nuestros
            canales digitales
          </p>
        </div>
      </div>
    </div>
  );
};
