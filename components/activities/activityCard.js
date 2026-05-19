export default function ActivityCard({ title, description, icon: Icon }) {
  return (
    <div className="activity-page-card">
      {/* Conteneur d'icône sémantique */}
      <div className="activity-icon-container">
        <span className="material-symbols-outlined text-2xl font-light">
          {Icon && <Icon className="w-8 h-8" />}
        </span>
      </div>

      {/* Contenu textuel */}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg md:text-xl font-bold text-(--on-surface) m-0">
          {title}
        </h2>
        <p className="text-(--on-surface-variant) text-sm md:text-base leading-relaxed m-0 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}