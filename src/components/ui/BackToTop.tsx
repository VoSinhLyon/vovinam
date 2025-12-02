import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Affiche le bouton après 200px
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="
        fixed bottom-5 right-5 z-50
        bg-blue-700 text-white
        p-3 rounded-full shadow-lg
        hover:bg-blue-800 transition-all
        flex items-center justify-center
      "
      aria-label="Remonter en haut"
    >
      <ArrowUp size={20} />
    </button>
  );
};
