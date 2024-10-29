import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

function Skills() {
  const { color, language } = useSelector((state) => state.theme);
  const skills = useSelector((state) => state.skill);

  return (
    <div className={`text-${color}-base mx-4`}>
      <p className="text-center text-lg font-bold underline underline-offset-2">
        {language === "en" ? "SKILLS" : "YETENEKLER"}
      </p>
      {skills.length > 0
        ? skills.map((skill) => (
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
          ))
        : ""}
    </div>
  );
}

export default Skills;
