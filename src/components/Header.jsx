"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={clsx(styles.header, { [styles.scrolled]: scrolled })}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.logo}>
        <a href="#">PM ASTRATTO</a>
      </div>
      
      <nav className={styles.nav}>
        <a href="#work" className={styles.link}>
          <span>Work</span>
        </a>
        <a href="#about" className={styles.link}>
          <span>About</span>
        </a>
        <a href="#contact" className={styles.link}>
          <span>Contact</span>
        </a>
      </nav>
    </motion.header>
  );
}
