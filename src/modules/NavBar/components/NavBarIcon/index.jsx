const styles = {
  container: "flex items-center gap-x-3 ",
  text: "font-extrabold text-xl leading-8",
};

const icon = "src/assets/Icon.svg";

function NavBarIcon() {
  return (
    <div className={styles.container}>
      <img src={icon} alt="Some Logo" />
      <p className={styles.text}>NFTer</p>
    </div>
  );
}

export default NavBarIcon;
