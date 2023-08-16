import { useState } from "react";
import { useAuth } from "../../../../provider";

const NavBarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-1">
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex  gap-x-1.5 px-3 py-1.5 h-10 flex-row justify-evenly border-[#7E9ADC] border-2 hover:bg-[#3b5998]/90 focus:outline-none focus:ring-[#3b5998] font-medium rounded-lg text-[14px] items-center "
      >
        <img className="w-4 h-4 rounded-xl " src="src/assets/ProflePhoto.png" />
        Open Dropdown
      </button>

      {isOpen && (
        <div className="fixed w-100% rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button 
            className="flex flex-row justify-evenly  gap-1.5 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <img
                className="w-3 h-3 "
                src="src/assets/ExplorerIcon.svg"
              />
              View on Explorer
            </button>
            <button
              onClick={logout}
              className="flex flex-row justify-evenly gap-1.5 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <img
                className="w-3 h-3"
                src="src/assets/LogoutIcon.svg"
              />
              Disconnect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBarDropdown;
