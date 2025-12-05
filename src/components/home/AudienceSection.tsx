import React from "react";

const groups = [
  {
    label: "Enfants (6–11 ans)",
    text: "Découvrir l’art martial en s’amusant : motricité, respect, concentration, confiance en soi.",
  },
  {
    label: "Ados (12–16 ans)",
    text: "Un cadre structuré pour se dépasser avec des techniques, du physique et des objectifs de progression.",
  },
  {
    label: "Adultes (17 ans et +)",
    text: "Un travail complet mêlant technique, self-défense et préparation physique, du débutant au confirmé.",
  },
];

export const AudienceSection: React.FC = () => {
  return (
    <section className="py-4 sm:py-6 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-8">
          <h2
            className="
              text-3xl sm:text-2xl 
              font-semibold 
              tracking-wide 
              text-slate-700 
              uppercase
            "
          >
            Des cours adaptés à chaque âge
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Enfants, ados ou adultes : chacun progresse dans un groupe qui lui correspond.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 flex flex-col"
            >
              <h3 className="font-semibold text-slate-900 mb-2">
                {group.label}
              </h3>
              <p className="text-sm text-slate-600 flex-1">
                {group.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
