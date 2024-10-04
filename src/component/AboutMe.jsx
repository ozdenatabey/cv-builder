import { FaArrowCircleRight } from "react-icons/fa";
import { aboutMe } from "../../data/userData";

function AboutMe() {
  return (
    <div className="mx-4 text-primary">
      <p className="font-bold text-2xl mb-1 underline decoration-header decoration-2">
        ABOUT ME
      </p>
      {aboutMe.map((property) => (
        <div key={property.id} className="flex items-center space-x-2 ">
          <FaArrowCircleRight className="text-header" />
          <p>{property.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutMe;
