export const ProyectCard = ({ proyect }) => {
  const { id, img, title, description } = proyect;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col items-center p-4 h-full">
      <img className="rounded-t-lg h-[50vh]" src={img} alt="" />
      <h5 className="my-4 text-2xl font-bold tracking-tight text-acentGreen text-center">
        {title}
      </h5>
      <p className="mb-3 font-normal text-acentGreen text-center ">
        {description}
      </p>
    </div>
  );
};
