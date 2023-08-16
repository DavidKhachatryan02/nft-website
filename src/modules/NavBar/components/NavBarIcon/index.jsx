const styles = {
  container: "flex items-center gap-x-3 ",
  text: "font-extrabold text-xl leading-8",
};

function NavBarIcon() {
  return (
    <div className={styles.container}>
      <img src="src/assets/Icon.svg" alt="Some Logo" />
      <p className={styles.text}>NFTer</p>
    </div>
  );
}

export default NavBarIcon;
