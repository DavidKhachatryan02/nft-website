import { cleanup, fireEvent, render } from '@testing-library/react';
import { AuthProvider } from '../provider';
import NavBarDropdown from '../modules/NavBar/components/NavBarDropdown';

afterEach(cleanup);

it('should check if menu opens after click or not', () => {
  const { getByText } = render(
    <AuthProvider>
      <NavBarDropdown />
    </AuthProvider>
  );

  const button = getByText('Open Dropdown');
  fireEvent.click(button);

  const menuItem = getByText('View on Explorer');
  expect(menuItem).toBeInTheDocument();
});
