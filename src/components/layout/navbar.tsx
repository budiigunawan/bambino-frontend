import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="border-b border-b-gray-light fixed top-0 w-full z-10 bg-white">
      <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto h-14 flex justify-between md:p-0 px-4">
        <Link to={"/home"} className="py-2 flex items-center gap-1">
          <img className="h-full" src="/logo-square.png" alt="bambino logo" />
          <p className="text-xl font-semibold font-poppins text-b-blue">
            Bambino
          </p>
        </Link>
        <ul className="py-4 flex justify-end gap-6 md:text-2xl text-xl">
          <li>
            <Link to={"/profile"}>
              <CiUser />
            </Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <IoCartOutline />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
