import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROOT_ROUTES } from './constants/routes.jsx';
import { AuthProvider } from './provider';
import { NavBar } from './modules/NavBar/index.js';

const router = createBrowserRouter(ROOT_ROUTES);

const App = () => (
  <AuthProvider>
    <NavBar />
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
