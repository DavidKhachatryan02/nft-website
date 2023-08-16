import { useNavigate } from "react-router-dom";
import { Login } from "../modules/Login";
import { useAuth } from "../provider";
import { useEffect } from "react";

const LoginPage = () => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }  
  }, [accessToken]);

  return <Login />;
};

export default LoginPage;
