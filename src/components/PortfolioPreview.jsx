"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import styles from "./PortfolioPreview.module.css";
import clsx from "clsx";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "CASAMENTOS",
    description: "Fotografia e vídeo para histórias que merecem ser recordadas para sempre.",
    src: "/images/weddings/portfolio_wedding_1.webp",
    targetId: "weddings",
  },
  {
    id: 2,
    title: "VIDA NOTURNA",
    description: "A energia, o ritmo e a intensidade dos momentos vividos sem pausas.",
    src: "/images/nightlife/portfolio_nightlife_1.webp",
    targetId: "nightlife",
  },
  {
    id: 3,
    title: "VISÃO PESSOAL",
    description: "Um espaço para explorar a criatividade sem limites.",
    src: "/images/personal/portfolio_personal_1.webp",
    targetId: "personal",
  },
  {
    id: 4,
    title: "EVENTOS",
    description: "Experiências que reforçam a identidade da sua marca.",
    src: "/images/events/portfolio_event_1.webp",
    targetId: "events",
  },
  {
    id: 5,
    title: "EM MOVIMENTO",
    description: "Porque algumas histórias precisam de som, ritmo e movimento.",
    src: "/images/personal/portfolio_personal_1.webp",
    targetId: "em-movimento",
  }
];

export default function PortfolioPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.portfolio} id="work">
      <SectionHeader
        category="ÁREAS EM DESTAQUE"
        title="TRABALHOS SELECIONADOS"
        description="Uma seleção de projetos que refletem diferentes atmosferas, emoções e formas de contar histórias através da imagem."
      />

      {/* Desktop Interactive Split Layout */}
      <div className={styles.desktopContainer}>
        <div className={styles.listColumn}>
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={clsx(styles.menuItem, index === activeIndex && styles.active)}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleScroll(item.targetId)}
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

      {/* Mobile Accordion Layout */}
      <div className={styles.mobileContainer}>
        {PORTFOLIO_ITEMS.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={item.id}
              className={styles.mobileItem}
            >
              <div
                className={clsx(styles.mobileHeader, isExpanded && styles.mobileHeaderActive)}
                onClick={() => toggleAccordion(index)}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.mobileTitleRow}>
                  <span className={styles.mobileNumber}>/{String(index + 1).padStart(2, "0")}</span>
                  <h3 className={styles.mobileTitle}>{item.title}</h3>
                </div>
                <span className={styles.accordionIcon}>
                  {isExpanded ? "—" : "+"}
                </span>
              </div>
              
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className={styles.mobileContentInner}>
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
