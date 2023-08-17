import LoginImg from '../LoginImg';
import WelcomeText from '../WelcomeText';
import LoginButton from '../LoginButton';

const styles = {
  container: 'relative',
  wrapper: 'flex flex-col gap-y-2 justify-center items-center translate-y-2/4',
};

const LoginWidget = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginImg />
        <WelcomeText />
        <LoginButton />
      </div>
    </div>
  );
}

export default LoginWidget;
