import HeaderForm from "./inputs/HeaderForm";
import PersonalInformationForm from "./inputs/PersonalInformationForm";

function Form() {
  return (
    <div className="space-y-4 h-screen overflow-scroll sticky top-0">
      <HeaderForm />
      <PersonalInformationForm />
    </div>
  );
}

export default Form;
