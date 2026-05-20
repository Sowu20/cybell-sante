import Image from "next/image";

export default function PartnersHero() {
  return (
    <section className="relative w-full h-80 md:h-100 flex items-center justify-center overflow-hidden">
      {/* 1. L'image de fond */}
      <Image
        src="/images/partner.png"
        alt="Nos Partenaires Background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-(--primary)/85 mix-blend-multiply" />

     <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Nos Partenaires
        </h1>
        
        {/* Description courte */}
        <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
          Ensemble, nous construisons un avenir plus sain pour la jeunesse à travers 
          léducation et le jeu. Découvrez les institutions et organisations qui 
          soutiennent notre mission.
        </p>
      </div>
    </section>
  );
}