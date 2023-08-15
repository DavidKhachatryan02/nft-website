import { useNavigate } from "react-router-dom";
import { UserAccount } from "../modules/UserAccount";
import { useAuth } from "../provider";

const HomePage = () => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  if (!accessToken) {
    navigate("/login");
  }

  return <UserAccount />;
};

export default HomePage;
