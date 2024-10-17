import { useDispatch } from "react-redux";
import { setName, setTitle } from "../../features/formSlice";

function HeaderForm() {
  const dispatch = useDispatch();
  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };
  const handleTitleChange = (event) => {
    dispatch(setTitle(event.target.value));
  };
  return (
    <div>
      <form className="mx-4 space-y-2 border border-black p-4 rounded-lg shadow-lg">
        <p className="text-center font-semibold bg-neutral-600 p-1 rounded-md text-white">
          Header
        </p>
        <div>
          <label className="font-semibold">Name</label>
          <input
            type="text"
            className={`w-full border border-black rounded p-2`}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label className="font-semibold">Title</label>
          <input
            type="text"
            className={`w-full border border-black rounded p-2`}
            onChange={handleTitleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default HeaderForm;
