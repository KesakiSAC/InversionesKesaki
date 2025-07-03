import { Carousel } from "./Carousel";

import Planta_1 from "../assets/images/galeriaPlantas/planta_1.png";
import Planta_2 from "../assets/images/galeriaPlantas/planta_2.png";
import Planta_3 from "../assets/images/galeriaPlantas/planta_3.png";
import Planta_4 from "../assets/images/galeriaPlantas/planta_4.png";
import Planta_5 from "../assets/images/galeriaPlantas/planta_5.png";
import Planta_6 from "../assets/images/galeriaPlantas/planta_6.png";

import Planta_9 from "../assets/images/galeriaPlantas/planta_9.png";
import Planta_10 from "../assets/images/galeriaPlantas/planta_10.png";
import Planta_11 from "../assets/images/galeriaPlantas/planta_11.png";

export const GaleriaPlantas = () => {
  const slides = [
    Planta_1,
    Planta_2,
    Planta_3,
    Planta_4,
    Planta_5,
    Planta_6,
    Planta_9,
    Planta_10,
    Planta_11,
  ];
  return (
    <div className="rounded-lg md:max-w-8/10   p-5">
      <Carousel>
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Planta ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};
