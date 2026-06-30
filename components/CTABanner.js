import Link from "next/link";
import styles from "./sections.module.css";

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={`${styles.sectionInner} ${styles.ctaBanner}`}>
        <h2>
          Prêt à <span className="accent">dead</span> ton prochain projet ?
        </h2>
        <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
          Travaillons ensemble
        </Link>
      </div>
    </section>
  );
}
