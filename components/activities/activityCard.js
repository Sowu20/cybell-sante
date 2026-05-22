import { ArrowRight } from "lucide-react";

export default function ActivityCard({ title, description, icon: IconComponent, colorClass, textBtn, btnColorClass }) {
  let iconBgContainer = "bg-(--primary)/10 text-(--primary)";
  if (colorClass === "border-secondary") iconBgContainer = "bg-(--secondary)/10 text-(--secondary)";
  if (colorClass === "border-tertiary") iconBgContainer = "bg-(--tertiary)/10 text-(--tertiary)";

  return (
    <div className={`bg-white rounded-xl p-6 soft-shadow border-t-4 ${colorClass} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between`}>
      <div>
        {/* Conteneur d'icône */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${iconBgContainer}`}>
          {IconComponent && <IconComponent className="w-6 h-6" />}
        </div>

        {/* Titre & Description */}
        <h3 className="text-xl font-bold text-(--on-surface) mb-3 font-headline-sm">
          {title}
        </h3>
        <p className="text-(--on-surface-variant) text-sm font-medium leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Bouton d'action interactif */}
      <button className={`group mt-auto w-fit font-bold flex items-center gap-1 text-sm bg-transparent border-none cursor-pointer transition-colors duration-200 ${btnColorClass} hover:opacity-80`}>
        {textBtn}
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
}