import React from "react";

const schedule = [
  { day: "Lundi", adults: "20h00 – 22h00" },
  { day: "Mercredi", teens: "18h00 – 20h", adults: "18h00 – 20h00 / 20h00 - 22h00"  },
  { day: "Vendredi", children: "18h00 – 20h", teens: "18h00 – 20h00", adults: "18h00 – 20h00" },
];

export const SchedulePreview: React.FC = () => {
  return (
    <section id="horaires" className="py-12 sm:py-16 bg-white border-y border-slate-200">
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
              Cours & horaires
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Un planning adapté aux rythmes de vie des enfants, des ados et des adultes.
            </p>
          </div>
          <a
            href="#essai"
            className="inline-flex items-center rounded-full bg-blue-700 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors"
          >
            Réserver un cours d’essai
          </a>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Jour</th>
                <th className="px-4 py-3 text-left font-semibold">Enfants</th>
                <th className="px-4 py-3 text-left font-semibold">Ados</th>
                <th className="px-4 py-3 text-left font-semibold">Adultes</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.day} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.day}</td>
                  <td className="px-4 py-3 text-slate-700">{row.children}</td>
                  <td className="px-4 py-3 text-slate-700">{row.teens}</td>
                  <td className="px-4 py-3 text-slate-700">{row.adults}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p id="tarifs" className="mt-3 text-xs text-slate-500">
          Détail des horaires, niveaux et tarifs disponibles sur demande ou en cours d’année.
        </p>
      </div>
    </section>
  );
};
