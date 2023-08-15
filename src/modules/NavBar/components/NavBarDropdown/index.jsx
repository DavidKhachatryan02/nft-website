import { useState } from "react";

const NavBarDropdown = () => {
  const { toggle, setToggle } = useState(true);

  return (
    <div className="">
      <select className="">
        <p>ReactJS Dropdown</p>
        <p>Laravel 9 with React</p>
        <option>React with Tailwind CSS</option>
        <option>React With Headless UI</option>
      </select>
    </div>
  );
};

export default NavBarDropdown;
