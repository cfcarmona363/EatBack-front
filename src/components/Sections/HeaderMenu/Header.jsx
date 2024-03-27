import React, { useState } from "react";
import SideDrawer from "./SideDrawer";
import UserAvatar from "../../UserAvatar";
import { Link, NavLink } from "react-router-dom";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Create Survey",
    href: "/createSurvey",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const OpenCloseDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className=" flex gap-10 bg-gray-300 py-4 px-6 sticky top-0 z-10">
      <div className="w-screen">
        <nav className="bg-gray-300">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-gray-900 text-xl font-bold">EatBack</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {routes.map((route, index) => (
                    <Link
                      key={index}
                      as={NavLink}
                      to={route.href}
                      className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              </div>
              <UserAvatar
                onClick={OpenCloseDrawer}
                userName="Joaquin"
                userImg={
                  "https://staticg.sportskeeda.com/editor/2022/03/94200-16470225783956-1920.jpg"
                }
              />
            </div>
          </div>
        </nav>
      </div>

      <SideDrawer
        isOpen={isOpen}
        onClose={OpenCloseDrawer}
        userName={"Joaquin"}
        routes={routes}
      />
    </header>
  );
}

export default Header;
