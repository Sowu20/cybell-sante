import Image from "next/image"; 
import { galleryItems } from "@/data/gallery";

export default function GalleryContent() {
  return (
    <section className="bg-(--surface-bright) py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* En-tête de la page */}
        <div className="text-center mb-16">
          <span className="pill-badge">En Images</span>
          <h1 className="text-4xl md:text-5xl font-bold text-(--primary) mb-4">
            Notre Galerie
          </h1>
          <div className="w-12 h-1 bg-(--secondary) mx-auto rounded-full mb-4"></div>
          <p className="text-(--on-surface-variant) max-w-2xl mx-auto font-medium">
            Retour en images sur nos interventions, nos ateliers ludiques et nos actions de sensibilisation auprès de la jeunesse.
          </p>
        </div>

        {/* Grille Bento */}
        <div className="gallery-bento-grid">
          {galleryItems.map((item) => {
            let sizeClass = "";
            if (item.size === "large") sizeClass = "gallery-item-large";
            if (item.size === "wide") sizeClass = "gallery-item-wide";

            return (
              <div 
                key={item.id} 
                className={`gallery-card-wrapper min-h-60 ${sizeClass}`}
              >
                {/* 2. Utilisation du composant Image optimisé avec "fill" */}
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="gallery-card-image"
                  priority={item.id <= 2} 
                />

                {/* Overlay apparaissant au survol */}
                <div className="gallery-card-overlay">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
                      {item.category}
                    </span>
                    <h3 className="text-white text-base md:text-lg font-bold m-0 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}