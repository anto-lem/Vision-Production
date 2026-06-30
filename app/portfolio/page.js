import styles from "../../components/sections.module.css";
import PortfolioGrid from "../../components/PortfolioGrid";
import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: "Portfolio — Vision Production",
};

export default function PortfolioPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <h1>
          Des résultats qu'on peut <span className="accent">montrer.</span>
        </h1>
        <p>
          Chaque projet est une étude de cas — pas juste un visuel. Voici un aperçu de mandats à
          venir (espaces réservés pour l'instant).
        </p>
      </section>
      <PortfolioGrid showHeader={false} />
      <CTABanner />
    </>
  );
}
