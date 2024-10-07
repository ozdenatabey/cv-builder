import { experiences } from "../../data/userData";

function Experience() {
  return (
    <div className="text-primary">
      <p className="font-bold text-2xl mb-2 underline decoration-header decoration-2">
        WORK EXPERIENCE
      </p>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="border-2 border-border relative rounded-xl mb-4"
        >
          <p className="absolute bg-base px-1 font-semibold -top-3 right-8">
            {experience.year}
          </p>
          <div className="p-3">
            <p className="text-header text-lg font-bold">{experience.title}</p>
            <p className="font-semibold text-lg">{experience.company}</p>
            <p>{experience.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
