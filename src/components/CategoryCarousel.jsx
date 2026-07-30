"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "./SectionHeader";
import styles from "./CategoryCarousel.module.css";
import clsx from "clsx";

const CATEGORIES = {
  weddings: {
    number: "01",
    category: "CASAMENTOS",
    title: "O SIM",
    description: "Cumplicidade, emoção e beleza que merecem ser recordados para sempre.",
    theme: "light",
    images: [
      "/images/weddings/@pedromrtn_s-0419.webp",
      "/images/weddings/@pedromrtn_s-1156.webp",
      "/images/weddings/@pedromrtn_s-1200.webp",
      "/images/weddings/@pedromrtn_s-1214.webp",
      "/images/weddings/@pedromrtn_s-1626.webp",
      "/images/weddings/@pedromrtn_s-2190.webp",
      "/images/weddings/PEMA0241.webp",
      "/images/weddings/PEMA0967.webp",
      "/images/weddings/PEMA1203.webp",
      "/images/weddings/PEMA1757.webp",
      "/images/weddings/PEMA2279.webp",
      "/images/weddings/PEMA2322.webp",
      "/images/weddings/PEMA3275.webp",
      "/images/weddings/PEMA3594.webp",
      "/images/weddings/PEMA3832.webp",
      "/images/weddings/PEMA5829.webp",
      "/images/weddings/portfolio_wedding_1.webp"
    ]
  },
  nightlife: {
    number: "02",
    category: "VIDA NOTURNA",
    title: "A ENERGIA",
    description: "Porque os melhores momentos acontecem quando ninguém está a posar.",
    theme: "dark",
    images: [
      "/images/nightlife/hero_nightlife.webp",
      "/images/nightlife/portfolio_nightlife_1.webp"
    ]
  },
  events: {
    number: "04",
    category: "EVENTOS",
    title: "O REGISTO",
    description: "Experiências e momentos corporativos ou sociais captados com foco na essência do acontecimento.",
    theme: "dark",
    images: [
      "/images/events/@Pedromrtn_s_NGF-0333.webp",
      "/images/events/@Pedromrtn_s_NGF-0697.webp",
      "/images/events/@Pedromrtn_s_NGF-0720.webp",
      "/images/events/@Pedromrtn_s_NGF-0790.webp",
      "/images/events/@Pedromrtn_s_NGF-0848.webp",
      "/images/events/@Pedromrtn_s_NGF-1490.webp",
      "/images/events/@Pedromrtn_s_NGF-1644.webp",
      "/images/events/@Pedromrtn_s_NGF-2171.webp",
      "/images/events/@Pedromrtn_s_NGF-3107.webp",
      "/images/events/@Pedromrtn_s_NGF-5648.webp",
      "/images/events/@Pedromrtn_s_NGF-6743.webp",
      "/images/events/@Pedromrtn_s_NGF-7564.webp",
      "/images/events/@Pedromrtn_s_NGF-9785.webp",
      "/images/events/PM-13.webp",
      "/images/events/PM-5.webp",
      "/images/events/creative_2.webp",
      "/images/events/event1.webp",
      "/images/events/portfolio_event_1.webp"
    ]
  },
  personal: {
    number: "03",
    category: "VISÃO PESSOAL",
    title: "O OLHAR",
    description: "A fotografia como expressão artística pura, sem guiões ou expetativas.",
    theme: "light",
    images: [
      "/images/personal/@Pedromrtn_s-0456.webp",
      "/images/personal/@Pedromrtn_s-0457.webp",
      "/images/personal/PEMA0351.webp",
      "/images/personal/PEMA1145.webp",
      "/images/personal/PM-0818.webp",
      "/images/personal/PM-9157.webp",
      "/images/personal/personal1.webp",
      "/images/personal/portfolio_personal_1.webp"
    ]
  }
};

export default function CategoryCarousel({ type = "weddings" }) {
  const data = CATEGORIES[type] || CATEGORIES.weddings;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true
  });

  return (
    <section id={type} className={clsx(styles.carouselSection, styles[data.theme])}>
      <div className={styles.headerWrapper}>
        <SectionHeader
          number={data.number}
          category={data.category}
          title={data.title}
          description={data.description}
        />
      </div>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {data.images.map((src, index) => (
            <div className={styles.emblaSlide} key={index}>
              <div className={styles.imageWrapper}>
                <img
                  src={src}
                  alt={`${data.title} ${index + 1}`}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
