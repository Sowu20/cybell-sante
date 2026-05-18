export default function PartnerCard({ name, type, description, icon }) {
  return (
    <div className="card p-6 flex flex-col items-start justify-between border-t-4 border-(--primary) h-full transition-all">
      <div className="w-full">
        {/* En-tête de la carte */}
        <div className="flex justify-between items-start w-full mb-4">
          <div className="w-12 h-12 rounded-md bg-(--surface-container) flex items-center justify-center text-(--primary)">
            <span className="material-symbols-outlined text-2xl">{icon}</span>
          </div>
          <span className="partner-badge">{type}</span>
        </div>

        {/* Titre & Description */}
        <h3 className="text-xl font-bold text-(--on-surface) mb-2">
          {name}
        </h3>
        <p className="text-(--on-surface-variant) text-sm leading-relaxed m-0 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}