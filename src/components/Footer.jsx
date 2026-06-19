"use client";

import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}>
        <motion.div
          className={styles.animatedLine}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.links}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.link}>
              Instagram <ArrowUpRight size={14} />
            </a>
            <a href="mailto:contact@pmastratto.com" className={styles.link}>
              Email <ArrowUpRight size={14} />
            </a>
          </div>

          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} PM Astratto. All rights reserved. Feito por <a href="https://enimble.pt" target="_blank" rel="noreferrer" className={styles.nimbleLink}>E-Nimble</a>.</p>
          </div>
        </div>

        <div className={styles.brandWrapper}>
          <h2 className={styles.brand}>PM ASTRATTO</h2>
        </div>
      </div>
    </footer>
  );
}
