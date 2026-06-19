"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  },
  {
    id: 2,
    title: "Neon Pulse",
    description: "Ibiza Closing Party",
    src: "/images/portfolio_nightlife_1.png",
  },
  {
    id: 3,
    title: "Scale & Atmosphere",
    description: "Met Gala Afterparty",
    src: "/images/portfolio_event_1.png",
  },
  {
    id: 4,
    title: "Shadow Play",
    description: "Personal Exhibition",
    src: "/images/portfolio_personal_1.png",
  }
];

export default function PortfolioPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.portfolio} id="work">
      <SectionHeader 
        number="01"
        category="SELECTION"
        title="Selected Works"
        description="A curation of moments, portraying intimate elegance and dynamic atmospheres across a cinematic spectrum."
      />

      {/* Desktop Interactive Split Layout */}
      <div className={styles.desktopContainer}>
        <div className={styles.listColumn}>
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div 
              key={item.id}
              className={clsx(styles.menuItem, index === activeIndex && styles.active)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span className={styles.itemNumber}>/{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.itemText}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.previewColumn}>
          <div className={styles.previewFrame}>
            {PORTFOLIO_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.previewImageWrapper}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 1.05 
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="40vw"
                  className={styles.image}
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Stack Layout */}
      <div className={styles.mobileContainer}>
        {PORTFOLIO_ITEMS.map((item, index) => (
          <div key={item.id} className={styles.mobileItem}>
            <div className={styles.mobileHeader}>
              <span className={styles.mobileNumber}>/{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.mobileTitle}>{item.title}</h3>
            </div>
            <div className={styles.mobileImageWrapper}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="90vw"
                className={styles.image}
              />
            </div>
            <p className={styles.mobileDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
