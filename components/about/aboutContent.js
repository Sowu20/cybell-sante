import { Target, View, School, Laptop, Group, UserCheck } from "lucide-react";
import Link from "next/link";
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
              src="/images/about.png"
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
              <Target />
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
              <View />
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
              <School />
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
              <Laptop />
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
              <Group />
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

      {/* --- Nouvelle Section : Collaboration (Version Finale Validée) --- */}
      <div className="bg-white border-t border-(--surface-container-high)">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-20">
          <div className="about-collaborate-grid">
            
            {/* Colonne Gauche : Visuel Illustratif (Mis à jour avec l'image) */}
            <div className="flex justify-center md:justify-start w-full">
              <div className="collaborate-image-container w-full max-w-112.5">
                <div className="relative rounded-lg overflow-hidden soft-shadow border border-(--surface-container-high) bg-white p-2">
                  <Image
                    src="/images/about2.png"
                    alt="Collaboration CYBELL-SANTÉ"
                    width={450}
                    height={320}
                    className="w-full h-auto rounded-md object-cover transform hover:scale-[1.03] transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Colonne Droite : Textes et CTA */}
            <div className="flex flex-col items-start">
              <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-(--secondary) text-xs font-bold mb-4 uppercase tracking-wider">
                Bâtir lavenir ensemble
              </span>
              <h2 className="text-3xl font-bold text-(--primary) mb-4">
                Collaborons pour une communauté plus forte
              </h2>
              <p className="text-(--on-surface-variant) text-base leading-relaxed mb-6 font-medium">
                La sensibilisation et la prévention sont laffaire de tous. En travaillant main dans la main avec les éducateurs, les professionnels de santé et les institutions, nous créons un écosystème pérenne et adapté aux besoins de la jeunesse.
              </p>
              <button className="btn btn-primary px-6 py-3.5 font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center gap-2">
                <UserCheck />
                <Link href="/contact">Rejoindre notre réseau</Link>
              </button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}