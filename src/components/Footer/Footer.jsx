import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  const social = [
    { src: "/images/icons/facebook.png", alt: "facebook" },
    { src: "/images/icons/instagram.png", alt: "instagram" },
    { src: "/images/icons/twitter.png", alt: "twitter" },
    { src: "/images/icons/linkedin.png", alt: "linkedin" },
    { src: "/images/icons/youtube.png", alt: "youtube" },
  ];

  return (
    <div className={styles.container}>
      <div>© HEXASHOP All rights reserved 2024</div>
      <div className={styles.social}>
        {social.map((icon, index) => {
          return (
            <>
              <Image
                key={index}
                src={icon.src}
                width={20}
                height={20}
                className={styles.icon}
                alt={icon.alt}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
