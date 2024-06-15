"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "@/Elements/Logo/Logo";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useState } from "react";

function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNav = () => {
    if(!isClick){
      setIsClick(true)
    } else {
      setIsClick(false)
    }
  };
  // style={{ display: isClick ? 'flex' : 'none' }}
  const links = [
    { id: 1, title: "About", url: "/about" },
    { id: 2, title: "Contact", url: "/contact" },
    { id: 3, title: "Products", url: "/products" },
    { id: 4, title: "Blog", url: "/blog" },
  ];

  return (
    <div className={styles.container}>
      <Logo />
      <div className={isClick ? styles.toggleLinks : styles.links}  > 
        <DarkModeToggle />
        {links.map((link) => {
          return (
            <div key={link.id}>
              <Link
                key={link.id}
                href={link.url}
                className={styles.link}
              >
                {link.title}
              </Link>
            </div>
          );
        })}
      </div>
      <div onClick={() => {
        toggleNav()
        console.log('click')
      }} className={styles.toggler}>
        <div className={styles.toggle}></div>
        <div className={styles.toggle}></div>
        <div className={styles.toggle}></div>
      </div>
    </div>
  );
}

export default Navbar;
