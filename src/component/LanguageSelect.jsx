import trFlag from "../assets/trFlag.jpg";
import enFlag from "../assets/enFlag.png";

// eslint-disable-next-line react/prop-types
function LanguageSelect({ onClick }) {
  const handleClick = (langId) => {
    onClick(langId);
  };
  return (
    <div>
      <div className="flex space-x-2">
        <img
          className="w-16 border-2 border-black rounded-lg cursor-pointer hover:shadow-md hover:shadow-black"
          src={trFlag}
          alt="tr"
          onClick={() => {
            handleClick("tr");
          }}
        />
        <img
          className="w-16 border-2 border-black rounded-lg cursor-pointer hover:shadow-md hover:shadow-black"
          src={enFlag}
          alt="en"
          onClick={() => {
            handleClick("en");
          }}
        />
      </div>
    </div>
  );
}

export default LanguageSelect;
