import { Routes, Route } from "react-router-dom";
import {
  ProyectDetail,
  PoyectosEntregados,
  Nosotros,
  PageNotFound,
} from "../pages";

export const AllRoutes = ({ handlePopup }) => {
  return (
    <>
      <Routes>
        <Route path="" element={<ProyectDetail handlePopup={handlePopup} />} />
        <Route path="proyecto/entregados" element={<PoyectosEntregados />} />
        <Route path="nosotros" element={<Nosotros />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
