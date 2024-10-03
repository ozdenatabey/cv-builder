import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";

function SideMenu() {
  return (
    <div className="h-[297mm] bg-primary">
      <PersonalInformation />
      <Skills />
    </div>
  );
}

export default SideMenu;
