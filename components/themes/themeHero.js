export default function ThemeHero() {
  return (
    <section className="bg-(--primary) text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-center min-h-50">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Sujets Thématiques
        </h1>
        
        {/* Description courte sous le titre */}
        <p className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed font-normal">
          Explorez nos modules interactifs conçus pour sensibiliser les jeunes
          aux enjeux majeurs de la santé publique en Afrique. Sinstruire en jouant
          pour un avenir plus sain.
        </p>
      </div>
    </section>
  );
}