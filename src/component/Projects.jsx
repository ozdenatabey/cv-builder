import { projects } from "../data/userData";
import { useSelector } from "react-redux";

function Projects() {
  const { color, language } = useSelector((state) => state.theme);
  return (
    <div className={`text-${color}-primary`}>
      <p
        className={`font-bold text-2xl mb-2 underline decoration-${color}-header decoration-2`}
      >
        {language === "en" ? "PROJECTS" : "PROJELER"}
      </p>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`border-2 border-${color}-border relative rounded-xl mb-2`}
        >
          <div className="p-3">
            <p className={`text-${color}-header text-lg font-bold`}>
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
