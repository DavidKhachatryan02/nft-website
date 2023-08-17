import Icon from '../../../../assets/Icon.svg';

const styles = {
  container: 'flex items-center gap-x-3 ',
  text: 'font-extrabold text-xl leading-8',
};

const NavBarIcon = () => (
  <div className={styles.container}>
    <img src={Icon} alt="Some Logo" />
    <p className={styles.text}>NFTer</p>
  </div>
);

export default NavBarIcon;
