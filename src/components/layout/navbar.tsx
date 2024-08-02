import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Form, Link, useNavigate, useSearchParams } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { authCookie } from "@/lib/auth";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = authCookie.get("token");
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("q");

  const handleToggleSearch = () => {
    setIsShowSearch((isShowSearch) => !isShowSearch);
  };

  const handleLogout = () => {
    authCookie.set("token", "");
    navigate("/");
  };

  return (
    <div className="border-b border-b-gray-light fixed top-0 w-full z-10 bg-white">
      <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto h-14 flex justify-between md:p-0 px-4">
        {isShowSearch ? (
          <Form
            id="search-product"
            method="get"
            action="/products"
            className="flex w-full items-center space-x-1"
          >
            <Input
              type="text"
              name="q"
              placeholder="Search by name"
              className="font-plus focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
              defaultValue={querySearch ?? undefined}
            />
            <Button type="button" onClick={handleToggleSearch}>
              <IoClose />
            </Button>
          </Form>
        ) : (
          <>
            <Link to={"/"} className="py-2 flex items-center gap-1">
              <img
                className="h-full"
                src="/logo-square.png"
                alt="bambino logo"
              />
              <p className="text-xl font-semibold font-poppins text-b-blue">
                Bambino
              </p>
            </Link>
            <div className="py-4 lg:w-5/12">
              <Menubar className="p-0 border-0 h-6 gap-3">
                <MenubarMenu>
                  <Form
                    id="search-product"
                    method="get"
                    action="/products"
                    className="w-full items-center space-x-1 hidden lg:flex"
                  >
                    <Input
                      type="text"
                      name="q"
                      placeholder="🔍  Search by collection name"
                      className="max-h-8 font-plus focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
                      defaultValue={querySearch ?? undefined}
                    />
                  </Form>
                  <Button
                    variant={"ghost"}
                    className="p-1 block lg:hidden"
                    onClick={handleToggleSearch}
                  >
                    <IoIosSearch fontSize={"24px"} />
                  </Button>
                </MenubarMenu>
                <MenubarMenu>
                  {token ? (
                    <>
                      <MenubarTrigger className="p-1">
                        <CiUser fontSize={"24px"} />
                      </MenubarTrigger>
                      <MenubarContent>
                        {/* <MenubarItem>
                          <Link to="/profile" className="w-full">
                            Profile
                          </Link>
                        </MenubarItem> */}
                        <MenubarItem onClick={handleLogout}>Logout</MenubarItem>
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
          </>
        )}
      </div>
    </div>
  );
};
