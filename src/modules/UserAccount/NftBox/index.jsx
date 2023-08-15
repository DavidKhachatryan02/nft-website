const styles = {
  container:
    "flex flex-col justify-start h-90 w-56 border rounded-xl  border-grey-300  ",
  nftImg: "w-56 h-56 p-1.5 rounded-lg ",
  infoBox: "	",
  userInfoBox: " flex flex-row justify-items-start",
  // userInfoBox: " grid grid-cols-2 justify-items-start",
  avatar: "mx-3 w-4 h-4 rounded-lg",
  imgName: "  leading-5 font-[Lato] font-bold",
  userName:"text-xs font-[Lato] font-bold"
};

const NftBox = ({data}) => {
  const {img,imgName,avatar,userName} = data
  return (
    <div className={styles.container}>
      <img
        className={styles.nftImg}
        src={img}
      />
      <div className={styles.infoBox}>
        <p className={styles.imgName}>{imgName}</p>
        <div className={styles.userInfoBox}>
          <img
            className={styles.avatar}
            src={avatar}
            alt="Rounded avatar"
          />
          <p className={userName}>{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default NftBox;
