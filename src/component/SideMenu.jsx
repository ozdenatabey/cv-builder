import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";
import { useSelector } from "react-redux";

function SideMenu() {
  const { color } = useSelector((state) => state.theme);
  const { photo } = useSelector((state) => state.form);
  console.log(photo);
  return (
    <div className={`h-[297mm] bg-${color}-primary space-y-12`}>
      <div className="w-4/5 m-auto pt-5">
        <img
          src={photo}
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
