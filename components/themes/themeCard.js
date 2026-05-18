export default function ThemeCard({ name, description, icon, color }) {
  // Détermination de la classe de bordure de manière sécurisée
  const cardBorderClass = color === "secondary" ? "border-secondary" : "border-primary";

  return (
    <div className={`theme-card ${cardBorderClass}`}>
      {/* Conteneur d'icône dynamique */}
      {icon && (
        <div className="theme-icon-wrapper">
          <span className="material-symbols-outlined text-4xl">
            {icon}
          </span>
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
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </div>
  );
}