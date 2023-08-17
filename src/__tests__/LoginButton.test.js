import { cleanup, fireEvent, render } from '@testing-library/react';
import { AuthProvider } from '../provider';
import LoginButton from '../modules/Login/components/LoginButton';

afterEach(cleanup);

it('should check if local storage is updated on connection', () => {
  const { getByText } = render(
    <AuthProvider>
      <LoginButton />
    </AuthProvider>
  );

  const button = getByText('Connect Wallet');
  fireEvent.click(button);

  expect(localStorage.setItem).toHaveBeenCalled();
});
