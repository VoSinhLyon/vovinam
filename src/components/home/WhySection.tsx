import React from "react";

const reasons = [
  {
    title: "Encadrement diplômé",
    text: "Professeurs expérimentés, diplômés et passionnés, avec plusieurs années de pratique du Vovinam Viet Vo Dao.",
  },
  {
    title: "Cours pour tous les âges",
    text: "Groupes enfants, ados et adultes, avec une progression adaptée à chaque niveau.",
  },
  {
    title: "Ambiance conviviale",
    text: "Respect, entraide, exigence et bonne humeur dans un club à taille humaine.",
  },
  {
    title: "Art martial complet",
    text: "Techniques, ciseaux, self-défense, renforcement physique et mental.",
  },
];

export const WhySection: React.FC = () => {
  return (
    <section id="club" className="pt-4 sm:pt-6 pb-10 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
    {/* Liseré bleu-blanc-rouge institutionnel */}
  <div className="mx-auto flex items-center justify-center gap-0.5 mb-4">
    <span className="h-[2px] w-10 bg-[#0055A4] rounded-sm"></span>   {/* Bleu 🇫🇷 */}
    <span className="h-[2px] w-10 bg-white rounded-sm border border-slate-300"></span> {/* Blanc 🇫🇷 */}
    <span className="h-[2px] w-10 bg-[#EF4135] rounded-sm"></span>   {/* Rouge 🇫🇷 */}
  </div>

  {/* Titre institutionnel */}
  <h2
    className="
      text-3xl sm:text-3xl 
      font-semibold 
      tracking-wide 
      text-slate-700 
      uppercase
    "
  >
    Pourquoi rejoindre notre club?
  </h2>

  {/* Sous-titre épuré */}
  <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
    Un club structuré, accueillant et exigeant, pour progresser à votre rythme.
  </p>
</div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 flex flex-col"
            >
              <div className="h-10 w-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 text-lg mb-3">
                ★
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-600 flex-1">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
