"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./sections.module.css";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroFallback} aria-hidden="true" />
      <Hero3D heroRef={heroRef} />
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>Strategy · Content · Growth</div>
        <h1 className={styles.heroTitle}>
          DU CONTENU QUI
          <br />
          GÉNÈRE DES <span className="accent">RÉSULTATS</span>
        </h1>
        <p className={styles.heroSub}>
          On aide les marques québécoises à arrêter de poster pour poster, pis à commencer à
          produire du contenu qui vend, qui convertit pis qui dure.
        </p>
        <div className={styles.heroStat}>+XX clients accompagnés [placeholder]</div>
        <div className={styles.ctas}>
          <a href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
            Booke ta strat call
          </a>
          <a href="/portfolio" className={`${styles.btn} ${styles.btnGhost}`}>
            Voir nos projets
          </a>
        </div>
      </div>
      <div className={styles.scrollCue}>Scroll ↓</div>
    </section>
  );
}
