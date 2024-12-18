import { useDispatch, useSelector } from "react-redux";
import { setName, setTitle } from "../../redux/slices/formSlice";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";

function HeaderForm() {
  const dispatch = useDispatch();
  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };
  const handleTitleChange = (event) => {
    dispatch(setTitle(event.target.value));
  };
  const { color, language } = useSelector((state) => state.theme);
  return (
    <form className="mx-4 space-y-2 bg-stone-200 border border-black p-4 rounded-lg shadow-lg">
      <Accordion>
        <p
          className={`text-center font-semibold bg-${color}-primary p-1 rounded text-white`}
        >
          {language === "tr" ? "Başlık" : "Header"}
        </p>
        <AccordionItem header={<IoIosArrowDown />}>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "İsim" : "Name"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleNameChange}
              />
            </label>
          </div>
          <div>
            <label className="font-semibold">
              {language === "tr" ? "Ünvan" : "Title"}
              <input
                type="text"
                className={`w-full border border-black rounded p-2`}
                onChange={handleTitleChange}
              />
            </label>
          </div>
        </AccordionItem>
      </Accordion>
    </form>
  );
}

export default HeaderForm;
