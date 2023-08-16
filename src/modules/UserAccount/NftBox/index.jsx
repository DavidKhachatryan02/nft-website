const styles = {
  container:
    "flex  flex-col justify-start border min-w-60 rounded-xl  border-grey-300  ",
  nftImg: "w-56 h-56 px-2 pt-2 rounded-2xl ",
  userInfoBox: " flex flex-row  items-center pb-6 pt-1.5 text-[#4A5EC4]",
  imgName: "text-[16px] pl-5 pt-3 leading-5 font-[Lato] font-bold ",
  avatar: "ml-5 mr-2 w-5 h-5 rounded-md ",
  userName: " text-[12px] font-[Lato] font-light 	",
};

const NftBox = ({ data }) => {
  const { img, imgName, avatar, userName } = data;
  return (
    <div className={styles.container}>
      <img className={styles.nftImg} src={img} />
      <div className={styles.infoBox}>
        <p className={styles.imgName}>{imgName}</p>
        <div className={styles.userInfoBox}>
          <img className={styles.avatar} src={avatar} alt="Rounded avatar" />
          <p className={userName}>{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default NftBox;
