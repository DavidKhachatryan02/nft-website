import NftBox from "../NftBox";
import EmptyDataMessage from "../EmptyDataMessage";

const nftData = [
  {
    img: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    imgName: "WIZARD 777",
    avatar: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    userName: "some name",
  },
  {
    img: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    imgName: "WIZARD 777",
    avatar: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    userName: "some name",
  },
  {
    img: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    imgName: "WIZARD 777",
    avatar: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    userName: "some name",
  },
  {
    img: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    imgName: "WIZARD 777",
    avatar: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    userName: "some name",
  },
  {
    img: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    imgName: "WIZARD 777",
    avatar: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    userName: "some name",
  },
  {
    img: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    imgName: "WIZARD 777",
    avatar: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    userName: "some name",
  },
  {
    img: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    imgName: "WIZARD 777",
    avatar: "src/assets/7655cf5ac66f5d715acfb0e918593e27.png",
    userName: "some name",
  },
];

const styles = {
  container:
    "relative text-left mx-auto mt-10 lg:w-[70%] md:w-[50%] sm:w-full place-items-center flex flex-col content-center items-center  2xl:grid   2xl:grid-cols-5 lg:grid lg:grid-cols-4 lg:gap-y-2.5 md:grid md:grid-cols-2 md:gap-2 ",
};

const AccountWidget = () => {
  return (
    <div className={styles.container}>
      {!nftData.length ? (
        <EmptyDataMessage />
      ) : (
        nftData.map((data, index) => <NftBox key={index} data={data} />)
      )}
    </div>
  );
};

export default AccountWidget;
