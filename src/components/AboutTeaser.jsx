"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./AboutTeaser.module.css";

export default function AboutTeaser() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className={styles.about} ref={containerRef} id="about">
      <div className={styles.content}>
        <motion.div className={styles.textContent} style={{ y: y1 }}>
          <h2 className={styles.manifesto}>
            Emotion. <br />
            Movement. <br />
            Energy.
          </h2>
          <p className={styles.description}>
            I capture real moments, not staged perfection. Whether it&apos;s the intimate 
            silence of an elopement or the pulsating bass of a 4 AM dance floor, 
            my work is a documentary of human intensity. 
          </p>
          <p className={styles.description}>
            This is not just photography. It&apos;s an immersive exhibition of your reality.
          </p>
        </motion.div>

        <motion.div className={styles.imageContent} style={{ y: y2 }}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/about_portrait.png"
              alt="PM Astratto Portrait"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
