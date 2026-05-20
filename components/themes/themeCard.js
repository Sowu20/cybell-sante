import { ArrowBigRight } from "lucide-react";

export default function ThemeCard({ name, description, color, icon: Icon }) {
  // Détermination de la classe de bordure de manière sécurisée
  const cardBorderClass = color === "secondary" ? "border-secondary" : "border-primary";

  return (
    <div className={`theme-card ${cardBorderClass}`}>
      {/* Conteneur d'icône dynamique */}
      {Icon && (
        <div className="theme-icon-wrapper">
          <Icon className="w-8 h-8" />
        </div>
      )}

      <h3 className="text-xl font-bold text-(--on-surface) mb-3">
        {name}
      </h3>

      <p className="text-(--on-surface-variant) text-sm leading-relaxed mb-6">
        {description}
      </p>

      <button className="theme-btn-more">
        En savoir plus 
        <ArrowBigRight />
      </button>
    </div>
  );
}