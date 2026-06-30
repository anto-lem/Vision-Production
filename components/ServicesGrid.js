import Link from "next/link";
import styles from "./sections.module.css";
import { SERVICES } from "../lib/data";

export default function ServicesGrid({ limit, showHeader = true, showViewAll = true }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className={styles.section}>
      <div className={styles.giantNum} style={{ top: "-30px", left: "-10px" }}>01</div>
      <div className={styles.sectionInner}>
        {showHeader && (
          <div className={styles.headRow}>
            <h2>
              Solutions créatives <span className="accent">taillées pour ta marque.</span>
            </h2>
            {showViewAll && (
              <Link href="/services" className={styles.viewAll}>
                Tous les services →
              </Link>
            )}
          </div>
        )}
        <div className={styles.servicesGrid}>
          {items.map((s) => (
            <div key={s.slug} className={styles.serviceCard}>
              <span className={styles.num}>{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className={styles.timeline}>
                Délai estimé : <b>{s.timeline}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
