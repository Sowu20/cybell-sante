import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-(--surface-container)">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">
        <h1 className="text-xl font-bold text-(--primary) tracking-wide">
          <Link href="/">CYBELL-SANTÉ</Link>
        </h1>

        <ul className="hidden md:flex gap-6 text-sm font-semibold text-(--on-surface-variant) list-none pl-0">
          <li><Link className="hover:text-(--primary) transition" href="/">Accueil</Link></li>
          <li><Link className="hover:text-(--primary) transition" href="/about">À Propos</Link></li>
          <li><Link className="hover:text-(--primary) transition" href="/activities">Activités</Link></li>
          <li><Link className="hover:text-(--primary) transition" href="/themes">Thèmes</Link></li>
          <li><Link className="hover:text-(--primary) transition" href="/partners">Nos Partenaires</Link></li>
          <li><Link className="hover:text-(--primary) transition" href="/gallery">Galerie</Link></li>
        </ul>

        <Link href="/contact" className="hidden md:inline-block btn btn-primary px-6 py-2.5 text-sm font-semibold shadow-sm text-center">
          Contact
        </Link>

        <div className="md:hidden text-(--primary) font-semibold cursor-pointer flex items-center gap-1">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </nav>
    </header>
  );
}