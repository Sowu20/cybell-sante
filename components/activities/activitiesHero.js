export default function ActivitiesHero() {
  return (
    <section className="bg-(--primary) text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-center min-h-50">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Nos Activités
        </h1>
        
        {/* Description courte sous le titre */}
        <p className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed font-normal">
          Découvrez comment nous transformons léducation sanitaire en une expérience ludique 
          et engageante pour la jeunesse à travers nos différentes plateformes et initiatives locales.
        </p>
      </div>
    </section>
  );
}