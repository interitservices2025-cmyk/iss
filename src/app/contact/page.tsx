"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Globe, 
  Clock
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "partenariat",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "partenariat",
        message: ""
      });
      setFormSubmitted(false);
      alert("Votre message a été transmis avec succès au secrétariat général du groupe ISS.");
    }, 1200);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-neutral-dark font-sans overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* ======================================== */}
        {/* HERO BANNER SECTION                      */}
        {/* ======================================== */}
        <section className="relative bg-neutral-950 py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1600"
              alt="ISS Contact Support"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-neutral-950/90 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-primary/20 z-10" />
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-4"
            >
              <span className="w-6 h-[1.5px] bg-secondary" />
              Hub de Communication
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
            >
              Prendre contact <span className="text-secondary">avec le groupe</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/75 text-xs sm:text-sm max-w-xl font-light leading-relaxed"
            >
              Une question sur nos opportunités d'investissement, un partenariat global, ou besoin de contacter l'une de nos filiales ? Nos équipes d'ISS se tiennent à votre disposition.
            </motion.p>
          </div>
        </section>

        {/* ======================================== */}
        {/* CONTENT SECTION                          */}
        {/* ======================================== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Coordonnées (Col 5) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 space-y-12"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px]">
                    <span className="w-6 h-[1.5px] bg-secondary" />
                    Coordonnées Officielles
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-tight">
                    Inter-Solutions Services
                  </h2>
                  <p className="text-neutral-dark/70 text-xs sm:text-sm leading-relaxed font-light">
                    Le secrétariat général coordonne l'ensemble des requêtes. Pour un service accéléré, veuillez utiliser le formulaire de contact en indiquant le sujet approprié.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Adresse */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded bg-neutral-light border border-black/5 flex items-center justify-center text-secondary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-1">Siège social (Cameroun)</h4>
                      <p className="text-xs sm:text-sm font-semibold text-primary">Tradex Tsinga, Yaoundé, Cameroun</p>
                      <p className="text-[11px] text-neutral-dark/50 mt-1 font-light">B.P. 1290 Yaoundé</p>
                    </div>
                  </div>

                  {/* Téléphones */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded bg-neutral-light border border-black/5 flex items-center justify-center text-secondary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-1">Lignes téléphoniques</h4>
                      <p className="text-xs sm:text-sm font-semibold text-primary">+237 695 296 446</p>
                      <p className="text-xs sm:text-sm font-semibold text-primary">+237 679 033 398</p>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded bg-neutral-light border border-black/5 flex items-center justify-center text-secondary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-1">E-mail de contact</h4>
                      <Link 
                        href="mailto:contact@inter-solutionsservices.com" 
                        className="text-xs sm:text-sm font-semibold text-primary hover:text-secondary transition-colors"
                      >
                        contact@inter-solutionsservices.com
                      </Link>
                    </div>
                  </div>

                  {/* Heures d'ouverture */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded bg-neutral-light border border-black/5 flex items-center justify-center text-secondary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-1">Horaires de réception</h4>
                      <p className="text-xs sm:text-sm font-semibold text-primary">Lundi - Vendredi : 08h00 - 17h00</p>
                      <p className="text-[11px] text-neutral-dark/50 mt-1 font-light">Fuseau horaire (GMT+1)</p>
                    </div>
                  </div>
                </div>

                {/* Localisation Frame */}
                <div className="h-56 w-full rounded border border-black/5 relative overflow-hidden group shadow-sm">
                  <div className="absolute inset-0 bg-neutral-800 flex flex-col items-center justify-center p-6 text-center">
                    <MapPin size={36} className="text-secondary mb-3 animate-bounce" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-white">Nous situer</h4>
                    <p className="text-[11px] text-white/50 mt-1">Tradex Tsinga, Yaoundé, Cameroun</p>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>

              {/* Right Column: Contact Form (Col 7) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="bg-neutral-light border border-black/5 p-8 sm:p-10 shadow-sm relative">
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-primary">Formulaire de demande</h3>
                    <p className="text-xs text-neutral-dark/50 mt-1 font-light font-sans">Remplissez les champs ci-dessous. Tous les champs marqués d'une étoile (*) sont requis.</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                          className="bg-white border border-black/5 rounded-none px-4 py-3 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs"
                          placeholder="Ex: Jean Martin"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                          Structure / Entreprise
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          className="bg-white border border-black/5 rounded-none px-4 py-3 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs"
                          placeholder="Ex: Entreprise S.A."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                          E-mail de contact *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                          className="bg-white border border-black/5 rounded-none px-4 py-3 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs"
                          placeholder="Ex: contact@entreprise.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                          Numéro de téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="bg-white border border-black/5 rounded-none px-4 py-3 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs"
                          placeholder="Ex: +237 695 296 446"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                        Sujet de votre demande *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleFormChange}
                        required
                        className="bg-white border border-black/5 rounded-none px-4 py-3 text-neutral-dark focus:outline-none focus:border-secondary transition-colors text-xs"
                      >
                        <option value="partenariat">Demande de Partenariat Stratégique / Investissement</option>
                        <option value="inter-it">Requête vers Inter-IT Services (Digital / IA)</option>
                        <option value="inter-rh">Requête vers Inter-RH (Recrutement / Talents)</option>
                        <option value="inter-immo">Requête vers Inter-Immo (Asset Management / Immobilier)</option>
                        <option value="electromeca">Requête vers Electromeca+ (Maintenance Industrielle)</option>
                        <option value="autre">Autre Demande Institutionnelle</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        rows={6}
                        className="bg-white border border-black/5 rounded-none px-4 py-3 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs resize-none"
                        placeholder="Veuillez décrire précisément votre demande..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitted}
                      className="w-full py-4 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-none hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {formSubmitted ? (
                        <>Transmission en cours...</>
                      ) : (
                        <>
                          Envoyer le message au groupe
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
