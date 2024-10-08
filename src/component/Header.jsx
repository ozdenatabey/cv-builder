import { header } from "../data/userData";

// eslint-disable-next-line react/prop-types
function Header({ theme }) {
  console.log(theme);
  return (
    <div className="space-y-3 my-6">
      <p className={`text-5xl text-${theme}-header font-bold`}>{header.name}</p>
      <p className={`text-${theme}-primary font-semibold`}>{header.jobTitle}</p>
    </div>
  );
}

export default Header;
