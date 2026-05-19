import { Dice5, School, Radio, Tv, Gamepad2, Disc3 } from "lucide-react";
import { activities } from "@/data/activities";
import ActivityCard from "./activityCard";

const iconMap = {
  casino: Dice5,
  school: School,
  radio: Radio,
  tv: Tv,
  sports_esports: Gamepad2,
  album: Disc3
}

export default function ActivitiesContent() {
  return (
    <section className="bg-(--surface-bright) py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* En-tête de la page */}
        <div className="text-center mb-16">
          <span className="pill-badge">
            Nos Supports
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-(--primary) mb-4">
            Nos activités
          </h1>
          <div className="w-12 h-1 bg-(--secondary) mx-auto rounded-full mb-4"></div>
          <p className="text-(--on-surface-variant) max-w-2xl mx-auto font-medium">
            Découvrez lensemble des canaux et outils pédagogiques que nous déployons sur le terrain pour toucher toutes les générations.
          </p>
        </div>

        {/* Grille sémantique d'activités */}
        <div className="activities-page-grid">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              icon={iconMap[activity.icon]}
            />
          ))}
        </div>

      </div>
    </section>
  );
}