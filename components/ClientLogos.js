import styles from "./sections.module.css";

const PLACEHOLDER_CLIENTS = ["Client A", "Client B", "Client C", "Client D", "Client E", "Client F"];

export default function ClientLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.logosLabel}>Marques avec qui on a travaillé [placeholders]</div>
        <div className={styles.logosRow}>
          {PLACEHOLDER_CLIENTS.map((c) => (
            <div key={c} className={styles.logoChip}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
