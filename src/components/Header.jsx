"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isContactPage = pathname === "/contacto";

  return (
    <>
      <motion.header
        className={clsx(styles.header, { 
          [styles.scrolled]: scrolled,
          [styles.headerOpen]: mobileMenuOpen 
        })}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.logo}>
          <a href="/" onClick={() => setMobileMenuOpen(false)}>PEDROM MEDIA</a>
        </div>

        <nav className={styles.nav}>
          <a href={isContactPage ? "/#work" : "#work"} className={styles.link}>
            <span>Work</span>
          </a>
          <a href={isContactPage ? "/#about" : "#about"} className={styles.link}>
            <span>About</span>
          </a>
          <a href="/contacto" className={clsx(styles.link, { [styles.active]: isContactPage })}>
            <span>Contact</span>
          </a>
        </nav>

        {/* Hamburger Button */}
        <button 
          className={clsx(styles.hamburger, { [styles.hamburgerActive]: mobileMenuOpen })}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className={styles.mobileNav}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <a 
                  href={isContactPage ? "/#work" : "#work"} 
                  className={styles.mobileLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Work</span>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <a 
                  href={isContactPage ? "/#about" : "#about"} 
                  className={styles.mobileLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>About</span>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <a 
                  href="/contacto" 
                  className={clsx(styles.mobileLink, { 
                    [styles.active]: isContactPage,
                    [styles.mobileLinkActive]: isContactPage 
                  })}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Contact</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
