import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-vovi-blueSoft via-white to-slate-50 border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:py-16 grid gap-10 lg:grid-cols-2 items-center">

        {/* COLONNE GAUCHE */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-soft border border-slate-200 mb-4">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-vovi-blue" />
            <span>Art martial vietnamien</span>
          </div>

          {/* TITRE */}
          <h1 className="mt-1 text-slate-900 leading-tight">
  {/* Ligne au-dessus */}
  <span className="block text-sm sm:text-base text-slate-500 mb-2">
    Le Club de Lyon et de sa région
  </span>

  {/* Ligne principale */}
  <span className="block text-2xl sm:text-3xl lg:text-4xl flex items-center gap-[4px]">
    {/* Badge VOVINAM */}
  <span
  className="
    inline-flex items-center
    uppercase tracking-[0.12em] text-[0.95em]
    font-bold
    bg-[#ffb400]
    text-slate-800
    border border-[#0f1b2b]
    px-4 py-1
    rounded-[4px]
  "
>
  VOVINA<span className="text-red-600 tracking-[-0.015em]">M</span>
</span>

    {/* Việt Võ Đạo gris/bleuté */}
    <span className="inline-flex items-center
                  tracking-[0.05em] text-[0.95em]
                  font-semibold
                  bg-red-600
                  text-white
                  border border-[#0f1b2b]
                  px-3 py-1
                  rounded-[4px]
                "
              >
                Việt Võ Đạo
    </span>
  </span>
</h1>



          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Un art martial vietnamien complet pour développer{" "}
            <span className="font-semibold">confiance</span>,{" "}
            <span className="font-semibold">discipline</span> et{" "}
            <span className="font-semibold">condition physique</span>, dans une
            ambiance conviviale au cœur de Lyon.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#essai"
              className="inline-flex items-center rounded-full bg-blue-800 px-6 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Réserver un cours d’essai
            </a>
            <a
              href="#horaires"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-vovi-blue hover:text-vovi-blue shadow-soft hover:-translate-y-0.5 transition-all"
            >
              Voir les horaires
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            ✅ Cours enfants, ados et adultes – débutants bienvenus
          </p>
        </div>

        {/* COLONNE DROITE — PHOTO + CARD */}
        <div className="relative">

          {/* PHOTO */}
          <div className="aspect-video rounded-3xl overflow-hidden shadow-card border border-slate-200/70 relative">
            <Image
              src="/images/VVD-1-2-scaled.jpg"
              alt="Entraînement Vovinam Lyon"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Overlay bleu premium */}
            <div className="absolute inset-0 bg-vovi-blue/10 mix-blend-soft-light"></div>
          </div>

          {/* ENCAR BLANC — PLACÉ EXTÉRIEUR AU BLOC IMAGE*/}
          <div className="absolute -bottom-4 -left-3 bg-white rounded-2xl shadow-soft px-4 py-3 text-[11px] sm:text-xs text-slate-700 border border-slate-200 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-vovi-yellowSoft text-[11px] font-semibold text-slate-800">
              🥋
            </span>
            <span>
              Cours enfants, ados & adultes —{" "}
              <span className="font-semibold text-vovi-blue">Lyon 6ᵉ</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
