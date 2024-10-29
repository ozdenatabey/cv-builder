import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addAbout,
  setAbout,
  removeAbout,
} from "../../redux/slices/aboutSlice.js";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";

function AboutForm() {
  const dispatch = useDispatch();
  const { color, language } = useSelector((state) => state.theme);

  const [abouts, setAbouts] = useState([]);

  const addNewAbout = () => {
    const newAbout = { id: new Date().getTime(), name: "" };
    setAbouts([...abouts, newAbout]);
    dispatch(addAbout(newAbout));
  };

  const removeNewAbout = (index) => {
    const aboutId = abouts[index].id;
    setAbouts(abouts.filter((_, i) => i !== index));
    dispatch(removeAbout(aboutId));
  };

  const handleAboutChange = (index, field, value) => {
    const updateAbout = abouts.map((about, i) =>
      i === index ? { ...about, [field]: value } : about,
    );
    setAbouts(updateAbout);

    const aboutId = abouts[index].id;
    if (field === "name") {
      dispatch(setAbout({ id: aboutId, name: value }));
    }
  };

  return (
    <form className="mx-4 space-y-2 bg-stone-200 border border-black p-4 rounded-lg shadow-lg">
      <Accordion>
        <p
          className={`text-center font-semibold bg-${color}-primary p-1 rounded text-white`}
        >
          {language === "tr" ? "Hakkımda" : "About Me"}
        </p>
        <AccordionItem header={<IoIosArrowDown />}>
          {abouts.length > 0
            ? abouts.map((about, index) => (
                <div key={index} className="flex space-x-2 mb-2">
                  <label id="skill-name" className="grow">
                    <input
                      type="text"
                      value={about.name}
                      onChange={(e) =>
                        handleAboutChange(index, "name", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") addNewAbout();
                      }}
                    />
                  </label>
                  <button
                    className="bg-red-200 border border-red-500 px-6 rounded font-semibold hover:bg-red-500 hover:text-white duration-200 transition-all"
                    type="button"
                    onClick={() => removeNewAbout(index)}
                  >
                    {language === "tr" ? "Çıkar" : "Remove"}
                  </button>
                </div>
              ))
            : ""}
          <div className="grid place-items-center">
            <button
              className="bg-sky-200 border border-sky-500 px-6 py-2 rounded font-semibold hover:bg-sky-500 hover:text-white duration-200 transition-all"
              type="button"
              onClick={addNewAbout}
            >
              {language === "tr" ? "Ekle" : "Add"}
            </button>
          </div>
        </AccordionItem>
      </Accordion>
    </form>
  );
}

export default AboutForm;
