export default function CallToAction() {
  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-blue-700 text-white rounded-3xl shadow-xl p-10 md:p-16 text-center relative overflow-hidden">
        {/* décoration arrière-plan */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-red-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez le programme CYBELL-SANTE
          </h2>

          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ensemble, sensibilisons les jeunes à travers l’éducation et le jeu.
          </p>

          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-md hover:-translate-y-1 transition">
            Contactez-Nous
          </button>
        </div>
      </div>
    </section>
  );
}