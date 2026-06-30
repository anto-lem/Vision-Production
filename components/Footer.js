"use client";

import Link from "next/link";
import styles from "./NavFooter.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <div className={styles.logo}>
            VISION<span>·</span>PRODUCTION
          </div>
          <p>
            Du contenu qui génère des résultats. Stratégie, production et croissance pour les
            marques québécoises.
          </p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:allo@visionmarketing.com">allo@visionmarketing.com [placeholder]</a></li>
            <li><span>+1 (XXX) XXX-XXXX [placeholder]</span></li>
            <li><span>Québec, QC</span></li>
          </ul>
        </div>
        <div>
          <h4>Reste informé</h4>
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => e.preventDefault()}
            aria-label="Inscription infolettre"
          >
            <input type="email" placeholder="Ton courriel" aria-label="Courriel" required />
            <button type="submit" className={styles.newsletterBtn}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 Vision Production. Tous droits réservés.</span>
        <div className={styles.socials} aria-label="Réseaux sociaux">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="TikTok">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
