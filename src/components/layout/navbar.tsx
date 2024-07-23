import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useUserStore } from "@/stores";

export const Navbar = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="border-b border-b-gray-light fixed top-0 w-full z-10 bg-white">
      <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto h-14 flex justify-between md:p-0 px-4">
        <Link to={"/home"} className="py-2 flex items-center gap-1">
          <img className="h-full" src="/logo-square.png" alt="bambino logo" />
          <p className="text-xl font-semibold font-poppins text-b-blue">
            Bambino
          </p>
        </Link>
        <div className="py-4">
          <Menubar className="p-0 border-0 h-6 gap-4">
            <MenubarMenu>
              {user ? (
                <>
                  <MenubarTrigger className="p-1">
                    <CiUser fontSize={"24px"} />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <Link to="/profile" className="w-full">
                        Profile
                      </Link>
                    </MenubarItem>
                    <MenubarItem>Logout</MenubarItem>
                  </MenubarContent>
                </>
              ) : (
                <Link to="/login" className="p-1">
                  <CiUser fontSize={"24px"} />
                </Link>
              )}
            </MenubarMenu>
            <MenubarMenu>
              <Link to="/cart">
                <IoCartOutline fontSize={"24px"} />
              </Link>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  );
};
