import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";
import imgUrl from "../assets/userImage.jpg";

function SideMenu() {
  return (
    <div className="h-[297mm] bg-primary space-y-12">
      <div className="w-4/5 m-auto pt-5">
        <img
          src={imgUrl}
          alt="userImage"
          className="rounded-[3rem] shadow-2xl"
        />
      </div>
      <PersonalInformation />
      <Skills />
    </div>
  );
}

export default SideMenu;
