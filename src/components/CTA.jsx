"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CTA.module.css";
import ContactModal from "./ContactModal";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.cta} id="contact" ref={ref}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.statement}>VAMOS CONTAR A TUA HISTÓRIA.</h2>

        <button
          className={styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsModalOpen(true)}
        >
          <span className={styles.buttonText}>Vamos Conversar</span>
          <motion.div
            className={styles.buttonBackground}
            animate={{
              scale: isHovered ? 1.5 : 1,
              opacity: isHovered ? 0.15 : 0.05
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </button>
      </motion.div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
