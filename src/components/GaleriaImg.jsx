import { Carousel } from "./Carousel";
import Vista1 from "../assets/images/galeriaPiloto/vista1.png";
import Vista2 from "../assets/images/galeriaPiloto/vista2.png";
import Vista3 from "../assets/images/galeriaPiloto/vista3.png";
import Vista4 from "../assets/images/galeriaPiloto/vista4.png";
import Vista5 from "../assets/images/galeriaPiloto/vista5.png";
import Vista6 from "../assets/images/galeriaPiloto/vista6.png";
import Vista7 from "../assets/images/galeriaPiloto/vista7.png";
import Vista8 from "../assets/images/galeriaPiloto/vista8.png";
import Vista9 from "../assets/images/galeriaPiloto/vista9.png";
import Vista10 from "../assets/images/galeriaPiloto/vista10.png";

export const GaleriaImg = () => {
  const slides = [
    Vista1,
    Vista2,
    Vista3,
    Vista4,
    Vista5,
    Vista6,
    Vista7,
    Vista8,
    Vista9,
    Vista10,
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
