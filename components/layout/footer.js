import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            CYBELL-SANTE
          </h2>

          <p className="text-slate-300 leading-relaxed">
            L’éducation à la santé réinventée pour les générations numériques.
          </p>
        </div>

        {/* Liens */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>

          <ul className="space-y-2 text-slate-300">
            <li>
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                À Propos
              </Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-white">
                Activités
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <p className="text-slate-300">Email : contact@cybell-sante.org</p>

          <p className="text-slate-300">Suivez-nous sur nos réseaux sociaux</p>
        </div>
      </div>

      <div className="border-t border-slate-700 text-center py-6 text-slate-400 text-sm">
        © 2026 CYBELL-SANTÉ — Tous droits réservés
      </div>
    </footer>
  );
}