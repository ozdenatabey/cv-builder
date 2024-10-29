import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSkillLevel,
  setSkillName,
  addSkill,
  removeSkill,
} from "../../redux/slices/skillSlice.js";

function SkillForm() {
  const dispatch = useDispatch();
  const { color, language } = useSelector((state) => state.theme);

  const [skills, setSkills] = useState([]);

  const addNewSkill = () => {
    const newSkill = { id: new Date().getTime(), name: "", level: 1 };
    setSkills([...skills, newSkill]);
    dispatch(addSkill(newSkill));
  };
  const removeNewSkill = (index) => {
    const skillId = skills[index].id;
    setSkills(skills.filter((_, i) => i !== index));
    dispatch(removeSkill(skillId));
  };

  const handleSkillChange = (index, field, value) => {
    const updateSkills = skills.map((skill, i) =>
      i === index ? { ...skill, [field]: value } : skill,
    );
    setSkills(updateSkills);

    const skillId = skills[index].id;
    if (field === "name") {
      dispatch(setSkillName({ id: skillId, name: value }));
    } else if (field === "level") {
      dispatch(setSkillLevel({ id: skillId, level: value }));
    }
  };

  return (
    <div>
      <form className="mx-4 space-y-2 bg-stone-200 border border-black p-4 rounded-lg shadow-lg">
        <p
          className={`text-center font-semibold bg-${color}-primary p-1 rounded text-white`}
        >
          {language === "tr" ? "Yetenekler" : "Skills"}
        </p>

        <div className="grid grid-cols-4 gap-2">
          <p className="font-semibold col-span-2">
            {language === "tr" ? "Yetenek İsmi" : "Skill Name"}
          </p>
          <p className="font-semibold">
            {language === "tr" ? "Seviye (1-5)" : "Level (1-5)"}
          </p>
        </div>
        {skills.length > 0
          ? skills.map((skill, index) => (
              <div key={index} className="grid grid-cols-4 gap-2">
                <label className="font-semibold col-span-2" id="skill-name">
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) =>
                      handleSkillChange(index, "name", e.target.value)
                    }
                    className={`w-full border border-black rounded p-2`}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    max={5}
                    min={1}
                    value={skill.level}
                    name="skill-level"
                    onChange={(e) =>
                      handleSkillChange(index, "level", e.target.value)
                    }
                    className={`w-full border border-black rounded p-2`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") addNewSkill();
                    }}
                  />
                </label>
                <button
                  className="bg-red-200 border border-red-500 px-6 rounded font-semibold hover:bg-red-500 hover:text-white duration-200 transition-all"
                  type="button"
                  onClick={() => removeNewSkill(index)}
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
            onClick={addNewSkill}
          >
            {language === "tr" ? "Ekle" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SkillForm;
