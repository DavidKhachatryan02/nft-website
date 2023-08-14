const styles = {
  button:
    "bg-[#4A5EC4] px-5 py-2 rounded-lg text-gray-50 font-bold font-[Lato]",
};

function LoginButton() {
  return (
    <div>
      <button className={styles.button}>Connect Wallet</button>
    </div>
  )
}

export default LoginButton;
