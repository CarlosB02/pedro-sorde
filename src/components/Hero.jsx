"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Galaxy from "./Galaxy";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <div className={styles.galaxyWrapper}>
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1.2}
            glowIntensity={0.6}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.5}
            rotationSpeed={0.03}
            repulsionStrength={1.5}
            autoCenterRepulsion={0}
            starSpeed={0.3}
            speed={0.8}
            transparent={true}
          />
        </div>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={styles.textContainer}
        >
          <h1 className={styles.title}>EMOÇÃO EM MOVIMENTO</h1>
          <p className={styles.subtitle}>Pedro Martins. Visual Storyteller.</p>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className={styles.line} />
      </motion.div>
    </section>
  );
}
