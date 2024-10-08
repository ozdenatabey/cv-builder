import { experiences } from "../data/userData";

// eslint-disable-next-line react/prop-types
function Experience({ theme }) {
  return (
    <div className={`text-${theme}-primary`}>
      <p
        className={`font-bold text-2xl mb-2 underline decoration-${theme}-header decoration-2`}
      >
        WORK EXPERIENCE
      </p>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className={`border-2 border-${theme}-border relative rounded-xl mb-4`}
        >
          <p
            className={`absolute bg-${theme}-base px-1 font-semibold -top-3 right-8`}
          >
            {experience.year}
          </p>
          <div className="p-3">
            <p className={`text-${theme}-header text-lg font-bold`}>
              {experience.title}
            </p>
            <p className="font-semibold text-lg">{experience.company}</p>
            <p>{experience.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
