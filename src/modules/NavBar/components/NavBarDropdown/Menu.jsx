import { useAuth } from "../../../../hooks";

import LogoutIcon from "../../../../assets/LogoutIcon.svg";
import ExploererIcon from "../../../../assets/ExplorerIcon.svg"
 
const styles = {
  dropdownBody:
    "absolute w-44 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 mx-1",
  dropdownElem1:
    "flex flex-row justify-evenly w-44 pr-5 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  dropdownSVGs: "w-3 h-3 ",
  dropdownElem2:
    "flex flex-row justify-evenly w-44 pr-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900",
};

const Menu = () => {
  const { logout } = useAuth();
  return (
    <div className={styles.dropdownBody}>
      <button className={styles.dropdownElem1}>
        <img className={styles.dropdownSVGs} src={ExploererIcon} />
        View on Explorer
      </button>
      <button onClick={logout} className={styles.dropdownElem2}>
        <img className={styles.dropdownSVGs} src={LogoutIcon} />
        Disconnect Wallet
      </button>
    </div>
  );
};

export default Menu;
