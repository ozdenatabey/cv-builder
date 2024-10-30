function generateUUID() {
  return "xxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const references = [
  {
    id: generateUUID(),
    name: "Prof. Dr. Hikmet Rende",
    company: "Akdeniz University",
    phone: "+90 543 231 23 93",
  },
  {
    id: generateUUID(),
    name: "Prof. Dr. İbrahim Atmaca",
    company: "Akdeniz University",
    phone: "+90 532 331 44 46",
  },
  {
    id: generateUUID(),
    name: "Sercan Sert",
    company: "Turkish Technic (Internal Audit & Control SVP)",
    phone: "+90 530 143 50 59",
  },
  {
    id: generateUUID(),
    name: "Ekrem Kartal",
    company: "Hepsiburada (Integration)",
    phone: "+90 553 609 77 37",
  },
];
