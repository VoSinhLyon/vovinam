import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-8 md:grid-cols-3 text-sm text-slate-600">
        <div>
          <div className="font-semibold text-slate-900 mb-2">
            Vovinam Lyon
          </div>
          <p>Vovinam Viet Vo Dao – Club de Lyon.</p>
          <p className="mt-1">
            Lyon 6ᵉ – Gymnase Tronchet – 125 rue Tronchet, Lyon 69006
          </p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Contact</div>
          <p>✉️ contact@vovinam-lyon.fr</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Liens</div>
          <p>
            <a href="#horaires" className="hover:text-blue-700">
              Cours & horaires
            </a>
          </p>
          <p>
            <a href="#tarifs" className="hover:text-blue-700">
              Tarifs
            </a>
          </p>
          <p>
            <a href="#essai" className="hover:text-blue-700">
              Essai gratuit
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200 text-xs text-slate-500 py-3 text-center">
        © {new Date().getFullYear()} Vovinam Lyon – Tous droits réservés.
      </div>
    </footer>
  );
};
