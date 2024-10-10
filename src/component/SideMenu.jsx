import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";
import imgUrl from "../assets/userImage.jpg";

// eslint-disable-next-line react/prop-types
function SideMenu({ theme, language }) {
  return (
    <div className={`h-[297mm] bg-${theme}-primary space-y-12`}>
      <div className="w-4/5 m-auto pt-5">
        <img
          src={imgUrl}
          alt="userImage"
          className="rounded-[3rem] shadow-2xl"
        />
      </div>
      <PersonalInformation theme={theme} language={language} />
      <Skills theme={theme} language={language} />
    </div>
  );
}

export default SideMenu;
