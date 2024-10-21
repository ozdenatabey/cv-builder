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

function PersonalInformationForm() {
  const { color, language } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleDateOfBirth = (event) => {
    dispatch(setDateOfBirth(event.target.value));
  };
  const handleDisability = (event) => {
    dispatch(setDisability(event.target.value));
  };
  const handleDrivingLicense = (event) => {
    dispatch(setDrivingLicense(event.target.value));
  };
  const handleGithub = (event) => {
    dispatch(setGithub(event.target.value));
  };
  const handleLinkedin = (event) => {
    dispatch(setLinkedin(event.target.value));
  };
  const handleLocation = (event) => {
    dispatch(setLocation(event.target.value));
  };
  const handleMail = (event) => {
    dispatch(setMail(event.target.value));
  };
  const handleMilitary = (event) => {
    dispatch(setMilitary(event.target.value));
  };
  const handleNationality = (event) => {
    dispatch(setNationality(event.target.value));
  };
  const handleUniversityName = (event) => {
    dispatch(setUniversityName(event.target.value));
  };
  const handleUniversityStatus = (event) => {
    dispatch(setUniversityStatus(event.target.value));
  };
  const handleWebsite = (event) => {
    dispatch(setWebsite(event.target.value));
  };
  const handlePhone = (event) => {
    dispatch(setPhone(event.target.value));
  };
  return (
    <div>
      <form className="mx-4 space-y-2 bg-stone-300 border border-black p-4 rounded-lg shadow-lg">
        <p
          className={`text-center font-semibold bg-${color}-primary p-1 rounded text-white`}
        >
          {language === "tr" ? "Kişisel Bilgiler" : "Personal Information"}
        </p>
        <div>
          <label className="font-semibold">
            {language === "tr" ? "Konum" : "Location"}
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleLocation}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            {language === "tr" ? "Telefon" : "Phone"}
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handlePhone}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            Mail
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleMail}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            Linkedin
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleLinkedin}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            Github
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleGithub}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            Web Site
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleWebsite}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            {language === "tr" ? "Üniversite" : "University"}
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleUniversityName}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            {language === "tr" ? "Mezuniyet" : "Graduation"}
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleUniversityStatus}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            {language === "tr" ? "Doğum Tarihi" : "Date Of Birth"}
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleDateOfBirth}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            {language === "tr" ? "Uyruk" : "Nationality"}
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleNationality}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            {language === "tr" ? "Engellilik" : "Disability"}
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleDisability}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            {language === "tr" ? "Sürücü Belgesi" : "Driving License"}
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleDrivingLicense}
            />
          </label>
        </div>
        <div>
          <label className="font-semibold">
            {language === "tr" ? "Askerlik Hizmeti" : "Military Service"}
            <input
              type="text"
              className={`w-full border border-black rounded p-2`}
              onChange={handleMilitary}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default PersonalInformationForm;
