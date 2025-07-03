import Vista from "../assets/images/galeriaPiloto/Vista_4.png";
export const PageNotFound = () => {
  return (
    <div
      className="relative bg-cover md:bg-center h-screen"
      style={{ backgroundImage: `url(${Vista})` }}>
      {/* Background Opacity Overlay */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      {/* Text Content (Ensures it stays above the background) */}
      <div className="relative flex flex-col items-center h-full justify-center">
        <p className="text-7xl text-title font-bold">404, Oops!</p>
      </div>
    </div>
  );
};
