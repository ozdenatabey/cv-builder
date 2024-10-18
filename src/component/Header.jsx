import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function Header({ theme }) {
  const { name, title } = useSelector((state) => state.form);

  return (
    <div className="space-y-3 my-6">
      {/* <p className={`text-5xl text-${theme}-header font-bold`}>{header.name}</p> */}
      <p className={`text-5xl text-${theme}-header font-bold`}>{name}</p>
      <p className={`text-${theme}-primary font-semibold`}>{title}</p>
    </div>
  );
}

export default Header;
