"use client";

import styles from "./sections.module.css";

export default function ContactForm() {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formRow}>
        <div>
          <label htmlFor="name">Nom</label>
          <input id="name" type="text" placeholder="Ton nom" required />
        </div>
        <div>
          <label htmlFor="email">Courriel</label>
          <input id="email" type="email" placeholder="ton@courriel.com" required />
        </div>
      </div>
      <div>
        <label htmlFor="company">Entreprise</label>
        <input id="company" type="text" placeholder="Nom de ton entreprise" />
      </div>
      <div>
        <label htmlFor="project">Ton projet</label>
        <textarea
          id="project"
          placeholder="Parle-nous de ton projet, tes objectifs, ton budget approximatif..."
          required
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Envoyer ma demande
      </button>
    </form>
  );
}
