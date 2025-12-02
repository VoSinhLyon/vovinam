import React from "react";

export const TrialCTASection: React.FC = () => {
  return (
    <section
      id="essai"
      className="py-12 sm:py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Envies d’essayer ? Le premier cours est gratuit.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-blue-100">
            Venez tester un cours dans le groupe qui vous correspond : enfants, ados ou adultes.
            Aucun prérequis, simple tenue de sport suffisante pour commencer.
          </p>

          <div className="mt-4 text-xs sm:text-sm text-blue-100/90">
            <p>📍 Gymnase Tronchet – 125 rue Tronchet – Lyon 6ᵉ</p>
            <p>🚇 Métro Masséna ou Charpennes</p>
            <p>🚗 Proche Parc de la Tête d'Or</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white/10 backdrop-blur p-5 sm:p-6 shadow-lg border border-white/20">
          <form className="space-y-3 text-xs sm:text-sm">
            <div>
              <label className="block mb-1 font-medium">
                Nom et prénom
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="vous@email.fr"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Groupe souhaité
              </label>
              <select
                className="w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                <option value="enfant" className="text-slate-900">
                  Enfants (6–11 ans)
                </option>
                <option value="ado" className="text-slate-900">
                  Ados (12–16 ans)
                </option>
                <option value="adulte" className="text-slate-900">
                  Adultes (17 ans et +)
                </option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Message (optionnel)
              </label>
              <textarea
                rows={3}
                className="w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Ex : Je souhaite inscrire mon enfant, débutant complet..."
              />
            </div>
            <button
              type="submit"
              className="mt-1 w-full inline-flex items-center justify-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-blue-900 shadow-md hover:bg-yellow-300 transition-colors"
            >
              Envoyer ma demande d’essai
            </button>
            <p className="text-[11px] text-blue-100 mt-1">
              Nous vous répondrons rapidement avec les informations pratiques
              (jour, horaire, tenue, accès au gymnase).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
