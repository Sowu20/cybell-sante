import { HeartPulse, Bug, Stethoscope, Users, Baby } from "lucide-react";
import { themes } from "@/data/themes";
import ThemeCard from "./themeCard";

const iconMap = {
  vital_signs: HeartPulse,
  bug_report: Bug,
  accessibility_new: Stethoscope,
  family_restroom: Users,
  medical_services: Baby,
};

export default function ThemesContent() {
  return (
    <section className="py-12 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      
      <h2 className="text-3xl font-bold text-center text-(--primary) mb-10">
        Sujets thématiques
      </h2>

      {/* Grille utilisant notre classe CSS globale dédiée */}
      <div className="themes-grid">
        {themes.map((theme, index) => (
          <ThemeCard
            key={index}
            name={theme.name}
            description={theme.description}
            icon={iconMap[theme.icon]} // Transmis pour afficher le bon symbole (ex: "vital_signs", "bug_report")
            color={theme.color} // Attendu: "primary" ou "secondary"
          />
        ))}
      </div>
    </section>
  );
}