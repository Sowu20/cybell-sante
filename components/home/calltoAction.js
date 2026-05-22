import Link from "next/link";
import { Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 px-6 md:px-16 bg-(--surface-bright)">
      <div className="max-w-5xl mx-auto bg-(--primary) text-white rounded-3xl shadow-xl p-10 md:p-16 text-center relative overflow-hidden group">
        
        {/* Cercles de décoration asymétriques utilisant l'opacité blanche de la charte */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight max-w-2xl font-headline">
            Rejoignez le programme CYBELL-SANTE
          </h2>

          <p className="text-base md:text-lg mb-8 max-w-xl opacity-90 font-normal leading-relaxed">
            Ensemble, sensibilisons la jeunesse et changeons des vies à travers l’éducation et la puissance du jeu.
          </p>

          <Link href="/contact" className="inline-flex items-center gap-3 bg-(--secondary) text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:opacity-95 active:scale-95 text-sm md:text-base decoration-none">
            <Mail className="w-5 h-5" />
            Contactez-Nous
          </Link>
        </div>
      </div>
    </section>
  );
}