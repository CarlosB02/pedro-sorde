"use client";

import React, { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./VideoSection.module.css";
import clsx from "clsx";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log("Video play interrupted:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="em-movimento" className={clsx(styles.videoSection, styles.light)}>
      <div className={styles.headerWrapper}>
        <SectionHeader
          number="05"
          category="EM MOVIMENTO"
          title="O RITMO"
          description="Porque algumas histórias precisam de som, ritmo e movimento. A fluidez do cinema aplicada ao registo real."
        />
      </div>

      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper} onClick={togglePlay}>
          <video
            ref={videoRef}
            src="/videos/em-movimento/video.mp4"
            className={styles.video}
            loop
            muted
            playsInline
            autoPlay
            preload="metadata"
          />
          <div className={styles.overlay}>
            <div className={styles.playButton}>
              {isPlaying ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
            <span className={styles.hint}>
              {isPlaying ? "PAUSAR VÍDEO" : "REPRODUZIR VÍDEO"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
