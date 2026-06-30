import styles from "../../components/sections.module.css";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact — Vision Production",
};

export default function ContactPage() {
  return (
    <section className={styles.section} style={{ paddingTop: "150px", borderTop: "none" }}>
      <div className={styles.sectionInner}>
        <div className={styles.contactGrid}>
          <div>
            <h1>
              Prêt à <span className="accent">dead</span> ton prochain projet ?
            </h1>
            <p>
              Raconte-nous où t'en es pis où tu veux aller. On revient vers toi en moins de 48h
              avec les prochaines étapes.
            </p>
            <div className={styles.contactMeta}>
              <div><b>Courriel</b> — allo@visionmarketing.com [placeholder]</div>
              <div><b>Téléphone</b> — +1 (XXX) XXX-XXXX [placeholder]</div>
              <div><b>Basé à</b> — Québec, QC</div>
              <div><b>Réseaux</b> — Instagram · LinkedIn · TikTok</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
