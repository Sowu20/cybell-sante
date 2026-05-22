export default function ServiceCard({ title, description, icon: IconComponent, borderColor }) {
  let iconWrapperColor = "bg-(--primary)/10 text-(--primary)";
  if (borderColor === "border-secondary") iconWrapperColor = "bg-(--secondary)/10 text-(--secondary)";
  if (borderColor === "border-tertiary") iconWrapperColor = "bg-(--tertiary)/10 text-(--tertiary)";

  return (
    <div className={`theme-card ${borderColor} soft-shadow bg-white p-6 rounded-xl border-t-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center`}>
      {/* Wrapper d'icône circulaire animé */}
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110 ${iconWrapperColor}`}>
        {IconComponent && <IconComponent className="w-8 h-8" />}
      </div>
      
      <h3 className="text-xl font-bold text-(--on-surface) mb-3">
        {title}
      </h3>
      <p className="text-(--on-surface-variant) text-sm font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}