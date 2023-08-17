import { useAuth } from '../../../../hooks';

import NavBarIcon from '../NavBarIcon';
import NavBarButton from '../NavBarButton';
import NabBarDropdown from '../NavBarDropdown';

const styles = {
  navBar: 'w-fulls flex flex-row justify-between px-7 py-2.5 border-b border-grey-600',
};

const NavBarWidget = () => {
  const { accessToken } = useAuth();

  return (
    <div data-testid="navbar">
      <nav className={styles.navBar}>
        <NavBarIcon />
        {accessToken ? <NabBarDropdown /> : <NavBarButton>some item</NavBarButton>}
      </nav>
    </div>
  );
}

export default NavBarWidget;
