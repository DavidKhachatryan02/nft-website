import { useState } from "react";
import Toggler from "./Toggler";
import Menu from "./Menu";

const NavBarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <Toggler onClick={toggleDropdown} />

      {isOpen && <Menu />}
    </div>
  );
};

export default NavBarDropdown;
