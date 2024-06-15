import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/undraw_online_test_re_kyfx.svg";

export const metadata = {
  title: "HEXASHOP-About Us",
  description:
    "ecomerce shop every thing is here technology electronic makeup foods",
};

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>your best online shop destination</h1>
        <p className={styles.description}>
          An About Us page is a section on a website that provides information
          about a company, organization, or individual. It’s an opportunity to
          tell your brand’s story.
        </p>
        <button className={styles.button}>Shop now</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={Hero} alt="Shop now" />
      </div>
    </div>
  );
}

export default About;
