import { HeartPulse, Bug, Stethoscope, Users, Baby } from "lucide-react";
import { themes } from "@/data/themes";
import ThemeHero from "./themeHero";
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
    <>
      <ThemeHero />
      <section className="py-12 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        
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
    </>
  );
}