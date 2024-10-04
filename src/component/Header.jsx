import { header } from "../../data/userData";

function Header() {
  return (
    <div className="space-y-3 m-4 mt-6">
      <p className="text-5xl text-header font-bold">{header.name}</p>
      <p className=" text-primary font-semibold">{header.jobTitle}</p>
    </div>
  );
}

export default Header;
