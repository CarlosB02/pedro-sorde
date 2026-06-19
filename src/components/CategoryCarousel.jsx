"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import styles from "./CategoryCarousel.module.css";
import clsx from "clsx";

const CATEGORIES = {
  weddings: {
    number: "02",
    category: "INTIMACY & ELEGANCE",
    title: "The Vow",
    description: "Moments of quiet grace amidst the celebration.",
    theme: "light",
    images: [
      "/images/hero_wedding.png",
      "/images/portfolio_wedding_1.png",
      "/images/hero_wedding.png",
      "/images/portfolio_wedding_1.png",
      "/images/hero_wedding.png"
    ]
  },
  nightlife: {
    number: "03",
    category: "SOUND & ENERGY",
    title: "The Pulse",
    description: "Vibrant dynamics and intense focus in the heart of the scene.",
    theme: "dark",
    images: [
      "/images/hero_nightlife.png",
      "/images/portfolio_nightlife_1.png",
      "/images/hero_nightlife.png",
      "/images/portfolio_nightlife_1.png",
      "/images/hero_nightlife.png"
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
    <section className={clsx(styles.carouselSection, styles[data.theme])}>
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
