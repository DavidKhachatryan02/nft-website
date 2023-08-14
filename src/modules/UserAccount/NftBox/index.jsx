const styles = {
  container:
    "flex flex-col items-center h-90 w-56 border rounded-xl  border-stone-800 ",
  nftImg: "w-56 h-56 p-1.5 rounded-lg ",
  infoBox: "flex flex-col",
  userInfoBox: " flex flex-row items-center justify-items-start",
  avatar: " w-4 h-4 rounded-lg",
  imgName: " text-sm leading-5 font-[Lato] font-bold",
};
function NftBox() {
  return (
    <div className={styles.container}>
      <img
        className={styles.nftImg}
        src="src/assets/7655cf5ac66f5d715acfb0e918593e27.png"
      />
      <div className={styles.infoBox}>
        <p className={styles.imgName}>WIZARD 777</p>
        <div className={styles.userInfoBox}>
          <img
            className={styles.avatar}
            src="src/assets/7655cf5ac66f5d715acfb0e918593e27.png"
            alt="Rounded avatar"
          />
          <p>some name</p>
        </div>
      </div>
    </div>
  );
}

export default NftBox;
