import { FaArrowCircleRight } from "react-icons/fa";
import { aboutMe } from "../data/userData";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function AboutMe({ language }) {
  const { color } = useSelector((state) => state.theme);
  return (
    <div className={`text-${color}-primary`}>
      <p
        className={`font-bold text-2xl mb-1 underline decoration-${color}-header decoration-2`}
      >
        {language === "en" ? "ABOUT ME" : "HAKKIMDA"}
      </p>
      {aboutMe.map((property) => (
        <div key={property.id} className="flex items-center space-x-2 ">
          <FaArrowCircleRight className={`text-${color}-header`} />
          <p>{property.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutMe;
