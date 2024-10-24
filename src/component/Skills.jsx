import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { engineeringTools, programmingTools } from "../data/userData";
import { FaCode, FaGear } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Skills() {
  const { color, language } = useSelector((state) => state.theme);
  return (
    <div className={`text-${color}-base mx-4 space-y-4`}>
      <p className="text-center text-lg font-bold underline underline-offset-2">
        {language === "en" ? "SKILLS" : "YETENEKLER"}
      </p>
      <div>
        <div className="flex items-center font-semibold">
          <FaGear className="mr-2" />
          <p>
            {language === "en" ? "Engineering Tools" : "Mühendislik Araçları"}
          </p>
        </div>
        {engineeringTools.map((skill) => (
          <div
            key={skill.id}
            className={`flex justify-between text-${color}-base text-sm mx-4`}
          >
            <p>- {skill.name}</p>
            <Rating
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              initialRating={skill.level}
              readonly
            />
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center font-semibold">
          <FaCode className="mr-2" />
          <p>{language === "en" ? "Programming Tools" : "Yazılım Araçları"}</p>
        </div>
        {programmingTools.map((skill) => (
          <div
            key={skill.id}
            className={`flex justify-between text-${color}-base text-sm mx-4`}
          >
            <p>- {skill.name}</p>
            <Rating
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              initialRating={skill.level}
              readonly
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
