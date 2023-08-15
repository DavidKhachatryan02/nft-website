import { useAuth } from "../../../../provider";

const styles = {
  button:
    "bg-[#4A5EC4] px-5 py-2 rounded-lg text-gray-50 font-bold font-[Lato]",
};

function LoginButton() {
  const { login } = useAuth();

  return (
    <div>
      <button className={styles.button} onClick={login}>
        Connect Wallet
      </button>
    </div>
  );
}

export default LoginButton;
