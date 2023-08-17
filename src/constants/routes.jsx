import { PATHS } from './paths';

import LoginPage from '../pages/Login';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/Errorpage';

export const ROOT_ROUTES = [
  { path: PATHS.HOME, element: <HomePage /> },
  { path: PATHS.LOGIN, element: <LoginPage /> },
  { path: '*', element: <ErrorPage /> },
];
