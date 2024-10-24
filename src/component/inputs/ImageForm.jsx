import { useDispatch, useSelector } from "react-redux";
import { setPhoto } from "../../redux/slices/formSlice";

function ImageForm() {
  const dispatch = useDispatch();
  const { color, language } = useSelector((state) => state.theme);
  const handleChange = (e) => {
    const uploadedPhoto = URL.createObjectURL(e.target.files[0]);
    dispatch(setPhoto(uploadedPhoto));
  };
  return (
    <div className="mx-4 space-y-2 bg-stone-200 border border-black p-4 rounded-lg shadow-lg">
      <p
        className={`text-center font-semibold bg-${color}-primary p-1 rounded text-white`}
      >
        {language === "tr" ? "Profil Resmi" : "Profile Picture"}
      </p>
      <input type="file" onChange={handleChange} accept=".jpg, .jpeg, .png" />
    </div>
  );
}

export default ImageForm;
