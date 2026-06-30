import styles from "./sections.module.css";

const PLACEHOLDERS = [
  { quote: "Témoignage à venir — à remplacer par un vrai retour client.", author: "Nom du client, Entreprise" },
  { quote: "Témoignage à venir — à remplacer par un vrai retour client.", author: "Nom du client, Entreprise" },
  { quote: "Témoignage à venir — à remplacer par un vrai retour client.", author: "Nom du client, Entreprise" },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.headRow}>
          <h2>
            La confiance de <span className="accent">nos clients.</span>
          </h2>
        </div>
        <div className={styles.testimonialsGrid}>
          {PLACEHOLDERS.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <span className={styles.testimonialBadge}>Placeholder</span>
              <p>{t.quote}</p>
              <div className={styles.testimonialAuthor}>{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
