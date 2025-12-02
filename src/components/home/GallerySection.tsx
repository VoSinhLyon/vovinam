// src/components/home/GallerySection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const photos = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  src: `/images/gallery/${i + 1}.jpg`,
}));

export const GallerySection: React.FC = () => {
  return (
    <section id="galerie" className="py-8 sm:py-12 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-2xl font-semibold tracking-wide text-slate-700 uppercase">
            En images : la vie du club
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Entraînements, passages de grades, stages et moments de convivialité.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200"
            >
              <Image
                src={photo.src}
                alt={`Photo du club ${photo.id + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/galerie"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:border-blue-700 hover:text-blue-700 transition-colors"
          >
            Voir la galerie complète
          </Link>
        </div>
      </div>
    </section>
  );
};
