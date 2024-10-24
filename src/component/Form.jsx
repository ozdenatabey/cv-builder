import HeaderForm from "./inputs/HeaderForm";
import ImageForm from "./inputs/ImageForm";
import PersonalInformationForm from "./inputs/PersonalInformationForm";
import SkillFrom from "./inputs/SkillFrom";

function Form() {
  return (
    <div className="space-y-4 h-screen overflow-scroll sticky top-0">
      <ImageForm />
      <HeaderForm />
      <PersonalInformationForm />
      <SkillFrom />
    </div>
  );
}

export default Form;
