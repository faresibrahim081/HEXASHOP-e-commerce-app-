import Link from 'next/link'
import styles from "./Logo.module.css";
import { Montserrat } from "next/font/google";

const logoFont = Montserrat({ subsets: ["latin"] , 
    weight:['600']
});

function Logo() {
  return (
    <>
    <Link href="/" className={`${styles.logo} ${logoFont.className}`}>
        HEXASHOB
      </Link>
    </>
  )
}

export default Logo
