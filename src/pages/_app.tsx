import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Titre par défaut du site (peut être overridé par chaque page) */}
      <Head>
        <title>Vovinam Lyon – Arts Martiaux Vietnamiens</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

