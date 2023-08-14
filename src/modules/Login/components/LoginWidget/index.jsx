import LoginImg from "../LoginImg";
import WelcomeText from "../WelcomeText";
import LoginButton from "../LoginButton";

const styles = {
  container: "h-screen w-full flex flex-col	gap-y-2 justify-center items-center absolute inset-0",
};

function LoginWidget() {
  return (
    <div className={styles.container}>
      <LoginImg />
      <WelcomeText />
      <LoginButton />
    </div>
  );
}

export default LoginWidget;
