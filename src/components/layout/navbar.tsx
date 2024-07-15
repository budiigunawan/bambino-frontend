import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="h-14 flex justify-between">
      <Link to={"/home"} className="py-1 flex items-center gap-1">
        <img className="h-full" src="/logo-square.png" alt="bambino logo" />
        <p className="text-xl font-semibold font-poppins text-b-blue">
          Bambino
        </p>
      </Link>
      <ul className="py-4 flex justify-end gap-6">
        <li>
          <Link to={"/profile"}>
            <CiUser size={24} />
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <IoCartOutline size={24} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
