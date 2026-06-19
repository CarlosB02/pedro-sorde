"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionHeader.module.css";
import clsx from "clsx";

export default function SectionHeader({ number, category, title, description }) {
  return (
    <div className={styles.header}>
      <motion.div 
        className={styles.left}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.subtitle}>{number} — {category}</span>
        <h2 className={styles.title}>{title}</h2>
      </motion.div>
      {description && (
        <motion.div 
          className={styles.right}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className={styles.description}>{description}</p>
        </motion.div>
      )}
    </div>
  );
}
