import {
  addExperience,
  removeExperience,
  setExperienceYear,
  setExperienceCompany,
  setExperienceTitle,
  setExperienceContent,
} from "../../redux/slices/experienceSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";

function ExperienceForm() {
  const dispatch = useDispatch();
  const { color, language } = useSelector((state) => state.theme);

  const [experiences, setExperiences] = useState([]);

  const addNewExperience = () => {
    const newExperience = {
      id: new Date().getTime(),
      year: "",
      title: "",
      company: "",
      content: "",
    };
    setExperiences([...experiences, newExperience]);
    dispatch(addExperience(newExperience));
  };
  const removeNewExperience = (index) => {
    const experienceId = experiences[index].id;
    setExperiences(experiences.filter((_, i) => i !== index));
    dispatch(removeExperience(experienceId));
  };
  const handleExperienceChange = (index, field, value) => {
    const updateExperiences = experiences.map((experience, i) =>
      i === index ? { ...experience, [field]: value } : experience,
    );
    setExperiences(updateExperiences);

    const experienceId = experiences[index].id;
    if (field === "year") {
      dispatch(setExperienceYear({ id: experienceId, year: value }));
    } else if (field === "title") {
      dispatch(setExperienceTitle({ id: experienceId, title: value }));
    } else if (field === "company") {
      dispatch(setExperienceCompany({ id: experienceId, company: value }));
    } else if (field === "content") {
      dispatch(setExperienceContent({ id: experienceId, content: value }));
    }
  };
  return (
    <form className="mx-4 space-y-2 bg-stone-200 border border-black p-4 rounded-lg shadow-lg">
      <Accordion>
        <p
          className={`text-center font-semibold bg-${color}-primary p-1 rounded text-white`}
        >
          {language === "tr" ? "İş Deneyimi" : "Work Experience"}
        </p>
        <AccordionItem header={<IoIosArrowDown />}>
          {experiences.length > 0
            ? experiences.map((experience, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 border border-black rounded p-4 bg-transparent/10 mb-2"
                >
                  <label className="font-semibold">
                    {language === "tr" ? "Yıl" : "Year"}
                    <input
                      type="text"
                      value={experience.year}
                      onChange={(e) =>
                        handleExperienceChange(index, "year", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                    />
                  </label>
                  <label className="font-semibold">
                    {language === "tr" ? "Ünvan" : "Title"}
                    <input
                      type="text"
                      value={experience.title}
                      onChange={(e) =>
                        handleExperienceChange(index, "title", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                    />
                  </label>
                  <label className="font-semibold">
                    {language === "tr" ? "Firma" : "Company"}
                    <input
                      type="text"
                      value={experience.company}
                      onChange={(e) =>
                        handleExperienceChange(index, "company", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                    />
                  </label>
                  <label className="font-semibold">
                    {language === "tr" ? "İş Tanımı" : "Job Description"}
                    <textarea
                      rows={5}
                      value={experience.content}
                      onChange={(e) =>
                        handleExperienceChange(index, "content", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") addNewExperience();
                      }}
                    />
                  </label>
                  <button
                    className="bg-red-200 border border-red-500 px-6 py-2 rounded font-semibold hover:bg-red-500 hover:text-white duration-200 transition-all"
                    type="button"
                    onClick={() => removeNewExperience(index)}
                  >
                    {language === "tr" ? "Çıkar" : "Remove"}
                  </button>
                </div>
              ))
            : ""}
          <div className="grid place-items-center mt-2">
            <button
              className="bg-sky-200 border border-sky-500 px-6 py-2 rounded font-semibold hover:bg-sky-500 hover:text-white duration-200 transition-all"
              type="button"
              onClick={addNewExperience}
            >
              {language === "tr" ? "Ekle" : "Add"}
            </button>
          </div>
        </AccordionItem>
      </Accordion>
    </form>
  );
}

export default ExperienceForm;
