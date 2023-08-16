import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAccount } from "../modules/UserAccount";
import { useAuth } from "../provider";

const HomePage = () => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);

  return <UserAccount />;
};

export default HomePage;
