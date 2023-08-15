import { useState } from "react";
import { useAuth } from "../../../../provider";

const NavBarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" inline-block text-left flex items-center gap-x-3">
      <button
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={toggleDropdown}
      >
        <img className="w-4 h-4" src="src/assets/SadFace.svg" />
        Open Dropdown
      </button>

      {isOpen && (
        <div className=" absolute  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
