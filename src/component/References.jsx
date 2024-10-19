import { FaArrowRightLong } from "react-icons/fa6";
import { references } from "../data/userData";
import { useSelector } from "react-redux";

function References() {
  const { color, language } = useSelector((state) => state.theme);
  return (
    <div className={`text-${color}-primary`}>
      <p
        className={`font-bold text-2xl mb-2 underline decoration-${color}-header decoration-2`}
      >
        {language === "en" ? "REFERENCES" : "REFERANSLAR"}
      </p>
      {references.map((reference) => (
        <div key={reference.id} className="mb-1">
          <div className="flex items-center">
            <p className={`text-${color}-header font-semibold`}>
              {reference.name}
            </p>
            <div className={`mx-2 text-${color}-primary`}>
              <FaArrowRightLong />
            </div>
            <p className={`text-${color}-primary`}>
              {" "}
              {reference.company} / <b>{reference.phone}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default References;
