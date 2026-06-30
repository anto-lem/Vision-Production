import Link from "next/link";
import styles from "./sections.module.css";

export default function Pricing() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.headRow} style={{ justifyContent: "center", textAlign: "center" }}>
          <h2 style={{ margin: "0 auto" }}>
            Un partenaire de <span className="accent">contenu, pas un fournisseur.</span>
          </h2>
        </div>
        <div className={styles.pricingWrap}>
          <div className={styles.pricingCard}>
            <span className={styles.pricingBadge}>Placeholder</span>
            <div>Forfait mensuel</div>
            <div className={styles.priceLine}>
              <span className={styles.amount}>3 000 $</span>
              <span className={styles.period}>/ mois</span>
            </div>
            <div className={styles.pricingNote}>
              Tarif indicatif — à confirmer avec Vision Production avant publication.
            </div>
            <ul>
              <li><span className={styles.checkDot} />Demandes de contenu illimitées [placeholder]</li>
              <li><span className={styles.checkDot} />Livraison sous X jours [placeholder]</li>
              <li><span className={styles.checkDot} />Vidéo, photo et stratégie réseaux sociaux</li>
              <li><span className={styles.checkDot} />Révisions incluses [placeholder]</li>
              <li><span className={styles.checkDot} />Sans contrat à long terme [placeholder]</li>
            </ul>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              Réserve ton call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
