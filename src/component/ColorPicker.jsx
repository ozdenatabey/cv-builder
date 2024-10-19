import { colors } from "../data/colors";
import { setTheme } from "../redux/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

function ColorPicker() {
  const dispatch = useDispatch();
  const handleClick = (color) => {
    dispatch(setTheme(color.id));
  };
  const { language } = useSelector((state) => state.theme);

  return (
    <>
      {language === "en" && (
        <p className="text-xl font-bold text-center mt-4">Pick Color Theme</p>
      )}
      {language === "tr" && (
        <p className="text-xl font-bold text-center mt-4">
          Tema Rengini Seçiniz
        </p>
      )}
      <div className="flex space-x-4 my-4">
        {colors.map((color) => (
          <div key={color.id}>
            <div
              className="flex w-14 h-14 rounded-full border-2 border-black overflow-hidden hover:shadow-lg hover:shadow-gray-500"
              onClick={() => handleClick(color)}
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
