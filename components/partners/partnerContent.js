import Link from "next/link";
import { Scale, School, Radio, Handshake } from "lucide-react";
import { partners } from "@/data/partners";
import PartnersHero from "./partnerHero";
import PartnerCard from "./partnerCard";

const iconMap = {
  gavel: Scale,
  local_hospital: School,
  broadcast_on_home: Radio,
};

export default function PartnersContent() {
  return (
    <>
      <PartnersHero />
      <section className="bg-(--surface-bright) py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          
          {/* --- Grille des Partenaires Actuels --- */}
          <div className="partners-grid mb-24">
            {partners.map((partner, index) => (
              <PartnerCard
                key={index}
                name={partner.name}
                type={partner.type}
                description={partner.description}
                icon={iconMap[partner.icon]}
              />
            ))}
          </div>

          {/* --- Bloc d'appel à partenariat (Asymétrique Bento CTA Réorganisé) --- */}
          <div className="cta-box bg-white p-8 md:p-12 rounded-lg soft-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-(--surface-container-highest)">
            
            {/* Bloc Texte à gauche */}
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-(--secondary) text-xs font-bold mb-3 uppercase tracking-wider">
                Devenir Partenaire
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-(--primary) mb-4 leading-tight">
                Vous souhaitez soutenir notre initiative ou collaborer avec nous ?
              </h2>
              <p className="text-(--on-surface-variant) text-sm md:text-base m-0 font-medium leading-relaxed">
                Que vous soyez une ONG, une entreprise, une institution publique ou un établissement scolaire, votre engagement peut faire la différence dans la sensibilisation des communautés.
              </p>
            </div>

            {/* Bloc Bouton à droite (Sorti du div textuel pour respecter le Flexbox/Grid) */}
            <div className="shrink-0 w-full md:w-auto">
              <button className="btn btn-primary w-full md:w-auto px-8 py-4 font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                <Handshake className="w-5 h-5" />
                <Link href="/contact">Coopérer avec nous</Link>
              </button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}