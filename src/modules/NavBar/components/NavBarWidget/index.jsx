import React from "react";
import NavBarIcon from "../NavBarIcon";
import NavBarButton from "../NavBarButton";
import NabBarDropdown from "../NavBarDropdown";
import { useAuth } from "../../../../provider";

const styles = {
  navBar:
    " w-fulls flex flex-row justify-between h-10 px-7 py-8 border-b  border-{GREY_LIGHT}",
};

function NavBarWidget() {
  const { accessToken } = useAuth();
  return (
    <nav className={styles.navBar}>
      <NavBarIcon />
      {accessToken ? (
        <NabBarDropdown />
      ) : (
        <NavBarButton>some item</NavBarButton>
      )}
    </nav>
  );
}

export default NavBarWidget;
