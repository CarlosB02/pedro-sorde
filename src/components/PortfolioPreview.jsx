"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import styles from "./PortfolioPreview.module.css";
import clsx from "clsx";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Elegance & Intimacy",
    description: "Lake Como, Italy",
    src: "/images/portfolio_wedding_1.png",
    type: "vertical",
    align: "left"
  },
  {
    id: 2,
    title: "Neon Pulse",
    description: "Ibiza Closing Party",
    src: "/images/portfolio_nightlife_1.png",
    type: "horizontal",
    align: "right"
  },
  {
    id: 3,
    title: "Scale & Atmosphere",
    description: "Met Gala Afterparty",
    src: "/images/portfolio_event_1.png",
    type: "horizontal",
    align: "center"
  },
  {
    id: 4,
    title: "Shadow Play",
    description: "Personal Exhibition",
    src: "/images/portfolio_personal_1.png",
    type: "vertical",
    align: "right"
  }
];

function PortfolioItem({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={clsx(styles.itemContainer, styles[item.type], styles[item.align])}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          className={styles.image}
          sizes={item.type === "vertical" ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
        />
        <div className={styles.hoverOverlay}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.itemDesc}>{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPreview() {
  return (
    <section className={styles.portfolio} id="work">
      <SectionHeader 
        number="01"
        category="SELECTION"
        title="Selected Works"
        description="A curation of moments, portraying intimate elegance and dynamic atmospheres across a cinematic spectrum."
      />


      <div className={styles.grid}>
        {PORTFOLIO_ITEMS.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
