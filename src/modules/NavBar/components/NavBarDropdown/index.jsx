import { useState } from 'react';
import { useAuth } from '../../../../hooks';

import ProfileImage from '../../../../assets/ProflePhoto.png';
import DropDownIcon from '../../../../assets/dropdownPointer.svg';
import LogoutIcon from '../../../../assets/LogoutIcon.svg';

const styles = {
  menuButton:
    'flex gap-x-1.5 px-3 py-1.5 h-10 flex-row justify-evenly border-[#7E9ADC] border-2 hover:bg-[#3b5998]/90 focus:outline-none focus:ring-[#3b5998] font-medium rounded-lg text-[14px] items-center',
  profileImg: 'w-4 h-4 rounded-xl ',
  dropdownIcon: ' w-2.5 h-2.5 ml-2',
  dropdownBody:
    'absolute w-44 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 mx-1',
  dropdownElem1:
    'flex flex-row justify-evenly w-44 pr-5 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900',
  dropdownSVGs: 'w-3 h-3 ',
  dropdownElem2:
    'flex flex-row justify-evenly w-44 pr-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900',
};

const NavBarDropdown = () => {
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        type="button"
        onClick={toggleDropdown}
        className={styles.menuButton}
      >
        <img className={styles.profileImg} src={ProfileImage} />
        Open Dropdown
        <img className={styles.dropdownIcon} src={DropDownIcon} />
      </button>

      {isOpen && (
        <div className={styles.dropdownBody}>
          <button className={styles.dropdownElem1}>
            <img className={styles.dropdownSVGs} src={DropDownIcon} />
            View on Explorer
          </button>
          <button onClick={logout} className={styles.dropdownElem2}>
            <img className={styles.dropdownSVGs} src={LogoutIcon} />
            Disconnect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBarDropdown;
