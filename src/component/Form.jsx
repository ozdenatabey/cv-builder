import HeaderForm from "./inputs/HeaderForm";
import ImageForm from "./inputs/ImageForm";
import PersonalInformationForm from "./inputs/PersonalInformationForm";
import SkillForm from "./inputs/SkillForm.jsx";
import AboutForm from "./inputs/AboutForm.jsx";
import ExperienceForm from "./inputs/ExperienceForm.jsx";
import ProjectForm from "./inputs/ProjectForm.jsx";
import ReferenceForm from "./inputs/ReferenceForm.jsx";

function Form() {
  return (
    <div className="space-y-4 h-screen overflow-scroll sticky top-0">
      <ImageForm />
      <HeaderForm />
      <PersonalInformationForm />
      <SkillForm />
      <AboutForm />
      <ExperienceForm />
      <ProjectForm />
      <ReferenceForm />
    </div>
  );
}

export default Form;
