"use client";

import dynamic from "next/dynamic";
import styles from "../components/Overlay.module.css";

// Canvas/WebGL must never attempt to render on the server.
const Scene = dynamic(() => import("../components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100%", height: "100vh" }}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          VISION<span>·</span>PRODUCTION
        </div>
        <div className={styles.badge}>Démo R3F · déployée sur Vercel</div>
      </nav>
      <Scene />
    </main>
  );
}
