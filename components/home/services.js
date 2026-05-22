import { Dice5, School, Gamepad2 } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "./serviceCard";

const iconMap = {
  casino: Dice5,
  school: School,
  sports_esports: Gamepad2
};

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-(--primary) mb-4">
            Nos solutions
          </h2>
          <div className="w-12 h-1 bg-(--secondary) mx-auto rounded-full mb-4"></div>
          <p className="text-(--on-surface-variant) max-w-2xl mx-auto font-medium">
            Explorez nos thématiques de santé à travers une approche ludique, éducative et numérique.
          </p>
        </div>

        {/* Grille responsive calquée sur le fichier global.css */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={iconMap[service.icon]}
              borderColor={service.borderColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}