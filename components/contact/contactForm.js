"use client";

import { useState } from "react";

export default function ContactForm() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [objet, setObjet] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nom, prenom, adresse, telephone, email, objet }),
        });
        const data = await response.json();
        setMessage(data.message);
        console.log(data);
    };

    return (
        <main className="contact-container">
            <div className="contact-wrapper">
                
                {/* En-tête */}
                <div className="text-center mb-12">
                    <span className="badge-info">Contactez-nous</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-(--primary) mb-4">
                        Une question ? Envie de collaborer ?
                    </h1>
                    <div className="w-16 h-1 bg-(--secondary) mx-auto rounded-full mb-4"></div>
                    <p className="text-(--on-surface-variant) max-w-2xl mx-auto font-medium">
                        Remplissez le formulaire ci-dessous. Notre équipe dédiée à l’éducation et à la sensibilisation vous répondra dans les plus brefs délais.
                    </p>
                </div>

                {/* Grille Principale */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* Infos pratiques à gauche */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="bg-white p-6 rounded-lg soft-shadow border-t-4 border-(--primary)">
                            <h2 className="text-xl font-bold text-(--on-surface) mb-4">Notre Mission</h2>
                            <p className="text-sm text-(--on-surface-variant) leading-relaxed">
                                CYBELL-SANTÉ transforme l’éducation à la santé à travers des supports interactifs et des interventions communautaires. N’hésitez pas à nous soumettre vos idées de projets ou demandes de partenariat !
                            </p>
                        </div>

                        <div className="bg-(--primary) text-white p-6 rounded-lg soft-shadow relative overflow-hidden">
                            <h2 className="text-xl font-bold mb-4 relative z-10">Restons connectés</h2>
                            <ul className="space-y-4 relative z-10 text-sm list-none pl-0">
                                <li className="flex items-center gap-3">
                                    <span className="opacity-80">📍</span>
                                    <span>Lomé, Togo</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="opacity-80">✉️</span>
                                    <span>contact@cybell-sante.org</span>
                                </li>
                            </ul>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                        </div>
                    </div>

                    {/* Formulaire à droite */}
                    <div className="md:col-span-7 card p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="form-group">
                                    <label className="form-label">Nom</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: Doe"
                                        className="form-input"
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Prénom</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: John"
                                        className="form-input"
                                        value={prenom}
                                        onChange={(e) => setPrenom(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Votre adresse</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Quartier Adidogomé, Lomé"
                                    className="form-input"
                                    value={adresse}
                                    onChange={(e) => setAdresse(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="form-group">
                                    <label className="form-label">Téléphone</label>
                                    <input
                                        type="tel"
                                        placeholder="Ex: +228 90 00 00 00"
                                        className="form-input"
                                        value={telephone}
                                        onChange={(e) => setTelephone(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Ex: john@example.com"
                                        className="form-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Votre message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Comment pouvons-nous vous aider ?"
                                    className="form-input form-textarea"
                                    value={objet}
                                    onChange={(e) => setObjet(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            {message && (
                                <p className="text-green-600 font-medium">
                                    {message}
                                </p>
                            )}

                            <div className="pt-2">
                                <button type="submit" className="btn btn-primary w-full sm:w-auto px-8 py-3 font-semibold shadow-md text-sm cursor-pointer">
                                    Envoyer le message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}