import Link from "next/link";
import styles from "./sections.module.css";
import { PORTFOLIO } from "../lib/data";

export default function PortfolioGrid({ limit, showHeader = true, showViewAll = true, showNote = true }) {
  const items = limit ? PORTFOLIO.slice(0, limit) : PORTFOLIO;

  return (
    <section className={styles.section}>
      <div className={styles.giantNum} style={{ top: "-30px", right: "-10px" }}>02</div>
      <div className={styles.sectionInner}>
        {showHeader && (
          <div className={styles.headRow}>
            <h2>
              Des résultats qu'on peut <span className="accent">montrer</span>, pas juste raconter.
            </h2>
            {showViewAll && (
              <Link href="/portfolio" className={styles.viewAll}>
                Tous les projets →
              </Link>
            )}
          </div>
        )}
        <div className={styles.portfolioGrid}>
          {items.map((p) => (
            <Link key={p.slug} href={`/portfolio#${p.slug}`} className={styles.caseCard}>
              <div className={styles.caseTop}>
                <span>/{p.num}</span>
                <span>{p.year}</span>
              </div>
              <div>
                <div className={styles.caseTag}>{p.tag}</div>
                <h4>{p.title}</h4>
              </div>
            </Link>
          ))}
        </div>
        {showNote && (
          <p className={styles.caseNote}>
            Les noms et visuels ci-dessus sont des espaces réservés — à remplacer par de vrais
            mandats Vision Production avant la mise en ligne.
          </p>
        )}
      </div>
    </section>
  );
}
