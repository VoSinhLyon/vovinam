import React from "react";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-blue-900 text-slate-50 text-xs sm:text-sm">
      <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-1 items-center justify-between sm:flex-row">
        <span>📍 Lyon 6ᵉ – Gymnase TRONCHET</span>
        <span className="flex flex-wrap items-center gap-3">
          <span>📅 Cours enfants / ados / adultes – plusieurs soirs par semaine</span>
          <span>✉️ contact@vovinam-lyon.fr</span>
        </span>
      </div>
    </div>
  );
};
