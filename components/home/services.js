import ServiceCard from "./serviceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-(--primary) mb-4">
            Nos activités
          </h2>
          <div className="w-12 h-1 bg-(--secondary) mx-auto rounded-full mb-4"></div>
          <p className="text-(--on-surface-variant) max-w-2xl mx-auto font-medium">
            Explorez nos thématiques de santé à travers une approche ludique, éducative et numérique.
          </p>
        </div>

        {/* Grille utilisant notre classe CSS */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}