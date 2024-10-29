import { FaArrowCircleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

function AboutMe() {
  const { color, language } = useSelector((state) => state.theme);
  const abouts = useSelector((state) => state.about);

  return (
    <div className={`text-${color}-primary`}>
      <p
        className={`font-bold text-2xl mb-1 underline decoration-${color}-header decoration-2`}
      >
        {language === "en" ? "ABOUT ME" : "HAKKIMDA"}
      </p>
      {abouts.length > 0
        ? abouts.map((about) => (
            <div key={about.id} className="flex items-center space-x-2 ">
              <FaArrowCircleRight className={`text-${color}-header`} />
              <p>{about.name}</p>
            </div>
          ))
        : ""}
    </div>
  );
}

export default AboutMe;
