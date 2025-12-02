import React from "react";

const plans = [
  {
    label: "Enfants (6–12 ans)",
    highlight: false,
    price: "105 €/an", // 💡 À adapter avec le vrai tarif
    subtitle: "Licence + cours hebdomadaire",
    items: [
      "Cours adaptés au niveau et à l’âge",
      "Travail de la motricité, du respect et de la confiance",
      "Encadrement par enseignants diplômés et passage de grade",
    ],
  },
  {
    label: "Ados & Adultes (13 ans et +)",
    highlight: true,
    price: "180 €/an", // 💡 À adapter avec le vrai tarif
    subtitle: " Cotisation annuelle, Licence fédérale et assurance. ",
    items: [
      "Techniques complètes de Vovinam Viet Vo Dao",
      "Self-défense, travail physique et mental",
      "Préparation aux passages de ceintures",
      "Passeport sportif de 30€, seulement la 1ère année.",
    ],
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="tarifs" className="py-12 sm:py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Titre */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Tarifs & inscription
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Des tarifs clairs, sans surprise, avec cours d’essai gratuit.
          </p>
        </div>

        {/* Cartes tarifs */}
        <div className="grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.label}
              className={[
                "rounded-2xl border p-6 flex flex-col shadow-sm bg-white",
                plan.highlight
                  ? "border-blue-700 shadow-md relative overflow-hidden"
                  : "border-slate-200",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 rounded-full bg-blue-700 text-[10px] font-semibold text-white px-3 py-1">
                  Plus demandé
                </div>
              )}

              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                {plan.label}
              </h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {plan.price}
                </span>
                <span className="text-xs text-slate-500">
                  / saison sportive
                </span>
              </div>

              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                {plan.subtitle}
              </p>

              <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-slate-600 flex-1">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[3px] text-blue-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <a
                  href="#essai"
                  className="inline-flex w-full items-center justify-center rounded-full border border-blue-700 text-blue-700 text-xs sm:text-sm font-semibold py-2 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  Faire un cours d’essai
                </a>
              </div>
            </article>
          ))}

          {/* Bloc modalités */}
          <article className="rounded-2xl border border-slate-200 p-6 bg-white flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              Modalités
            </h3>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 flex-1">
              <li>
                ✅ <strong>Cours d’essai gratuit</strong> sur simple demande via
                le formulaire.
              </li>
              <li>
                ✅ <strong>Certificat médical sportif</strong> précisant la pratique
                en compétition et en combat.
              </li>
              <li>
                ✅ Licence et assurance incluses dans l’adhésion.
              </li>
            </ul>

            <p className="mt-3 text-[11px] text-slate-500">
              Pour connaître le détail des tarifs, n’hésitez pas à nous contacter ou
              à passer nous voir directement à la salle.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
