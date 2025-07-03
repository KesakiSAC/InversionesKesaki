import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="text-white shadow-xl bg-acentOrange hover:bg-acentGreen text-sm md:font-medium rounded-lg md:text-lg p-2 md:px-4 md:py-3 font-redHat self-center">
        {children}
      </button>
    </div>
  );
};
