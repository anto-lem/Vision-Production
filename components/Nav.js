"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavFooter.module.css";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        VISION<span>·</span>PRODUCTION
      </Link>
      <div className={styles.links}>
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? styles.active : ""}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <Link href="/contact" className={styles.cta}>
        Réserve ton call
      </Link>
    </nav>
  );
}
