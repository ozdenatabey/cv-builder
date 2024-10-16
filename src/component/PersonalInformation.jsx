import { personalInformation } from "../data/userData";
import { PiMapPinFill } from "react-icons/pi";
import {
  FaCar,
  FaPersonMilitaryRifle,
  FaPhone,
  FaWheelchair,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import {
  FaLinkedin,
  FaGithub,
  FaUniversity,
  FaBirthdayCake,
  FaFlag,
} from "react-icons/fa";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function PersonalInformation({ language }) {
  const { color } = useSelector((state) => state.theme);
  return (
    <div className={`text-${color}-base text-sm space-y-1 p-4`}>
      <p className="font-bold text-lg text-center underline underline-offset-2 mb-4">
        {language === "en" ? "PERSONAL INFORMATION" : "KİŞİSEL BİLGİLER"}
      </p>
      {personalInformation.location ? (
        <div className="flex items-center">
          <PiMapPinFill className="mr-2" />
          <p>{personalInformation.location}</p>
        </div>
      ) : (
        ""
      )}
      {personalInformation.phone ? (
        <div className="flex items-center">
          <FaPhone className="mr-2" />
          <p>{personalInformation.phone}</p>
        </div>
      ) : (
        ""
      )}
      {personalInformation.mail ? (
        <div className="flex items-center">
          <TbMailFilled className="mr-2" />
          <p>{personalInformation.mail}</p>
        </div>
      ) : (
        ""
      )}
      {personalInformation.linkedin ? (
        <div className="flex items-center">
          <FaLinkedin className="mr-2" />
          <p>{personalInformation.linkedin}</p>
        </div>
      ) : (
        ""
      )}
      {personalInformation.github ? (
        <div className="flex items-center">
          <FaGithub className="mr-2" />
          <p>{personalInformation.github}</p>
        </div>
      ) : (
        ""
      )}
      {personalInformation.universityName ? (
        <div className="flex items-center">
          <FaUniversity className="mr-2" />
          <div>
            <p>{personalInformation.universityName}</p>
            <p>{personalInformation.universityStatus}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {personalInformation.dateOfBirth ? (
        <div className="flex items-center">
          <FaBirthdayCake className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Date of Birth:" : "Doğum Tarihi:"}
          </p>
          <p>{personalInformation.dateOfBirth}</p>
        </div>
      ) : (
        ""
      )}
      {personalInformation.nationality ? (
        <div className="flex items-center">
          <FaFlag className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Nationality:" : "Uyruk:"}
          </p>
          <p>{personalInformation.nationality}</p>
        </div>
      ) : (
        ""
      )}
      {personalInformation.disability ? (
        <div className="flex items-center">
          <FaWheelchair className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Disability:" : "Engellilik:"}
          </p>
          <p>{personalInformation.disability}</p>
        </div>
      ) : (
        ""
      )}
      {personalInformation.drivingLicense ? (
        <div className="flex items-center">
          <FaCar className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Driving License:" : "Sürücü Belgesi:"}
          </p>
          <p>{personalInformation.drivingLicense}</p>
        </div>
      ) : (
        ""
      )}
      {personalInformation.military ? (
        <div className="flex items-center">
          <FaPersonMilitaryRifle className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Military Service:" : "Askerlik Hizmeti:"}
          </p>
          <p>{personalInformation.military}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PersonalInformation;
