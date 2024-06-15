import Image from "next/image";
import styles from "./page.module.css";
import Hero from '/public/images/undraw_online_test_re_kyfx.svg';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>your best online shop destination</h1>
        <p className={styles.description}>
          Fruitables free website template is built for e-commerce business
          websites. The virtual shop is designed meticulously with easy user
          access. The multipage theme has a sticky top navigation bar with a
          drop-down menu
        </p>
        <button className={styles.button}>Shop now</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={Hero} alt='Shop now' />
      </div>
    </div>
  );
}

export default Home;
