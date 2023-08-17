import MetamaskLogo from '../../../../assets/MetamaskLogo.svg';

const styles = {
  img: 'm-6'
};

const LoginImg = () => {
  return <img className={styles.img} src={MetamaskLogo} alt="METAMASK LOGO" />;
};

export default LoginImg;
