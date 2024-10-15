import { FaArrowRightLong } from "react-icons/fa6";
import { references } from "../data/userData";

// eslint-disable-next-line react/prop-types
function References({ theme, language }) {
  return (
    <div className={`text-${theme}-primary`}>
      <p
        className={`font-bold text-2xl mb-2 underline decoration-${theme}-header decoration-2`}
      >
        {language === "en" ? "REFERENCES" : "REFERANSLAR"}
      </p>
      {references.map((reference) => (
        <div key={reference.id} className="mb-1">
          <div className="flex items-center">
            <p className={`text-${theme}-header font-semibold`}>
              {reference.name}
            </p>
            <div className={`mx-2 text-${theme}-primary`}>
              <FaArrowRightLong />
            </div>
            <p className={`text-${theme}-primary`}>
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
