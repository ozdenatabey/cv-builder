import {
  setProjectContent,
  setProjectName,
  addProject,
  removeProject,
} from "../../redux/slices/projectSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";

function ProjectForm() {
  const dispatch = useDispatch();
  const { color, language } = useSelector((state) => state.theme);

  const [projects, setProjects] = useState([]);

  const addNewProject = () => {
    const newProject = { id: new Date().getTime(), name: "", content: "" };
    setProjects([...projects, newProject]);
    dispatch(addProject(newProject));
  };
  const removeNewProject = (index) => {
    const projectId = projects[index].id;
    setProjects(projects.filter((_, i) => i !== index));
    dispatch(removeProject(projectId));
  };

  const handleProjectChange = (index, field, value) => {
    const updateProjects = projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project,
    );
    setProjects(updateProjects);

    const projectId = projects[index].id;
    if (field === "name") {
      dispatch(setProjectName({ id: projectId, name: value }));
    } else if (field === "content") {
      dispatch(setProjectContent({ id: projectId, content: value }));
    }
  };
  return (
    <form className="mx-4 space-y-2 bg-stone-200 border border-black p-4 rounded-lg shadow-lg">
      <Accordion>
        <p
          className={`text-center font-semibold bg-${color}-primary p-1 rounded text-white`}
        >
          {language === "tr" ? "Projeler" : "Projects"}
        </p>
        <AccordionItem header={<IoIosArrowDown />}>
          {projects.length > 0
            ? projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 border border-black rounded p-4 bg-transparent/10 mb-2"
                >
                  <label className="font-semibold">
                    {language === "tr" ? "Proje Adı" : "Project Name"}
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) =>
                        handleProjectChange(index, "name", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                    />
                  </label>
                  <label className="font-semibold">
                    {language === "tr" ? "Proje Tanımı" : "Project Description"}
                    <textarea
                      rows={5}
                      value={project.content}
                      onChange={(e) =>
                        handleProjectChange(index, "content", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") addNewProject();
                      }}
                    />
                  </label>
                  <button
                    className="bg-red-200 border border-red-500 px-6 py-2 rounded font-semibold hover:bg-red-500 hover:text-white duration-200 transition-all"
                    type="button"
                    onClick={() => removeNewProject(index)}
                  >
                    {language === "tr" ? "Çıkar" : "Remove"}
                  </button>
                </div>
              ))
            : ""}
          <div className="grid place-items-center mt-2">
            <button
              className="bg-sky-200 border border-sky-500 px-6 py-2 rounded font-semibold hover:bg-sky-500 hover:text-white duration-200 transition-all"
              type="button"
              onClick={addNewProject}
            >
              {language === "tr" ? "Ekle" : "Add"}
            </button>
          </div>
        </AccordionItem>
      </Accordion>
    </form>
  );
}
export default ProjectForm;
