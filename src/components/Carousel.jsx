import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  return (
    <div className="overflow-hidden relative rounded-lg">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="md:py-6 text-sm md:text-2xl bg-acentGreen/30 md:bg-acentGreen/50 p-2 text-white">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={next}
          className="md:py-6 text-sm md:text-2xl  bg-acentGreen/30 md:bg-acentGreen/50 p-2 text-white">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className="absolute bottom-1 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-1.5 h-1.5 md:w-3 md:h-3 bg-acentGreen rounded-full ${
                  curr === i ? "md:p-2 " : "bg-acentGreen/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
