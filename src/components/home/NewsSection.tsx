import React from "react";

const news = [
  {
    title: "Passages de grade régionaux",
    date: "23 janvier et 5 juin 2027",
    excerpt:
      "Les prochains passages de grade régionaux auront lieu à Millery, en Auvergne-Rhône-Alpes, les 23 janvier et 5 juin 2027.",
  },
  {
    title: "Tournoi International TND",
    date: "30 et 31 janvier 2027",
    excerpt:
      "Le Tournoi International TND se déroulera les 30 et 31 janvier 2027 à Paris, en Île-de-France.",
  },
  {
    title: "Grand Rassemblement Traditionnel",
    date: "Du 15 au 17 mai 2027",
    excerpt:
      "Rendez-vous en Auvergne-Rhône-Alpes pour la 67ᵉ Fête de la Fondation, la Coupe de France et l’examen national de grades, du 15 au 17 mai 2027.",
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
