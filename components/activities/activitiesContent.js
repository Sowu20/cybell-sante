import { Dice5, School, Radio, Tv, Gamepad2, Disc3 } from "lucide-react";
import { activities } from "@/data/activities";
import ActivitiesHero from "./activitiesHero";
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
    <>
      <ActivitiesHero />
      <section className="bg-(--surface-bright) py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          
         {/* Grille sémantique d'activités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                title={activity.title}
                description={activity.description}
                icon={iconMap[activity.icon]}
                colorClass={activity.textBtn}
                btnColorClass={activity.btnColorClass}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}