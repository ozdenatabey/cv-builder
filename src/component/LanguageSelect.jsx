import trFlag from "../assets/trFlag.jpg";
import enFlag from "../assets/enFlag.png";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/slices/themeSlice";

function LanguageSelect() {
  const dispatch = useDispatch();
  const handleClick = (langId) => {
    dispatch(setLanguage(langId));
  };
  return (
    <div>
      <div className="flex space-x-2">
        <img
          className="w-16 border-2 border-black rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-400 duration-200 transition-all"
          src={trFlag}
          alt="tr"
          onClick={() => {
            handleClick("tr");
          }}
        />
        <img
          className="w-16 border-2 border-black rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-400 duration-200 transition-all"
          src={enFlag}
          alt="en"
          onClick={() => {
            handleClick("en");
          }}
        />
      </div>
    </div>
  );
}

export default LanguageSelect;
