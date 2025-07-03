import Pumacahua from "../assets/images/Pumacahua.jpg";
import logo from "../assets/LOGO.svg";

export const Nosotros = () => {
  return (
    <div>
      <div className="relative max-w-[155vh] mx-auto">
        <div
          className="w-full min-h-[90vh] bg-bottom bg-no-repeat bg-cover relative"
          style={{ backgroundImage: `url(${Pumacahua})` }}>
          {/* Background Overlay for Opacity */}
          <div className="absolute inset-0 bg-white opacity-60 "></div>

          {/* Content Wrapper */}
          <div className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-[90vh] gap-6 md:gap-30 px-4">
            <div className=" p-5 flex flex-col rounded-lg">
              <h2 className="text-acentOrange1 text-xl font-bold pb-5">
                NOSOTROS
              </h2>
              <h1 className="text-acentGreen  text-xl md:text-3xl font-bold md:pb-8">
                22 años construyendo <br /> hogares con calidad y <br /> calidez
              </h1>
            </div>
            <div className="bg-acentOrange  shadow-2xl p-6 flex flex-col rounded-lg">
              <h1 className="text-white text-xl md:text-3xl font-bold py-2">
                +18
              </h1>
              <p className="text-white md:text-xl font-bold py-2">
                Proyectos entregados
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto py-10 bg-secondaryGreen">
        <div className="flex flex-row items-center justify-evenly max-w-7xl  mx-auto  flex-wrap">
          <div className="flex flex-col flex-wrap">
            <img
              src={logo}
              className="h-25 md:h-40 
                     rounded-lg"
              alt="Inversiones Kesaki Logo"
            />

            <span className="self-center text-xl md:text-2xl pt-2 text-title font-onest font-bold whitespace-nowrap">
              Inversiones Kesaki
            </span>
            <span className="self-center text-[0.65rem] md:text-[0.75rem] text-gray-500 font-onest font-bold whitespace-nowrap">
              CONSTRUCTORA E INMOBILIARIA
            </span>
          </div>
          <p className="text-acentGreen py-10 md:py-20 px-8 md:w-5/10 md:text-xl">
            Inversiones Kesaki SAC es una empresa peruana con más de 20 años de
            experiencia en el desarrollo de proyectos inmobiliarios. Desde el
            año 2003, nos hemos especializado en diseñar y construir espacios
            residenciales que se adaptan a las necesidades de las familias
            modernas, priorizando la calidad, funcionalidad y ubicación
            estratégica.
            <br />
            <br />
            Con más de 18 proyectos entregados exitosamente y numerosas familias
            satisfechas, nuestra trayectoria refleja un firme compromiso con la
            excelencia y la mejora continua. Cada proyecto que desarrollamos es
            el resultado de un trabajo minucioso, que integra diseño
            arquitectónico moderno, materiales de primera y una atención
            personalizada a nuestros clientes.
            <br />
            <br />
            En Inversiones Kesaki, construimos más que viviendas: construimos
            hogares donde nacen historias felices.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-30 flex flex-col md:flex-row justify-evenly gap-8 px-4">
        <div className="p-10 md:w-1/2 w-full rounded-lg border-5 border-secondaryGreen">
          <h2 className="text-acentOrange1 text-2xl font-bold pb-1">Nuestra</h2>
          <h1 className="text-acentGreen text-4xl font-bold">Misión</h1>
          <p className="text-acentGreen py-6 md:text-xl">
            Desarrollar proyectos inmobiliarios sostenibles, funcionales y
            estéticamente superiores, que mejoren la calidad de vida de nuestros
            clientes. En Inversiones Kesaki, trabajamos con integridad, pasión y
            compromiso, construyendo desde 2003 hogares donde más de 18 familias
            ya han confiado para comenzar una nueva etapa de vida.
          </p>
        </div>
        <div className="p-10 md:w-1/2 w-full rounded-lg border-5 border-secondaryGreen">
          <h2 className="text-acentOrange1 text-2xl font-bold pb-1">Nuestra</h2>
          <h1 className="text-acentGreen text-4xl font-bold">Visión</h1>
          <p className="text-acentGreen py-6 md:text-xl">
            Ser una de las desarrolladoras inmobiliarias líderes del Perú,
            reconocida por entregar proyectos de alta calidad, con diseño
            innovador y compromiso con la satisfacción de nuestros clientes,
            transformando espacios en hogares felices.
          </p>
        </div>
      </div>
    </div>
  );
};
