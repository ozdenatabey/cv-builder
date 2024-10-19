import HeaderForm from "./inputs/HeaderForm";
import PersonalInformationForm from "./inputs/PersonalInformationForm";

function Form() {
  return (
    <div className="space-y-4 h-screen overflow-scroll">
      <HeaderForm />
      <PersonalInformationForm />
    </div>
  );
}

export default Form;
