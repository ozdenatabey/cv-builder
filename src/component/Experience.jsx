import { useSelector } from "react-redux";

function Experience() {
  const { color, language } = useSelector((state) => state.theme);
  const experiences = useSelector((state) => state.experience);

  return (
    <div className={`text-${color}-primary`}>
      <p
        className={`font-bold text-2xl mb-2 underline decoration-${color}-header decoration-2`}
      >
        {language === "en" ? "WORK EXPERIENCE" : "İŞ DENEYİMİ"}
      </p>
      {experiences.length > 0
        ? experiences.map((experience) => (
            <div
              key={experience.id}
              className={`border-2 border-${color}-border relative rounded-xl mb-4`}
            >
              <p
                className={`absolute bg-${color}-base px-1 font-semibold -top-3 right-8`}
              >
                {experience.year}
              </p>
              <div className="p-3">
                <p className={`text-${color}-header text-lg font-bold`}>
                  {experience.title}
                </p>
                <p className="font-semibold text-lg">{experience.company}</p>
                <p>{experience.content}</p>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default Experience;
