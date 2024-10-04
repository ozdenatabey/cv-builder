function generateUUID() {
  return "xxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const header = {
  name: "Özden Atabey",
  jobTitle: "Mechanical Engineer | Frontend Developer | Business Analyst",
};

export const personalInformation = {
  location: "İstanbul/Büyükçekmece",
  phone: "+90 543 287 58 18",
  mail: "ozdenatabey@hotmail.com",
  linkedin: "linkedin.com/in/ozdenatabey",
  github: "github.com/ozdenatabey",
  universityName: "Akdeniz University",
  universityStatus: "Bachelor Degree / 2020",
  dateOfBirth: "29/10/1993",
  nationality: "Turkish",
  disability: "None",
  drivingLicense: "Yes",
  military: "Completed",
};

export const aboutMe = [
  {
    id: generateUUID(),
    name: "Curious about new technologies",
  },
  {
    id: generateUUID(),
    name: "Researcher",
  },
  {
    id: generateUUID(),
    name: "Solution oriented",
  },
  {
    id: generateUUID(),
    name: "Strong communication",
  },
];

export const engineeringTools = [
  {
    id: generateUUID(),
    name: "Autocad",
    level: 5,
  },
  {
    id: generateUUID(),
    name: "Inventor",
    level: 5,
  },
  {
    id: generateUUID(),
    name: "Solidworks",
    level: 5,
  },
  {
    id: generateUUID(),
    name: "Rhinoceros",
    level: 5,
  },
  {
    id: generateUUID(),
    name: "Sprutcam",
    level: 5,
  },
  {
    id: generateUUID(),
    name: "Fusion360",
    level: 5,
  },
  {
    id: generateUUID(),
    name: "CATIA",
    level: 3,
  },
  {
    id: generateUUID(),
    name: "Siemens NX",
    level: 3,
  },
  {
    id: generateUUID(),
    name: "Ansys",
    level: 2,
  },
];

export const programmingTools = [
  {
    id: generateUUID(),
    name: "MS Office Tools",
    level: 5,
  },
  {
    id: generateUUID(),
    name: "Tailwind CSS",
    level: 5,
  },
  {
    id: generateUUID(),
    name: "CSS / SCSS",
    level: 5,
  },
  {
    id: generateUUID(),
    name: "React JS",
    level: 4,
  },
];

export const experiences = [
  {
    id: generateUUID(),
    year: "May.2024/Present",
    title: "Business Analyst",
    company: "TMMOB Makina Mühendisleri Odası",
    content:
      "I used these software: Jira to plan development steps, Figma and Draw.io for design templates and MS Office Tools to record data. I learned Development Life Cycle and Agile Methodology.",
  },
  {
    id: generateUUID(),
    year: "Nov.2021/May.2024",
    title: "CAD/CAM Engineer",
    company: "Avenco Robotics & Automation",
    content:
      "I used these software: Solidworks and Rhinoceros (Grasshopper) for designing, Sprutcam and Fusion360 to generate NC code and control KUKA Robots. I learned how conveyor systems work, additive manufacturing and milling with industrial robots.",
  },
  {
    id: generateUUID(),
    year: "Oct.2020/Nov.2021",
    title: "Manufacturing & CAD Engineer",
    company: "Efasan Tıbbi İmplant ve Cihaz Sanayi",
    content:
      "I used these software: Solidworks, Inventor and AutoCad for design systems and create drawings, CypCut to generate NC code to laser cutting machine. I learned how laser machines work, bending sheet metals and stainless steel characteristics.",
  },
  {
    id: generateUUID(),
    year: "Dec.2018/Jul.2019",
    title: "Manufacturing & CAD Engineer",
    company: "Crystal Industrial (Part Time)",
    content:
      "I used these software: Inventor and AutoCad for design systems and create drawings. I learned how awning systems work and the properties of aluminum alloys.",
  },
];
