import React from "react";
import ChevronRight from "../../assets/chevronRight";

const SideDrawer = ({ isOpen, onClose, userName }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-lg font-semibold">Welcome {userName}</h1>
        <button onClick={onClose} className="text-gray-600 focus:outline-none">
          <ChevronRight />
        </button>
      </div>
      <div className="p-4">
        <ul>
          <li className="py-2">Link 1</li>
          <li className="py-2">Link 2</li>
          <li className="py-2">Link 3</li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
