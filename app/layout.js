import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Vision Production — Du contenu qui génère des résultats",
  description:
    "Agence de croissance québécoise : stratégie, production de contenu et croissance pour les marques d'ici.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-CA" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
