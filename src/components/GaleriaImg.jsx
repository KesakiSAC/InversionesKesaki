import { Carousel } from "./Carousel";
import Vista_1 from "../assets/images/galeriaPiloto/vista_1.png";
import Vista_2 from "../assets/images/galeriaPiloto/vista_2.png";
import Vista_3 from "../assets/images/galeriaPiloto/vista_3.png";
import Vista_4 from "../assets/images/galeriaPiloto/vista_4.png";
import Vista_5 from "../assets/images/galeriaPiloto/vista_5.png";
import Vista_6 from "../assets/images/galeriaPiloto/vista_6.png";
import Vista_7 from "../assets/images/galeriaPiloto/vista_7.png";
import Vista_8 from "../assets/images/galeriaPiloto/vista_8.png";
import Vista_9 from "../assets/images/galeriaPiloto/vista_9.png";
import Vista_10 from "../assets/images/galeriaPiloto/vista_10.png";

export const GaleriaImg = () => {
  const slides = [
    Vista_1,
    Vista_2,
    Vista_3,
    Vista_4,
    Vista_5,
    Vista_6,
    Vista_7,
    Vista_8,
    Vista_9,
    Vista_10,
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className=" max-w-full object-fit opacity-25 overflow-hidden rounded-l-lg hidden md:block">
          <img src={Vista_1} className="h-90 w-30 object-cover" alt="Vista 1" />
        </div>
        <div className="md:w-2/3 md:rounded-lg self-center ">
          <Carousel>
            {slides.map((s, index) => (
              <img key={index} src={s} alt={`Vista ${index + 1}`} />
            ))}
          </Carousel>
        </div>
        <div className=" opacity-25 overflow-hidden rounded-r-lg hidden md:block">
          <img src={Vista_10} className="h-90 w-30 object-cover"></img>
        </div>
      </div>
    </div>
  );
};
