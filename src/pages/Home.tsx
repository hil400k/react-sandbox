import styles from './Home.module.scss';

import Dmytro from '../assets/dmytro.jpg';
import Chip from '../components/Chip';
const Home = () => {

  return (
    <>
      <div className={styles["top-section"]}>
        <div className={styles.left}>
          <h1 className={styles.typo}>
            Dmytro Khilchuk
          </h1>
          <h3 className={styles.typo}>
            Front-End Developer
          </h3>
          <div className={styles.chips}>
            <Chip text={'fulltime'} />
            <Chip text={'parttime'} />
          </div>
          <h3>
            Status: Stop reading it! Hire me!
          </h3>
        </div>
        <div className={styles.right}>
          <div className={styles['img-container']}>
            <img className={styles['dmytro-img']} src={Dmytro} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
