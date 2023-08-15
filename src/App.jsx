import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { NavBar } from "./modules/NavBar";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
