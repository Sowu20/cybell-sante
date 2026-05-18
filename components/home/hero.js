import BannerImage from "./bannerImage";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <span className="pill-badge">
            S’instruire en jouant
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--primary) mb-6 leading-tight">
            CYBELL-SANTÉ
          </h1>

          <p className="text-base md:text-lg text-(--on-surface-variant) max-w-2xl mx-auto md:mx-0 mb-8 font-medium leading-relaxed">
            Une initiative éducative créée pour sensibiliser les jeunes et les communautés aux questions de santé à travers des outils ludiques, pédagogiques et numériques.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="btn btn-primary px-8 py-3 font-semibold shadow-md text-sm cursor-pointer">
              Découvrir
            </button>

            <button className="btn border-2 border-(--primary) text-(--primary) px-8 py-3 font-semibold hover:bg-[rgba(7,70,145,0.05)] text-sm cursor-pointer transition">
              Notre mission
            </button>
          </div>
        </div>

        <BannerImage />
      </div>
    </section>
  );
}