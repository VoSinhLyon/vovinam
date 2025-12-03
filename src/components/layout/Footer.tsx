import React from "react";
import { Instagram, Facebook, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-8 md:grid-cols-4 text-sm text-slate-600">

        {/* Bloc 1 : identité */}
        <div>
          <div className="font-semibold text-slate-900 mb-2">
            Vovinam Lyon
          </div>
          <p>Vovinam Viet Vo Dao – Club de Lyon.</p>
          <p className="mt-1">
            Lyon 6ᵉ – Gymnase Tronchet – 125 rue Tronchet, Lyon 69006
          </p>
        </div>

        {/* Bloc 2 : contact */}
        <div>
          <div className="font-semibold text-slate-900 mb-2">Contact</div>
          <p>✉️ contact@vovinam-lyon.fr</p>
        </div>

        {/* Bloc 3 : navigation */}
        <div>
          <div className="font-semibold text-slate-900 mb-2">Liens utiles</div>
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

        {/* Bloc 4 : externes */}
        <div>
          <div className="font-semibold text-slate-900 mb-2">Fédération & Réseaux</div>

          <p className="flex items-center gap-2">
            <Globe size={16} className="text-slate-700" />
            <a
              href="https://vovinamworldfederation.eu/fr/federation-mondiale.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              Fédération Mondiale
            </a>
          </p>

          <p className="flex items-center gap-2 mt-1">
            <Instagram size={16} className="text-slate-700" />
            <a
              href="https://www.instagram.com/vovinamlyon/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              Instagram - Lyon
            </a>
          </p>

          <p className="flex items-center gap-2 mt-1">
            <Instagram size={16} className="text-slate-700" />
            <a
              href="https://www.instagram.com/vovinam.aura/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              Instagram - région AURA
            </a>
          </p>

          <p className="flex items-center gap-2 mt-1">
            <Facebook size={16} className="text-slate-700" />
            <a
              href="https://www.facebook.com/Vovinam.Lyon/?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              Facebook
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
