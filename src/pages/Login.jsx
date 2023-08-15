import { useNavigate } from "react-router-dom";
import { Login } from "../modules/Login";
import { useAuth } from "../provider";

const LoginPage = () => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  if (accessToken) {
    navigate("/");
  }

  return <Login />;
};

export default LoginPage;
