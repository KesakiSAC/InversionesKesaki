import { Carousel } from "./Carousel";

import Planta_7 from "../assets/images/galeriaPlantas/planta_7D.png";
import Planta_8 from "../assets/images/galeriaPlantas/planta_8D.png";

import Planta_12 from "../assets/images/galeriaPlantas/planta_12D.png";
import Planta_13 from "../assets/images/galeriaPlantas/planta_13D.png";
import Planta_14 from "../assets/images/galeriaPlantas/planta_14D.png";
import Planta_15 from "../assets/images/galeriaPlantas/planta_15D.png";
import Planta_16 from "../assets/images/galeriaPlantas/planta_16D.png";
import Planta_17 from "../assets/images/galeriaPlantas/planta_17D.png";
import Planta_18 from "../assets/images/galeriaPlantas/planta_18D.png";
import Planta_19 from "../assets/images/galeriaPlantas/planta_19D.png";

export const GaleriaPlantaDuplex = () => {
  const slides = [
    Planta_7,
    Planta_8,
    Planta_12,
    Planta_13,
    Planta_14,
    Planta_15,
    Planta_16,
    Planta_17,
    Planta_18,
    Planta_19,
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
