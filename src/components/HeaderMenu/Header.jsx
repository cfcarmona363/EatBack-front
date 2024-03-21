import React, { useState } from "react";
import SideDrawer from "./SideDrawer";
import MenuIcon from "../../assets/menuIcon";
import UserAvatar from "../UserAvatar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const OpenCloseDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className=" flex gap-10 bg-gray-300 py-4 px-6 sticky top-0 z-10">
      <div className="w-screen">
        <h1 className="text-3xl text-start">Eatback</h1>
      </div>
      <UserAvatar
        onClick={OpenCloseDrawer}
        userName="Joaquin"
        userImg={
          "https://staticg.sportskeeda.com/editor/2022/03/94200-16470225783956-1920.jpg"
        }
      />
      <SideDrawer
        isOpen={isOpen}
        onClose={OpenCloseDrawer}
        userName={"Joaquin"}
      />
    </header>
  );
}

export default Header;
