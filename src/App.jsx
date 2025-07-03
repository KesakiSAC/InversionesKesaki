import { useLocation } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";
import { PopupForm } from "./components/PopupForm";

const App = () => {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="relative">
      {location.pathname !== "/" && <Header handlePopup={setIsPopupOpen} />}
      <div
        className={`${
          isPopupOpen ? "blur-sm" : ""
        } transition-all duration-300`}>
        <AllRoutes handlePopup={setIsPopupOpen} />
        <Footer />
      </div>
      {isPopupOpen && (
        <>
          {console.log("Popup is open")}
          <PopupForm onClose={() => setIsPopupOpen(false)} />
        </>
      )}
    </div>
  );
};

export default App;
