"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
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
      "/images/weddings/hero_wedding.webp",
      "/images/weddings/portfolio_wedding_1.webp",
      "/images/weddings/hero_wedding.webp",
      "/images/weddings/portfolio_wedding_1.webp",
      "/images/weddings/hero_wedding.webp"
    ]
  },
  nightlife: {
    number: "02",
    category: "VIDA NOTURNA",
    title: "A NOITE",
    description: "A energia do momento, o ritmo da celebração e a atmosfera impossível de repetir.",
    theme: "dark",
    images: [
      "/images/nightlife/hero_nightlife.webp",
      "/images/nightlife/portfolio_nightlife_1.webp",
      "/images/nightlife/hero_nightlife.webp",
      "/images/nightlife/portfolio_nightlife_1.webp",
      "/images/nightlife/hero_nightlife.webp"
    ]
  },
  events: {
    number: "04",
    category: "EVENTOS",
    title: "O REGISTO",
    description: "Experiências e momentos corporativos ou sociais captados com foco na essência do acontecimento.",
    theme: "dark",
    images: [
      "/images/events/portfolio_event_1.webp",
      "/images/events/@Pedromrtn_s_NGF-0720.webp",
      "/images/events/@Pedromrtn_s_NGF-0848.webp",
      "/images/events/@Pedromrtn_s_NGF-2606.webp",
      "/images/events/@Pedromrtn_s_NGF-7564.webp"
    ]
  },
  personal: {
    number: "03",
    category: "VISÃO PESSOAL",
    title: "O OLHAR",
    description: "A fotografia como expressão artística pura, sem guiões ou expetativas.",
    theme: "light",
    images: [
      "/images/personal/portfolio_personal_1.webp",
      "/images/personal/PEMA1566.webp",
      "/images/personal/@Pedromrtn_s-0456.webp",
      "/images/personal/PM-9157.webp",
      "/images/personal/PEMA0351.webp"
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
                <Image
                  src={src}
                  alt={`${data.title} ${index + 1}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
