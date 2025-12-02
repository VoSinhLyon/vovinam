import React from "react";
import Image from "next/image";

const teachers = [
  {
    name: "Maître Daniel BLOUME",
    rank: "Ceinture rouge IIIᵉ degré - Noire VIIᵉ Dan (système international)",
    role: "Maitre",
    bio: "Plus de 50 années de pratique, encadre les cours adultes/ados",
    photo: "/teachers/MaitreDanielBloume.jpg",
  },
  {
    name: "Maître Arnaud Balducci",
    rank: "Ceinture rouge - Noire IVᵉ Dan (système international)",
    role: "Maitre",
    bio: "Encadre les cours adultes/ados les lundi soir",
    photo: "/teachers/MaitreArnaud.jpg",
  },
   {
    name: "Maître Malick",
    rank: "Ceinture rouge - Noire IVᵉ Dan (système international)",
    role: "Maitre",
    bio: "Encadre les cours adultes/ados",
    photo: "/teachers/MaitreMalick.jpg",
  },
  {
    name: "et les membres du bureau et enseignants",
    rank: "Président: Mickael Saumon, Secrétaire: Vincent et Trésorier: Martial",
    bio: "Philippe encadre les cours enfants les vendredis soir",
    photo: "/teachers/philippe.jpg",
  },
];

export const TeachersSection: React.FC = () => {
  return (
    <section id="enseignants" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Titre */}
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
            Les maitres et enseignants du club
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Des maitres et enseignants passionnés, bénévoles, formés et investis dans la progression de chacun.
          </p>
        </div>

        {/* Cartes enseignants */}
        <div className="grid gap-6 md:grid-cols-2">
          {teachers.map((teacher) => (
            <article
              key={teacher.name}
              className="
                rounded-3xl bg-slate-50 
                border border-slate-200 
                px-6 py-5 
                flex gap-4 shadow-sm hover:shadow-md transition-shadow
              "
            >
              {/* Photo */}
              <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border border-slate-200">
                <Image
                  src={teacher.photo}
                  alt={teacher.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Texte */}
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {teacher.name}
                </h3>

                <p className="text-xs text-blue-700 font-semibold mt-0.5 leading-snug">
                  {teacher.rank} – {teacher.role}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {teacher.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
