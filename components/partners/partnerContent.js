import Link from "next/link";
import { Landmark, HeartPulse, Building2, School, Users, Globe, Network, Languages, Handshake, Building, Mail } from "lucide-react";
import { partners, internationalPartners } from "@/data/partners";
import PartnersHero from "./partnerHero";
import PartnerCard from "./partnerCard";

const iconMap = {
  gavel: Landmark,
  local_hospital: HeartPulse,
  broadcast_on_home: Building2,
  school: School,
  group_work: Users,
  public: Globe,
  hub: Network,
  language: Languages,
  handshake: Handshake,
  apartment: Building
};

export default function PartnersContent() {
  // Filtrage dynamique des données par catégorie
  const institutional = partners.filter(p => p.category === "institutional");
  const educational = partners.filter(p => p.category === "educational");

  return (
    <>
      <PartnersHero />
      
      <section className="bg-(--surface-bright) py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          
          {/* 1. SECTION : INSTITUTIONNELS */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-8 bg-(--secondary) rounded-full"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-(--primary)">
                Partenaires Institutionnels
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {institutional.map((partner, index) => {
                const IconComponent = iconMap[partner.icon];
                return (
                  <div key={index} className="bg-white p-6 rounded-xl theme-card border-primary soft-shadow transition-transform hover:-translate-y-1">
                    <div className="h-24 flex items-center justify-center mb-4 text-(--primary)">
                      {IconComponent && <IconComponent className="w-12 h-12" />}
                    </div>
                    <h3 className="text-xl font-semibold text-(--foreground)] mb-2 text-center">
                      {partner.name}
                    </h3>
                    <p className="text-(--on-surface-variant) text-sm font-medium text-center leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. SECTION : ÉDUCATIFS */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-8 bg-(--tertiary) rounded-full"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-(--primary)">
                Partenaires Éducatifs
              </h2>
            </div>
            <div className="about-split-grid">
              {educational.map((partner, index) => {
                const IconComponent = iconMap[partner.icon];
                return (
                  <div key={index} className="flex flex-col md:flex-row bg-white rounded-xl soft-shadow overflow-hidden transition-transform hover:-translate-y-1 border-t-4 md:border-t-0 md:border-l-4 border-(--tertiary)">
                    <div className="w-full md:w-1/3 bg-[rgba(0,80,82,0.06)] flex items-center justify-center p-6 text-(--tertiary)">
                      {IconComponent && <IconComponent className="w-16 h-16" />}
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold text-(--foreground) mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-(--on-surface-variant) text-sm font-medium leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. SECTION : INTERNATIONAL & ONGS */}
          <div className="mb-24">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-8 bg-(--secondary) rounded-full"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-(--primary)">
                International & ONGs
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {internationalPartners.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div key={index} className="bg-(--surface-container) p-6 rounded-xl flex flex-col items-center text-center soft-shadow">
                    {IconComponent && <IconComponent className="w-10 h-10 text-(--secondary) mb-3" />}
                    <span className="text-sm font-semibold text-(--foreground)">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. SECTION : CTA BLEU FONCÉ */}
          <div className="relative overflow-hidden bg-(--primary) text-white p-8 md:p-12 rounded-xl soft-shadow flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10 text-center md:text-left max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Devenir partenaire</h2>
              <p className="text-(--primary-fixed) text-base md:text-lg opacity-90 font-normal leading-relaxed">
                Vous souhaitez rejoindre notre mouvement et contribuer à la santé des jeunes par le jeu ? Collaborons ensemble pour un impact durable.
              </p>
            </div>
            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link href="/contact" className="w-full md:w-auto bg-(--secondary) text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-3 hover:opacity-90">
                <Mail className="w-5 h-5" />
                Nous Rejoindre
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}