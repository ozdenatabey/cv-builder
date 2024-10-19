import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";
import imgUrl from "../assets/userImage.jpg";
import { useSelector } from "react-redux";

function SideMenu() {
  const { color, language } = useSelector((state) => state.theme);
  return (
    <div className={`h-[297mm] bg-${color}-primary space-y-12`}>
      <div className="w-4/5 m-auto pt-5">
        <img
          src={imgUrl}
          alt="userImage"
          className="rounded-[3rem] shadow-2xl"
        />
      </div>
      <PersonalInformation language={language} />
      <Skills language={language} />
    </div>
  );
}

export default SideMenu;
