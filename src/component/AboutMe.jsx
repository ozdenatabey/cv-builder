import { FaArrowCircleRight } from "react-icons/fa";
import { aboutMe } from "../data/userData";

// eslint-disable-next-line react/prop-types
function AboutMe({ theme }) {
  return (
    <div className={`text-${theme}-primary`}>
      <p
        className={`font-bold text-2xl mb-1 underline decoration-${theme}-header decoration-2`}
      >
        ABOUT ME
      </p>
      {aboutMe.map((property) => (
        <div key={property.id} className="flex items-center space-x-2 ">
          <FaArrowCircleRight className={`text-${theme}-header`} />
          <p>{property.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutMe;
