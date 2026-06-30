import styles from "../../components/sections.module.css";
import ServicesGrid from "../../components/ServicesGrid";
import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: "Services — Vision Production",
};

export default function ServicesPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <h1>
          Des services <span className="accent">clés en main.</span>
        </h1>
        <p>
          De la stratégie à la diffusion, chaque service est pensé pour s'intégrer dans un plan
          de contenu cohérent — pas des livrables isolés.
        </p>
      </section>
      <ServicesGrid showHeader={false} />
      <CTABanner />
    </>
  );
}
