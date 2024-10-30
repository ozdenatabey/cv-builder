import {
  addReference,
  setReferenceName,
  removeReference,
  setReferencePhone,
  setReferenceCompany,
} from "../../redux/slices/referenceSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";

function ReferenceForm() {
  const dispatch = useDispatch();
  const { color, language } = useSelector((state) => state.theme);

  const [references, setReferences] = useState([]);

  const addNewReference = () => {
    const newReference = {
      id: new Date().getTime(),
      name: "",
      company: "",
      phone: "",
    };
    setReferences([...references, newReference]);
    dispatch(addReference(newReference));
  };
  const removeNewReference = (index) => {
    const referenceId = references[index].id;
    setReferences(references.filter((_, i) => i !== index));
    dispatch(removeReference(referenceId));
  };

  const handleReferenceChange = (index, field, value) => {
    const updateReference = references.map((reference, i) =>
      i === index ? { ...reference, [field]: value } : reference,
    );
    setReferences(updateReference);

    const referenceId = references[index].id;
    if (field === "name") {
      dispatch(setReferenceName({ id: referenceId, name: value }));
    } else if (field === "company") {
      dispatch(setReferenceCompany({ id: referenceId, company: value }));
    } else if (field === "phone") {
      dispatch(setReferencePhone({ id: referenceId, phone: value }));
    }
  };
  return (
    <form className="mx-4 space-y-2 bg-stone-200 border border-black p-4 rounded-lg shadow-lg">
      <Accordion>
        <p
          className={`text-center font-semibold bg-${color}-primary p-1 rounded text-white`}
        >
          {language === "tr" ? "Referanslar" : "References"}
        </p>
        <AccordionItem header={<IoIosArrowDown />}>
          {references.length > 0
            ? references.map((reference, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 border border-black rounded p-4 bg-transparent/10 mb-2"
                >
                  <label className="font-semibold">
                    {language === "tr" ? "Referansın Adı" : "Reference's Name"}
                    <input
                      type="text"
                      value={reference.name}
                      onChange={(e) =>
                        handleReferenceChange(index, "name", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                    />
                  </label>
                  <label className="font-semibold">
                    {language === "tr"
                      ? "Referansın Şirketi"
                      : "Reference's Company"}
                    <input
                      type="text"
                      value={reference.company}
                      onChange={(e) =>
                        handleReferenceChange(index, "company", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                    />
                  </label>
                  <label className="font-semibold">
                    {language === "tr"
                      ? "Referansın Telefonu"
                      : "Reference's Phone"}
                    <input
                      type="text"
                      value={reference.phone}
                      onChange={(e) =>
                        handleReferenceChange(index, "phone", e.target.value)
                      }
                      className={`w-full border border-black rounded p-2`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") addNewReference();
                      }}
                    />
                  </label>
                  <button
                    className="bg-red-200 border border-red-500 px-6 py-2 rounded font-semibold hover:bg-red-500 hover:text-white duration-200 transition-all"
                    type="button"
                    onClick={() => removeNewReference(index)}
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
              onClick={addNewReference}
            >
              {language === "tr" ? "Ekle" : "Add"}
            </button>
          </div>
        </AccordionItem>
      </Accordion>
    </form>
  );
}

export default ReferenceForm;
