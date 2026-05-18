import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="bg-(--surface-bright)">

      {/* --- Section Hero --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="pill-badge-tertiary">
            Engagement & Éducation
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-(--primary) mb-6 leading-tight">
            À propos de CYBELL-SANTÉ
          </h1>

          <p className="text-base md:text-lg text-(--on-surface-variant) leading-relaxed font-medium">
            CYBELL-SANTÉ est une initiative éducative créée pour sensibiliser les
            jeunes et les communautés aux questions de santé à travers des outils
            ludiques, pédagogiques et numériques.
          </p>
        </div>

        <div className="flex-1 flex justify-center w-full max-w-md md:max-w-none">
          <div className="relative rounded-lg overflow-hidden soft-shadow">
            <Image
              src="/logo/logo.jpg"
              alt="À propos CYBELL-SANTÉ"
              width={550}
              height={400}
              className="w-full h-auto object-cover transform hover:scale-[1.01] transition duration-300"
              priority
            />
          </div>
        </div>
      </div>

      {/* --- Section Mission / Vision (Cartes à accents asymétriques) --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="about-split-grid">
          
          {/* Carte Mission (Accent Rouge Secondaire) */}
          <div className="card p-8 border-t-4 border-(--secondary) flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-(--secondary) text-3xl">target</span>
              <h2 className="text-2xl font-bold text-(--on-surface) m-0">
                Notre mission
              </h2>
            </div>
            <p className="text-(--on-surface-variant) text-sm md:text-base leading-relaxed m-0">
              Informer, éduquer et sensibiliser les populations grâce à des supports
              interactifs tels que les jeux éducatifs, les clubs scolaires et la
              plateforme numérique.
            </p>
          </div>

          {/* Carte Vision (Accent Bleu Primaire - Aligné sur le design system) */}
          <div className="card p-8 border-t-4 border-(--primary) flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-(--primary) text-3xl">visibility</span>
              <h2 className="text-2xl font-bold text-(--on-surface) m-0">
                Notre vision
              </h2>
            </div>
            <p className="text-(--on-surface-variant) text-sm md:text-base leading-relaxed m-0">
              Faire de l’éducation à la santé un outil accessible à tous grâce au
              numérique et aux activités communautaires.
            </p>
          </div>

        </div>
      </div>

      {/* --- Section Pourquoi nous choisir ? --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-(--primary) mb-3">
            Pourquoi nous choisir ?
          </h2>
          <div className="w-12 h-1 bg-(--secondary) mx-auto rounded-full"></div>
        </div>

        <div className="why-us-grid">
          
          {/* Valeur 1 : Pédagogie Active */}
          <div className="card p-6 flex flex-col items-start transition-all">
            <div className="value-icon-box">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h3 className="text-lg font-bold text-(--on-surface) mb-3">
              Pédagogie Active
            </h3>
            <p className="text-(--on-surface-variant) text-sm leading-relaxed m-0">
              Une approche centrée sur l’apprenant pour une mémorisation durable
              des gestes de santé essentiels.
            </p>
          </div>

          {/* Valeur 2 : Innovation Digitale */}
          <div className="card p-6 flex flex-col items-start transition-all">
            <div className="value-icon-box">
              <span className="material-symbols-outlined text-2xl">devices</span>
            </div>
            <h3 className="text-lg font-bold text-(--on-surface) mb-3">
              Innovation Digitale
            </h3>
            <p className="text-(--on-surface-variant) text-sm leading-relaxed m-0">
              L’usage du numérique pour briser les barrières géographiques et
              toucher les zones les plus reculées.
            </p>
          </div>

          {/* Valeur 3 : Impact Social */}
          <div className="card p-6 flex flex-col items-start transition-all">
            <div className="value-icon-box">
              <span className="material-symbols-outlined text-2xl">groups</span>
            </div>
            <h3 className="text-lg font-bold text-(--on-surface) mb-3">
              Impact Social
            </h3>
            <p className="text-(--on-surface-variant) text-sm leading-relaxed m-0">
              Des actions concrètes au cœur des communautés pour un changement de
              comportplement durable.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}