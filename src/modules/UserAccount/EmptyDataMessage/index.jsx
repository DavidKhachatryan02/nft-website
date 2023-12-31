import SadFace from '../../../assets/SadFace.svg';

const styles = {
  container: 'flex flex-col items-center align-center fixed ',
  message: 'font-bold font-[Lato] leading-6	text-gray-700	',
};

const EmptyDataMessage = () => (
  <div className={styles.container}>
    <img src={SadFace} alt="" />
    <p className={styles.message}>
      Unfortunately your wallet does not own any NFTs.
    </p>
  </div>
);

export default EmptyDataMessage;
