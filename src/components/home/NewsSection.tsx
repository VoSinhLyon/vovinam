import React from "react";

const news = [
  {
    title: "Stage régional – Lyon",
    date: "Mars 2026",
    excerpt: "Un stage intense avec la présence de plusieurs clubs de la région.",
  },
  {
    title: "Passage de grades – Résultats",
    date: "Décembre 2025",
    excerpt: "Félicitations à tous les élèves pour leur engagement et leur réussite.",
  },
  {
    title: "Démonstration – Forum des associations",
    date: "Septembre 2025",
    excerpt: "Présentation du Vovinam aux habitants du quartier.",
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section id="actus" className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
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
              Actualités du club
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Stages, passages de grades, démonstrations et événements.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col"
            >
              <div className="text-xs font-medium text-blue-700 mb-1">
                {item.date}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 flex-1">
                {item.excerpt}
              </p>
              <button className="mt-3 text-xs font-medium text-blue-700 hover:text-blue-900 text-left">
                En savoir plus
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
