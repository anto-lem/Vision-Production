import "./globals.css";

export const metadata = {
  title: "Vision Production — Hero 3D",
  description: "Démo R3F / Vercel — liberté créative pour l'animation 3D de Vision Production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-CA">
      <body>{children}</body>
    </html>
  );
}
