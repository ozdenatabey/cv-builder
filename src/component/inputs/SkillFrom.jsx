import { useState } from "react";
import { useSelector } from "react-redux";

function SkillFrom() {
  const { color, language } = useSelector((state) => state.theme);

  const [skills, setSkills] = useState([{ name: "", level: "1" }]);

  const addSkill = () => {
    setSkills([...skills, { name: "", level: "1" }]);
  };
  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleSkillChange = (index, field, value) => {
    const newSkills = skills.map((skill, i) =>
      i === index ? { ...skill, [field]: value } : skill
    );
    setSkills(newSkills);
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
        {skills.map((skill, index) => (
          <div key={index} className="grid grid-cols-4 gap-2">
            <label className="font-semibold col-span-2" name="skill-name">
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
              />
            </label>
            <button
              className="bg-red-200 border border-red-500 px-6 rounded font-semibold hover:bg-red-500 hover:text-white duration-200 transition-all"
              type="button"
              onClick={() => removeSkill(index)}
            >
              {language === "tr" ? "Çıkar" : "Remove"}
            </button>
          </div>
        ))}
        <div className="grid place-items-center">
          <button
            className="bg-sky-200 border border-sky-500 px-6 py-2 rounded font-semibold hover:bg-sky-500 hover:text-white duration-200 transition-all"
            type="button"
            onClick={addSkill}
          >
            {language === "tr" ? "Ekle" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SkillFrom;
