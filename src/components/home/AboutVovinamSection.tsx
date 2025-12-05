import React from "react";

export const AboutVovinamSection: React.FC = () => {
  return (
    <section className="py-4 sm:py-10 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2
            className="
              text-3xl sm:text-2xl 
              font-semibold 
              tracking-wide 
              text-slate-700 
              uppercase
            "
          >
            Qu’est-ce que le Vovinam Viet Vo Dao ?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Né au Vietnam au XXᵉ siècle, le Vovinam Viet Vo Dao est un art
            martial complet qui combine techniques de pieds et de poings,
            projections, balayages, ciseaux spectaculaires et self-défense.
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Il repose sur des valeurs fortes :{" "}
            <strong>discipline</strong>, <strong>respect</strong>,
            <strong> courage</strong>, <strong>humilité</strong> et
            <strong> solidarité</strong>. Au-delà de la technique, c’est une
            véritable école de vie.
          </p>
          <a
            href="#galerie"
            className="mt-4 inline-flex items-center rounded-full border border-blue-700 px-5 py-2 text-xs sm:text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
          >
            Voir des photos du Vovinam à Lyon
          </a>
        </div>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/C_IglJ0LUs8"
            title="Démonstration Vovinam Viet Vo Dao"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};
