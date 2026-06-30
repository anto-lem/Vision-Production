import styles from "./sections.module.css";

const STEPS = [
  {
    step: "01",
    title: "Découverte",
    items: [
      "Briefing de projet et alignement des objectifs",
      "Recherche audience et compétiteurs",
      "Direction créative",
      "Portée et échéancier",
    ],
  },
  {
    step: "02",
    title: "Stratégie & Design",
    items: [
      "Plan de contenu et messages clés",
      "Concept créatif et moodboard",
      "Validation avec toi avant production",
    ],
  },
  {
    step: "03",
    title: "Production",
    items: [
      "Tournage / séance photo",
      "Montage et post-production",
      "Révisions incluses",
    ],
  },
  {
    step: "04",
    title: "Lancement",
    items: [
      "Livraison finale prête à publier",
      "Diffusion et optimisation",
      "Suivi de performance",
    ],
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.headRow}>
          <h2>
            De l'idée <span className="accent">au lancement.</span>
          </h2>
          <p>
            Chaque mandat suit un processus clair, du briefing initial jusqu'à la diffusion —
            pour que tout reste organisé et efficace.
          </p>
        </div>
        <div className={styles.processGrid}>
          {STEPS.map((s) => (
            <div key={s.step} className={styles.processCard}>
              <div className={styles.step}>{s.step}</div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
