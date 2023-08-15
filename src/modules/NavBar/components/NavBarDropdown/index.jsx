import { useState } from "react";
import { useAuth } from "../../../../provider";

const NavBarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left flex items-center gap-x-3">
      <button
        onClick={toggleDropdown}
        type="button"
        className="border hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
      >
        <img
          className="w-4 h-4 mr-2"
          xmlns="/home/developing/Documents/Davit-Khachatryan-tasks/task-1/src/assets/SadFace.svg"
          viewBox="0 0 8 19"
        ></img>
        Open Dropdown
      </button>

      {isOpen && (
        <div className=" mt-20 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              View on Explorer
            </button>
            <button
              onClick={logout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBarDropdown;
