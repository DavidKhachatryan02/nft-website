import { useAuth } from "../../../../provider";

const styles = {
  container: "flex items-center",
  button:
    "bg-[#4A5EC4] px-5 py-2 rounded-lg text-gray-50 font-bold font-[Lato] cursor-pointer",
};

function NavBarButton() {
  const { login } = useAuth();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={login}>
        Connect
      </button>
    </div>
  );
}

export default NavBarButton;
