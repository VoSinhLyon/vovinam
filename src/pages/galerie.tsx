// src/pages/galerie.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";

type Photo = {
  id: number;
  src: string;
  alt: string;
};

const photos: Photo[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  src: `/images/gallery/${i + 1}.jpg`, // 1.jpg → 18.jpg dans /public/images/gallery
  alt: `Photo du club ${i + 1}`,
}));

export default function GaleriePage() {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <SiteLayout>
      <main className="bg-slate-50 min-h-screen">
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4">
            {/* Header */}
            <div className="mb-8 sm:mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Galerie photos
                </p>
                <h1 className="mt-1 text-2xl sm:text-3xl font-semibold text-slate-900">
                  La vie du club en images
                </h1>
                <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                  Entraînements, passages de grades, démonstrations, stages et
                  moments de convivialité : un aperçu de la pratique du
                  Vovinam Viet Vo Dao à Lyon.
                </p>
              </div>

              <div className="flex gap-2 justify-start sm:justify-end text-xs sm:text-sm">
                <Link
                  href="/#galerie"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 hover:border-blue-700 hover:text-blue-700 transition-colors"
                >
                  ← Retour à l’accueil
                </Link>
              </div>
            </div>

            {/* Grille de photos */}
            <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
              {photos.map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelected(photo)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50 group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay léger au survol */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
                </button>
              ))}
            </div>

            <p className="mt-6 text-[11px] sm:text-xs text-slate-500">
              Certaines photos peuvent provenir de stages, passages de grades
              ou démonstrations extérieures au club, organisés par la
              Fédération ou d’autres structures partenaires.
            </p>
          </div>
        </section>

        {/* Lightbox / Zoom */}
        {selected && (
          <div
            className="fixed inset-0 z-40 bg-black/80 flex items-center justify-center px-4 py-6 sm:py-10"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-slate-100 text-sm sm:text-base hover:text-white"
              >
                Fermer ✕
              </button>

              <div className="relative w-full aspect-[4/3] bg-black rounded-2xl overflow-hidden">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </SiteLayout>
  );
}
