import Pumacahua from "../assets/images/galeriaProyectos/1Pumacahua.jpg";
import SantaCruz from "../assets/images/galeriaProyectos/2STACRUZ.jpg";
import Artigas from "../assets/images/galeriaProyectos/3ARTIGAS.png";
import Mariategui from "../assets/images/galeriaProyectos/4MARIATEGUI.jpg";
import LosRosales from "../assets/images/galeriaProyectos/5LOSROSALES.png";
import LinoAlarco from "../assets/images/galeriaProyectos/6LINOALARCO.png";
import Miami from "../assets/images/galeriaProyectos/7MIAMI.png";
import Almirante from "../assets/images/galeriaProyectos/8ALMIRANTEGUISSE.png";
import SanLorenzo from "../assets/images/galeriaProyectos/9SANLORENZO.png";
import { ProyectCard } from "../components/ProyectCard";
import Vista from "../assets/images/galeriaPiloto/Vista_4.png";
export const PoyectosEntregados = () => {
  const proyects = [
    {
      img: Pumacahua,
      title: "Pumacahua",
      description: "Distrito de Lince",
      id: 1,
    },
    {
      img: SantaCruz,
      title: "Alonso de Molina",
      description: "Distrito de Pueblo Libre",
      id: 2,
    },
    {
      img: Artigas,
      title: "Artigas",
      description: "Distrito de Pueblo Libre",
      id: 3,
    },
    {
      img: Mariategui,
      title: "Mariategui",
      description: "Distrito de Ate",
      id: 4,
    },
    {
      img: LosRosales,
      title: "Los Rozales",
      description: "Distrito de Surco",
      id: 5,
    },
    {
      img: LinoAlarco,
      title: "Lino Alarco",
      description: "Distrito de Pueblo Libre",
      id: 6,
    },
    {
      img: Miami,
      title: "Miami",
      description: "Distrito de La Molina",
      id: 7,
    },
    {
      img: Almirante,
      title: "Almirante Guisse",
      description: "Distrito de Lince",
      id: 8,
    },
    {
      img: SanLorenzo,
      title: "San Lorenzo",
      description: "Distrito de Pueblo Libre",
      id: 9,
    },
  ];
  return (
    <section
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${Vista})` }}>
      <div className="absolute inset-0 bg-white opacity-70"></div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-8">
        {proyects.map((proyect) => (
          <ProyectCard key={proyect.id} proyect={proyect} />
        ))}
      </div>
    </section>
  );
};
