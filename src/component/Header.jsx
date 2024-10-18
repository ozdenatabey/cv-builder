import { useSelector } from "react-redux";

function Header() {
  const { color } = useSelector((state) => state.theme);
  const { name, title } = useSelector((state) => state.form);

  return (
    <div className="space-y-3 my-6">
      {/* <p className={`text-5xl text-${theme}-header font-bold`}>{header.name}</p> */}
      <p className={`text-5xl text-${color}-header font-bold`}>{name}</p>
      <p className={`text-${color}-primary font-semibold`}>{title}</p>
    </div>
  );
}

export default Header;
