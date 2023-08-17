import ProfileImage from '../../../../assets/ProflePhoto.png';
import DropDownIcon from "../../../../assets/dropdownPointer.svg";

const styles = {
  menuButton:
    "flex gap-x-1.5 px-3 py-1.5 h-10 flex-row justify-evenly border-[#7E9ADC] border-2 hover:bg-[#3b5998]/90 focus:outline-none focus:ring-[#3b5998] font-medium rounded-lg text-[14px] items-center",
  profileImg: "w-4 h-4 rounded-xl ",
  dropdownIcon: " w-2.5 h-2.5 ml-2",
};

const Toggler = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={onClick} className={styles.menuButton}>
        <img className={styles.profileImg} src={ProfileImage} />
        Open Dropdown
        <img className={styles.dropdownIcon} src={DropDownIcon} />
      </button>
    </div>
  );
};

export default Toggler;
