"use client";

import styles from "./Overlay.module.css";

const STAGES = [
  {
    num: "01 / 03",
    title: (
      <>
        On <span style={{ color: "#E31C3D" }}>aligne</span> avant de filmer.
      </>
    ),
    text: "Chaque mandat commence par une lecture froide du marché, de l'audience pis des compétiteurs. Le plan se construit avant que l'objectif s'allume.",
  },
  {
    num: "02 / 03",
    title: (
      <>
        On <span style={{ color: "#E31C3D" }}>produit</span> pour convertir.
      </>
    ),
    text: "Vidéo, photo, motion design — chaque pièce de contenu est pensée pour arrêter le scroll, pas juste pour avoir l'air bonne.",
  },
  {
    num: "03 / 03",
    title: (
      <>
        On <span style={{ color: "#E31C3D" }}>pousse</span> les résultats.
      </>
    ),
    text: "Distribution, paid media, optimisation continue. Le contenu travaille en boucle jusqu'à ce qu'il performe vraiment.",
  },
];

export default function Overlay({ static: isStatic = false }) {
  return (
    <div>
      <section className={`${styles.page} ${isStatic ? styles.static : ""}`}>
        <div className={styles.eyebrow}>Strategy · Content · Growth</div>
        <h1 className={styles.heroTitle}>
          DU CONTENU QUI
          <br />
          GÉNÈRE DES <span style={{ color: "#E31C3D" }}>RÉSULTATS</span>
        </h1>
        <p className={styles.heroSub}>
          On aide les marques québécoises à arrêter de poster pour poster, pis à
          commencer à produire du contenu qui vend, qui convertit pis qui dure.
        </p>
        <div className={styles.ctas}>
          <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
            Booke ta strat call
          </a>
          <a href="#" className={`${styles.btn} ${styles.btnGhost}`}>
            Voir nos projets
          </a>
        </div>
        {!isStatic && <div className={styles.scrollCue}>Scroll pour explorer ↓</div>}
      </section>

      {STAGES.map((s, i) => (
        <section key={i} className={`${styles.page} ${isStatic ? styles.static : ""}`}>
          <div className={styles.stageMeta}>
            <span className={styles.stageNum}>{s.num}</span>
            <div className={styles.dotRow} aria-hidden="true">
              {STAGES.map((_, d) => (
                <span
                  key={d}
                  className={`${styles.dotSmall} ${d === i ? styles.active : ""}`}
                />
              ))}
            </div>
          </div>
          <h3 className={styles.stageTitle}>{s.title}</h3>
          <p className={styles.stageText}>{s.text}</p>
        </section>
      ))}
    </div>
  );
}
