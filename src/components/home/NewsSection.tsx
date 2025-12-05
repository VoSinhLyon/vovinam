import React from "react";

const news = [
  {
    title: "Stage régional – Lyon",
    date: "Mars 2026",
    excerpt: "Un stage intense avec la présence de plusieurs clubs de la région.",
  },
  {
    title: "Grand Rassemblement Traditionnel - Coupe de France 2026",
    date: "Mai 2026",
    excerpt: "le GRT aura lieu le week-end du 23/24 mai 2026, au Centre Sportif de Normandie à Houlgate.",
  },
  {
    title: "Coupe du Monde 2026 de Vovinam–Việt Võ Đạo",
    date: "22 zu 26 Juillet 2026",
    excerpt: "la 7e Coupe du Monde de Vovinam–Việt Võ Đạo aura lieu à Paris",
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section id="actus" className="py-4 sm:py-8 bg-white">
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
              Evénements, stages, passages de grades, et démonstrations.
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
