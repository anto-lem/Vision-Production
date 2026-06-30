import styles from "./sections.module.css";

export default function MissionStats() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.missionGrid}>
          <h2>
            On crée du contenu, <span className="accent">qui travaille pour toi.</span>
          </h2>
          <div>
            <p>
              Chez Vision Production, on ne fait pas que filmer — on bâtit ta présence. De la
              stratégie à la diffusion, on crée du contenu sur mesure qui attire, engage et
              convertit.
            </p>
            <p>
              Photos, vidéos, sites web, publicités : on te livre un plan clé en main, pensé pour
              ta réalité et tes objectifs.
            </p>
            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <div className={styles.num}>+XX</div>
                <div className={styles.label}>Clients accompagnés [placeholder]</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.num}>+XXM</div>
                <div className={styles.label}>Vues générées [placeholder]</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.num}>4</div>
                <div className={styles.label}>Services clés en main</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
