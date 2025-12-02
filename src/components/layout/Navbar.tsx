import React from "react";
import Image from "next/image";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Le club", href: "#club" },
  { label: "Cours & horaires", href: "#horaires" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Enseignants", href: "#enseignants" },
  { label: "Actualités", href: "#actus" },
  { label: "Galerie", href: "#galerie" },
];

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/70 shadow-soft">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo + nom */}
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-soft">
  <Image
    src="/logo-vovinam-lyon.png"
    alt="Logo Vovinam Lyon"
    fill
    sizes="64px"
    className="object-contain p-1"
  />
</div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900 text-sm">
              Vovinam Viet Vo Dao
            </div>
            <div className="text-xs text-slate-500">
            Club de Lyon
            </div>
          </div>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-5 text-xs sm:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 hover:text-vovi-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#essai"
            className="ml-2 inline-flex items-center rounded-full bg-yellow-600 from-vovi-blue to-sky-500 px-4 py-1.5 text-xs sm:text-sm font-medium text-white shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
          >
            Essai gratuit
          </a>
        </nav>

        {/* Menu mobile ultra simple */}
        <div className="md:hidden">
          <a
            href="#essai"
            className="inline-flex items-center rounded-full bg-vovi-blue px-3 py-1 text-xs font-medium text-white shadow-soft hover:bg-sky-600 transition-colors"
          >
            Essai
          </a>
        </div>
      </div>
    </header>
  );
};
