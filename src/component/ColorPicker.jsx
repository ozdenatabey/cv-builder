// import { useState } from "react";
import { colors } from "../data/colors";

// eslint-disable-next-line react/prop-types
function ColorPicker({ onThemeSelect, language }) {
  const handleClick = (id) => {
    onThemeSelect(id);
  };

  return (
    <>
      {language === "en" && (
        <p className="text-xl font-bold">Pick Color Theme</p>
      )}
      {language === "tr" && (
        <p className="text-xl font-bold">Tema Rengini Seçiniz</p>
      )}
      <div className="flex space-x-4 mt-4">
        {colors.map((color) => (
          <div key={color.id}>
            <div
              className="flex w-14 h-14 rounded-full border-2 border-black overflow-hidden hover:shadow-lg hover:shadow-gray-500"
              onClick={() => handleClick(color.id)}
            >
              <div className={`bg-[${color.primary}] w-1/2`}></div>
              <div className={`bg-[${color.header}] w-1/2`}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ColorPicker;
