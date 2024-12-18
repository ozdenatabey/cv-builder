import { useDispatch, useSelector } from "react-redux";
import {
  setDateOfBirth,
  setDisability,
  setDrivingLicense,
  setGithub,
  setLinkedin,
  setLocation,
  setMail,
  setMilitary,
  setNationality,
  setUniversityName,
  setUniversityStatus,
  setWebsite,
  setPhone,
} from "../../redux/slices/personalInformationSlice";
import { translateText, updateText } from "../../redux/slices/translateSlice";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";

function PersonalInformationForm() {
  const { color, language } = useSelector((state) => state.theme);
  const { translateButton } = useSelector((state) => state.translateButton);
  const dispatch = useDispatch();

  const handleChange = (setter, field) => (event) => {
    const value = event.target.value;

    dispatch(setter(value));

    if (translateButton === "on" && value) {
      dispatch(translateText({ text: value, field }));
    } else {
      dispatch(updateText(value));
    }
  };

  return (
    <form className="mx-4 space-y-2 bg-stone-200 border border-black p-4 rounded-lg shadow-lg">
      <Accordion>
        <p
          className={`text-center font-semibold bg-${color}-primary p-1 rounded text-white`}
        >
          {language === "tr" ? "Kişisel Bilgiler" : "Personal Information"}
        </p>
        <AccordionItem header={<IoIosArrowDown />}>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Konum" : "Location"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setLocation)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Telefon" : "Phone"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setPhone)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              Mail
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setMail)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              Linkedin
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setLinkedin)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              Github
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setGithub)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              Web Site
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setWebsite)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Üniversite" : "University"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setUniversityName)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Mezuniyet" : "Graduation"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setUniversityStatus)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Doğum Tarihi" : "Date Of Birth"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setDateOfBirth)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Uyruk" : "Nationality"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setNationality)}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Engellilik" : "Disability"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setDisability, "disability")}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Sürücü Belgesi" : "Driving License"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setDrivingLicense, "drivingLicense")}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Askerlik Hizmeti" : "Military Service"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleChange(setMilitary, "military")}
              />
            </label>
          </div>
        </AccordionItem>
      </Accordion>
    </form>
  );
}

export default PersonalInformationForm;
