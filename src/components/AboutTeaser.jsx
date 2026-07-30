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
            POR TRÁS DA LENTE.
          </h2>
          <p className={styles.description}>
            Não procuro momentos perfeitos. Procuro os verdadeiros. Entre a emoção de um casamento, a energia de uma pista de dança ou a intensidade de um grande evento, o meu objetivo é sempre o mesmo:
          </p>
          <p className={styles.description}>
            Contar histórias através de imagens que continuam a dizer alguma coisa muito depois do momento passar.
          </p>
        </motion.div>

        <motion.div className={styles.imageContent} style={{ y: y2 }}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/about/about_portrait.webp"
              alt="Pedrom media Portrait"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
