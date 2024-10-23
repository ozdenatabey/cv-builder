import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setButtonStatus } from "../../redux/slices/translateButtonSlice";

export default function TranslateButton() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.theme);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    const status = !isChecked ? "on" : "off";
    dispatch(setButtonStatus(status));
  };

  return (
    <>
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-blue-500" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-6" : ""
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-sm font-medium text-black">
          {language === "en" ? "Auto Translate" : "Otomatik Çeviri"}
          {language === "en" ? (
            <span className="pl-1 font-bold"> {isChecked ? "On" : "Off"} </span>
          ) : (
            <span className="pl-1 font-bold">
              {" "}
              {isChecked ? "Açık" : "Kapalı"}{" "}
            </span>
          )}
        </span>
      </label>
    </>
  );
}
