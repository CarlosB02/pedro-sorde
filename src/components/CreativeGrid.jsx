"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./CreativeGrid.module.css";

const IMAGES = [
  { id: 1, src: "/images/creative/creative_1.webp", alt: "Visual Moment 1", size: "large-v", speed: 0.04 },
  { id: 2, src: "/images/creative/creative_2.webp", alt: "Visual Moment 2", size: "small-h", speed: -0.04 },
  { id: 3, src: "/images/creative/creative_3.webp", alt: "Visual Moment 3", size: "medium-v", speed: 0.08 },
  { id: 4, src: "/images/creative/creative_4.webp", alt: "Visual Moment 4", size: "large-h", speed: -0.06 },
  { id: 5, src: "/images/creative/creative_5.webp", alt: "Visual Moment 5", size: "medium-v-alt", speed: 0.02 },
  { id: 6, src: "/images/creative/creative_6.webp", alt: "Visual Moment 6", size: "small-v", speed: -0.02 },
];

export default function CreativeGrid() {
  const containerRef = useRef(null);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <span className={styles.subtitle}>03 / EVENTOS</span>
        <h2 className={styles.title}>Eventos</h2>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.grid}>
        {IMAGES.map((img) => (
          <GridItem key={img.id} img={img} />
        ))}
      </div>
    </section>
  );
}

function GridItem({ img }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, img.speed * 200]);

  return (
    <motion.div
      ref={itemRef}
      className={`${styles.item} ${styles[img.size]}`}
      style={{ y }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={img.size.includes('v') ? styles.imagePortrait : styles.imageLandscape}
          priority={img.id <= 2}
        />
        <div className={styles.overlay}>
          <span className={styles.number}>/{String(img.id).padStart(2, "0")}</span>
        </div>
      </div>
    </motion.div>
  );
}
