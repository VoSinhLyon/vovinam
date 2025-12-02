import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>

        {/* --- SEO Général --- */}
        <meta
          name="description"
          content="Vovinam Viet Vo Dao à Lyon : cours enfants, ados et adultes au gymnase Tronchet (Lyon 6e). Premier cours d’essai gratuit."
        />

        <meta
          name="keywords"
          content="vovinam lyon, viet vo dao lyon, arts martiaux lyon, self défense lyon, cours arts martiaux enfants lyon"
        />

        <meta name="author" content="Vovinam Lyon" />

        {/* --- Open Graph (preview Facebook/Instagram) --- */}
        <meta property="og:title" content="Vovinam Lyon – Arts Martiaux Vietnamiens" />
        <meta
          property="og:description"
          content="Cours enfants, ados et adultes – Premier cours d’essai gratuit."
        />
        <meta property="og:image" content="https://vovinam-lyon.fr/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* --- Favicon --- */}
        <link rel="icon" href="/favicon.ico" />

        {/* --- Fonts optimisées --- */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

      </Head>

      <body className="bg-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
