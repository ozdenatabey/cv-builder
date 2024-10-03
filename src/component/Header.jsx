import { header } from "../../data/userData";

function Header() {
  return (
    <div>
      <p className="bg-red-800 text-2xl font-bold">{header.name}</p>
      <p className="bg-red-500 text-lg font-semibold">{header.jobTitle}</p>
    </div>
  );
}

export default Header;
