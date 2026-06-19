"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";

const IMAGES = [
  { src: "/images/hero_wedding.png", alt: "Cinematic Wedding", position: "center 30%" },
  { src: "/images/hero_nightlife.png", alt: "High Energy Nightlife", position: "center center" }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000); // Crossfade every 6s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }} // Keep opacity low to allow text to pop
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <Image
              src={IMAGES[currentIndex].src}
              alt={IMAGES[currentIndex].alt}
              fill
              priority
              style={{ objectFit: "cover", objectPosition: IMAGES[currentIndex].position }}
              quality={100}
            />
          </motion.div>
        </AnimatePresence>
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
          <p className={styles.subtitle}>PM Astratto. Visual Storyteller.</p>
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
