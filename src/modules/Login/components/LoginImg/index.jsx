const styles = {
  img:"m-6"
}

const MetamaskLogo = "src/assets/MetamaskLogo.svg" 

function LoginImg() {
  return <img className={styles.img} src={MetamaskLogo} alt="METAMASK LOGO" />
}

export default LoginImg;
