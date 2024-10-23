import { PiMapPinFill } from "react-icons/pi";
import {
  FaCar,
  FaPersonMilitaryRifle,
  FaPhone,
  FaWheelchair,
} from "react-icons/fa6";
import { TbMailFilled, TbWorld } from "react-icons/tb";
import {
  FaLinkedin,
  FaGithub,
  FaUniversity,
  FaBirthdayCake,
  FaFlag,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function PersonalInformation() {
  const { color, language } = useSelector((state) => state.theme);
  const { translatedText } = useSelector((state) => state.translate);
  const { translateButton } = useSelector((state) => state.translateButton);
  const {
    location,
    phone,
    mail,
    linkedin,
    github,
    website,
    universityName,
    universityStatus,
    dateOfBirth,
    nationality,
    disability,
    drivingLicense,
    military,
  } = useSelector((state) => state.personal);

  return (
    <div className={`text-${color}-base text-sm space-y-1 p-4`}>
      <p className="font-bold text-lg text-center underline underline-offset-2 mb-4">
        {language === "en" ? "PERSONAL INFORMATION" : "KİŞİSEL BİLGİLER"}
      </p>
      {location ? (
        <div className="flex items-center">
          <PiMapPinFill className="mr-2" />
          {translateButton === "on" ? (
            <p>{translatedText}</p>
          ) : (
            <p>{location}</p>
          )}
        </div>
      ) : (
        ""
      )}
      {phone ? (
        <div className="flex items-center">
          <FaPhone className="mr-2" />
          {translateButton === "on" ? <p>{translatedText}</p> : <p>{phone}</p>}
        </div>
      ) : (
        ""
      )}
      {mail ? (
        <div className="flex items-center">
          <TbMailFilled className="mr-2" />
          <p>{mail}</p>
        </div>
      ) : (
        ""
      )}
      {linkedin ? (
        <div className="flex items-center">
          <FaLinkedin className="mr-2" />
          <p>{linkedin}</p>
        </div>
      ) : (
        ""
      )}
      {github ? (
        <div className="flex items-center">
          <FaGithub className="mr-2" />
          <p>{github}</p>
        </div>
      ) : (
        ""
      )}
      {website ? (
        <div className="flex items-center">
          <TbWorld className="mr-2" />
          <p>{website}</p>
        </div>
      ) : (
        ""
      )}
      {universityName ? (
        <div className="flex items-center">
          <FaUniversity className="mr-2" />
          <div>
            <p>{universityName}</p>
            <p>{universityStatus}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {dateOfBirth ? (
        <div className="flex items-center">
          <FaBirthdayCake className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Date of Birth:" : "Doğum Tarihi:"}
          </p>
          <p>{dateOfBirth}</p>
        </div>
      ) : (
        ""
      )}

      {nationality ? (
        <div className="flex items-center">
          <FaFlag className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Nationality:" : "Uyruk:"}
          </p>
          <p>{nationality}</p>
        </div>
      ) : (
        ""
      )}
      {disability ? (
        <div className="flex items-center">
          <FaWheelchair className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Disability:" : "Engellilik:"}
          </p>
          <p>{disability}</p>
        </div>
      ) : (
        ""
      )}
      {drivingLicense ? (
        <div className="flex items-center">
          <FaCar className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Driving License:" : "Sürücü Belgesi:"}
          </p>
          <p>{drivingLicense}</p>
        </div>
      ) : (
        ""
      )}
      {military ? (
        <div className="flex items-center">
          <FaPersonMilitaryRifle className="mr-2" />
          <p className="mr-2 font-semibold">
            {language === "en" ? "Military Service:" : "Askerlik Hizmeti:"}
          </p>
          <p>{military}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PersonalInformation;
