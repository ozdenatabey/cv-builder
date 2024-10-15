import { projects } from "../data/userData";

// eslint-disable-next-line react/prop-types
function Projects({ theme, language }) {
  return (
    <div className={`text-${theme}-primary`}>
      <p
        className={`font-bold text-2xl mb-2 underline decoration-${theme}-header decoration-2`}
      >
        {language === "en" ? "PROJECTS" : "PROJELER"}
      </p>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`border-2 border-${theme}-border relative rounded-xl mb-2`}
        >
          <div className="p-3">
            <p className={`text-${theme}-header text-lg font-bold`}>
              {project.name}
            </p>
            <p className="font-semibold text-lg">{project.company}</p>
            <p>{project.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
