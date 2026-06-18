"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  motion, 
  AnimatePresence, 
  useInView,
  useScroll,
  useTransform
} from "framer-motion";
import { 
  ArrowRight, 
  Award, 
  Building2, 
  ChevronRight, 
  Cpu, 
  ExternalLink, 
  Globe2, 
  Mail, 
  MapPin, 
  Phone, 
  Quote, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Users2, 
  Wrench,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Check,
  X
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

// Interfaces
interface Subsidiary {
  id: string;
  name: string;
  website?: string;
  tagline: string;
  description: string;
  icon: any;
  image: string;
  services: string[];
  angle: number; // Position en degrés pour le diagramme circulaire
}

export default function HomeHolding() {
  const [activeSub, setActiveSub] = useState<string>("inter-it");
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const [selectedFiliale, setSelectedFiliale] = useState<Subsidiary | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Ref et variables pour le scroll parallaxe de l'image de fond du Hero
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);

  const subsidiaries: Subsidiary[] = [
    {
      id: "inter-it",
      name: "Inter-IT Services",
      website: "https://inter-itservices.ca",
      tagline: "Intelligence Numérique & Design Augmenté",
      description: "Notre filiale technologique orchestre l'innovation digitale, l'implémentation d'architectures logicielles IA-Native et les stratégies de communication visuelle à fort impact.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      services: [
        "Design & Créativité Augmentée",
        "Digital & Web \"AI-Native\"",
        "IA & Communication",
        "Marketing Numérique",
        "Storytelling & Création",
        "Formations"
      ],
      angle: 0 // Est (0 rad)
    },
    {
      id: "inter-rh",
      name: "Inter-RH",
      website: "https://www.inter-rh.com",
      tagline: "Capital Humain & Recrutement International",
      description: "Cabinet de conseil stratégique en gestion des talents. Inter-RH gère l'acquisition de compétences clés, la transformation managériale et le recrutement transfrontalier.",
      icon: Users2,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
      services: [
        "Recrutement stratégique national & international",
        "Gestion externalisée des RH (RPO)",
        "Coaching exécutif & Leadership",
        "Conseil en transformation organisationnelle",
        "Audit social & Rémunération"
      ],
      angle: 90 // Sud (PI/2 rad)
    },
    {
      id: "inter-immo",
      name: "Inter-Immo",
      tagline: "Asset Management & Conseil Immobilier",
      description: "Spécialisée dans l'ingénierie et la gestion d'actifs immobiliers, Inter-Immo sécurise, valorise et administre vos investissements fonciers et patrimoniaux.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      services: [
        "Gestion locative d'actifs d'entreprise & résidentiels",
        "Administration de copropriétés complexes",
        "Transactions, cessions et acquisitions",
        "Conseil stratégique en investissement et fiscalité"
      ],
      angle: 180 // Ouest (PI rad)
    },
    {
      id: "electromeca",
      name: "Electromeca+",
      tagline: "Ingénierie Avancée & Maintenance Industrielle",
      description: "Garant des performances techniques et industrielles de nos clients. Electromeca+ déploie des solutions de conception, maintenance préventive et location d'engins lourds.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      services: [
        "Maintenance mécanique industrielle haute précision",
        "Automatismes et réseaux électrotechniques",
        "Ingénierie de conception et études techniques",
        "Location et gestion logistique d'engins de chantier"
      ],
      angle: 270 // Nord (3PI/2 rad)
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setFormSubmitted(false);
      alert("Votre demande a été transmise aux services de la holding ISS avec succès.");
    }, 1200);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const currentSub = subsidiaries.find(s => s.id === activeSub) || subsidiaries[0];

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-neutral-dark font-sans">
      {/* Header Premium épuré */}
      <Header />

      <main className="flex-grow">
        {/* ======================================== */}
        {/* 1. HERO SECTION (Holding Institutionnelle)*/}
        {/* ======================================== */}
        <section
          id="accueil"
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20"
        >
          {/* Image d'arrière-plan premium avec effet parallaxe axé IT */}
          <motion.div 
            style={{ y: yBg, scale: scaleBg }}
            className="absolute inset-0 z-0 h-[125%] -top-[12%] w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600"
              alt="Experts multiculturels de la holding ISS et de ses filiales collaborant autour de technologies numériques"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Overlay sombre neutre (de 20% à 40%) pour améliorer la lisibilité du texte (sans filtre bleu) */}
          <div className="absolute inset-0 bg-black/35 z-10" />

          {/* Grille fine de fond pour le style éditorial */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-20 text-white w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center -mt-6 lg:-mt-12">
            
            {/* Colonne Gauche : Messages */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Tag institutionnel */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-secondary uppercase mb-8"
              >
                <Layers size={12} />
                Holding Multidisciplinaire
              </motion.div>

              {/* Titre Institutionnel Audacieux */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight mb-8 leading-[1.15]"
              >
                Bâtir l'avenir à travers la synergie <span className="text-secondary">d'expertises sectorielles</span>.
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm sm:text-base lg:text-lg text-white/75 max-w-xl leading-relaxed mb-12 font-light"
              >
                Inter-Solutions Services (ISS) pilote un écosystème de filiales spécialisées et interconnectées afin de créer de la valeur à long terme dans l'IT, l'ingénierie, l'immobilier et l'humain.
              </motion.p>

              {/* Boutons d'actions épurés */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
              >
                <Link
                  href="#ecosysteme"
                  className="w-full sm:w-auto px-8 py-4 bg-secondary text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-secondary-light transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Explorer notre écosystème
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-[#1B224F] transition-all duration-300 flex items-center justify-center"
                >
                  Prendre contact
                </Link>
              </motion.div>
            </div>

            {/* Colonne Droite : Art Conceptuel Vectoriel */}
            <div className="lg:col-span-4 hidden lg:flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-80 h-80 rounded-full border border-white/5 flex items-center justify-center relative"
              >
                {/* Cercle interne avec animation de respiration */}
                <div className="absolute inset-8 rounded-full border border-white/10 animate-pulse" />
                <div className="absolute inset-16 rounded-full border border-white/15" />
                
                {/* Centre (Logo ISS) */}
                <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center relative z-10 shadow-2xl">
                  <div className="relative w-16 h-12">
                    <Image
                      src="/logo.png"
                      alt="ISS"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Orbites autour */}
                <div className="absolute w-full h-full rounded-full border border-dashed border-white/10 animate-spin-orbit" />
              </motion.div>
            </div>

          </div>

          {/* Indicateur de scroll minimaliste */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2.5 z-20 opacity-70 text-white/70">
            <span className="text-[9px] font-bold tracking-widest uppercase">Faire défiler</span>
            <div className="w-0.5 h-6 bg-white/20 relative overflow-hidden">
              <motion.div
                animate={{ y: [-24, 24] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-secondary"
              />
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 2. GROUP STATISTICS SECTION               */}
        {/* ======================================== */}
        <section className="bg-[#0b0e27] text-white py-20 border-y border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {[
                { number: 4, suffix: "", label: "Filiales spécialisées" },
                { number: 150, suffix: "+", label: "Collaborateurs experts" },
                { number: 10, suffix: "+", label: "Secteurs d'activité" },
                { number: 100, suffix: "%", label: "Engagement d'excellence" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center lg:items-start lg:text-left border-l border-white/5 pl-6 lg:first:border-none">
                  <span className="text-4xl sm:text-5xl font-extrabold text-secondary mb-3">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </span>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 3. INTERACTIVE ECOSYSTEM SECTION        */}
        {/* ======================================== */}
        <section id="ecosysteme" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            
            {/* Header de section */}
            <div className="flex flex-col items-start max-w-3xl mb-24">
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Architecture de Groupe
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight mb-6 leading-tight">
                L'écosystème connecté d'ISS
              </h2>
              <p className="text-neutral-dark/70 text-sm sm:text-base leading-relaxed">
                Notre holding structure des synergies transversales. Sélectionnez une filiale sur le diagramme interactif pour comprendre ses connexions et sa valeur ajoutée au sein du groupe.
              </p>
            </div>

            {/* Zone interactive Écosystème */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Diagramme circulaire (Col 7 sur desktop, visible uniquement sur lg+) */}
              <div className="lg:col-span-7 hidden lg:flex justify-center items-center h-[500px] relative">
                
                {/* SVG de connexions */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {subsidiaries.map((sub) => {
                    const angleRad = (sub.angle * Math.PI) / 180;
                    const r = 180; // Rayon de l'orbite
                    // Centre du SVG
                    const cx = 250;
                    const cy = 250;
                    // Coordonnées de la filiale
                    const x2 = cx + r * Math.cos(angleRad);
                    const y2 = cy + r * Math.sin(angleRad);

                    const isActive = activeSub === sub.id;
                    const isHovered = hoveredSub === sub.id;

                    return (
                      <g key={sub.id}>
                        {/* Ligne de base */}
                        <line
                          x1={cx}
                          y1={cy}
                          x2={x2}
                          y2={y2}
                          stroke={isActive || isHovered ? "rgba(242, 140, 40, 0.4)" : "rgba(27, 34, 79, 0.08)"}
                          strokeWidth={isActive || isHovered ? 2.5 : 1}
                          className="transition-all duration-300"
                        />
                        {/* Flux lumineux en pointillé pour la filiale active */}
                        {(isActive || isHovered) && (
                          <line
                            x1={cx}
                            y1={cy}
                            x2={x2}
                            y2={y2}
                            stroke="#F28C28"
                            strokeWidth={3}
                            className="animate-pulse-flow"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Orbite de pointillés décorative */}
                <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-primary/5 pointer-events-none" />

                {/* Nœud Central (ISS) */}
                <div className="w-28 h-28 rounded-full bg-primary border-4 border-white shadow-2xl flex items-center justify-center z-10">
                  <div className="relative w-16 h-12">
                    <Image
                      src="/logo.png"
                      alt="ISS Central"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Nœuds périphériques des filiales */}
                {subsidiaries.map((sub) => {
                  const angleRad = (sub.angle * Math.PI) / 180;
                  const r = 180;
                  const x = r * Math.cos(angleRad);
                  const y = r * Math.sin(angleRad);

                  const isActive = activeSub === sub.id;
                  const isHovered = hoveredSub === sub.id;

                  return (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSub(sub.id)}
                      onMouseEnter={() => setHoveredSub(sub.id)}
                      onMouseLeave={() => setHoveredSub(null)}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        zIndex: 20
                      }}
                      className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer ${
                        isActive
                          ? "bg-secondary text-white scale-110 shadow-secondary/20"
                          : isHovered
                          ? "bg-primary-light text-white scale-105"
                          : "bg-neutral-light text-primary hover:bg-white hover:shadow-xl"
                      }`}
                    >
                      <sub.icon size={22} />
                    </button>
                  );
                })}
              </div>

              {/* Fiche de détail interactive (Col 5) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                
                {/* Version Mobile du sélecteur (visible uniquement sur md et moins) */}
                <div className="lg:hidden flex flex-wrap gap-2.5 mb-10">
                  {subsidiaries.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSub(s.id)}
                      className={`px-4 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                        activeSub === s.id
                          ? "bg-secondary text-white shadow-md shadow-secondary/15"
                          : "bg-neutral-light text-primary/70 hover:bg-neutral-light/80"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>

                {/* Contenu de la filiale active */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSub}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-start bg-neutral-light p-8 lg:p-10 border border-black/5"
                  >
                    <span className="text-[9px] font-bold tracking-widest uppercase text-secondary mb-2 block">
                      Filiale du Groupe ISS
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-4 leading-tight">
                      {currentSub.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary-light/95 italic mb-6 leading-relaxed">
                      "{currentSub.tagline}"
                    </p>
                    <p className="text-neutral-dark/80 text-xs sm:text-sm leading-relaxed mb-8">
                      {currentSub.description}
                    </p>

                    <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-4">
                      Secteurs clés & expertises
                    </h4>
                    
                    {/* Grille de services */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                      {currentSub.services.map((srv, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-dark/70">
                          <Check size={14} className="text-secondary mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{srv}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Actions de redirection */}
                    {currentSub.website ? (
                      <Link
                        href={currentSub.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 bg-primary text-white hover:bg-secondary text-[10px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        Visiter le portail filiale
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    ) : (
                      <span className="text-[10px] font-bold tracking-widest uppercase text-primary/40">
                        Intégration Web en cours
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>
        </section>

        {/* ======================================== */}
        {/* 4. PREMIUM SUBSIDIARY SHOWCASE CARDS     */}
        {/* ======================================== */}
        <section id="filiales" className="py-32 bg-[#F8F9FB] border-t border-black/5">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 gap-6">
              <div className="flex flex-col items-start max-w-2xl">
                <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                  <span className="w-6 h-[1.5px] bg-secondary" />
                  Showcase Sectoriel
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                  Nos entités d'excellence
                </h2>
              </div>
              <p className="text-neutral-dark/60 text-sm sm:text-base max-w-sm lg:text-right">
                Chaque entité opère avec une autonomie stratégique tout en bénéficiant de l'assise financière du groupe.
              </p>
            </div>

            {/* Grille Asymétrique haut de gamme */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              {subsidiaries.map((sub, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={sub.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-black/5 shadow-md flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-all duration-500 w-full min-h-[550px]"
                  >
                    {/* Top image decorative */}
                    <div className="relative h-64 w-full overflow-hidden shrink-0">
                      <Image
                        src={sub.image}
                        alt={sub.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-10" />
                    </div>

                    {/* Icône flottante chevauchant l'image et le texte */}
                    <div className="absolute top-[228px] left-8 w-14 h-14 rounded-full bg-[#1B224F] text-white flex items-center justify-center shadow-lg border-2 border-white z-20">
                      <sub.icon size={22} />
                    </div>

                    {/* Contenu descriptif */}
                    <div className="p-8 lg:p-10 flex-grow flex flex-col justify-between items-start">
                      <div className="w-full">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-3">
                          {sub.name}
                        </h3>
                        <p className="text-xs text-neutral-dark/80 leading-relaxed mb-6">
                          {sub.description}
                        </p>

                        <div className="w-full border-t border-black/5 pt-6 mb-6">
                          <h4 className="text-[9px] font-bold tracking-widest uppercase text-secondary mb-3">
                            Services phares
                          </h4>
                          <ul className="space-y-2.5">
                            {sub.services.slice(0, 3).map((srv, sIdx) => (
                              <li key={sIdx} className="flex items-center gap-2 text-xs text-neutral-dark/70">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                <span>{srv}</span>
                              </li>
                            ))}
                            {sub.services.length > 3 && (
                              <li className="text-[10px] text-primary/50 font-bold tracking-widest uppercase mt-3">
                                + {sub.services.length - 3} autres expertises
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="w-full flex items-center justify-between mt-4">
                        <button
                          onClick={() => setSelectedFiliale(sub)}
                          className="text-[10px] font-bold tracking-widest uppercase text-primary hover:text-secondary transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                        >
                          Découvrir
                          <ArrowRight size={12} />
                        </button>
                        <button
                          onClick={() => setSelectedFiliale(sub)}
                          className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
                          aria-label="Détails de la filiale"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ======================================== */}
        {/* 5. CORPORATE TIMELINE SECTION            */}
        {/* ======================================== */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Notre Trajectoire
                <span className="w-6 h-[1.5px] bg-secondary" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
                L'évolution d'ISS
              </h2>
            </div>

            {/* Timeline Moderne de Holding */}
            <div className="relative">
              {/* Ligne verticale de la timeline */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-primary/5 -translate-x-1/2 hidden lg:block" />

              <div className="space-y-12 lg:space-y-0">
                {[
                  {
                    year: "Phase 1 : Analyse & Concept",
                    title: "Diagnostic Stratégique",
                    desc: "Analyse fine des demandes sectorielles et modélisation de l'architecture initiale du groupe."
                  },
                  {
                    year: "Phase 2 : Structuration",
                    title: "Planification Opérationnelle",
                    desc: "Consolidation juridique et définition des axes de synergie technique entre nos filiales."
                  },
                  {
                    year: "Phase 3 : Déploiement",
                    title: "Exécution & Synergie",
                    desc: "Lancement des opérations coordonnées et accélération des filiales sur leurs marchés."
                  },
                  {
                    year: "Phase 4 : Optimisation",
                    title: "Évolution & R&D",
                    desc: "Suivi des indices de performance, investissement technologique (IA) et expansion continue."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative flex flex-col lg:flex-row items-center justify-between lg:even:flex-row-reverse">
                    
                    {/* Bloc contenu */}
                    <div className="w-full lg:w-[44%] bg-neutral-light border border-black/5 p-8 shadow-sm relative z-10 hover:shadow-md transition-all duration-300">
                      <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-dark/70 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Point d'ancrage central */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-md z-20 hidden lg:block" />

                    {/* Espacement fictif pour préserver l'alignement */}
                    <div className="w-[44%] hidden lg:block" />

                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ======================================== */}
        {/* 6. WORLD MAP SECTION                      */}
        {/* ======================================== */}
        <section className="py-32 bg-primary text-white relative overflow-hidden">
          {/* Grille cartographique subtile */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Colonne Gauche : Argument géographique */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Présence & Vision
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Une envergure internationale
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Basé au Cameroun (Yaoundé), Inter-Solutions Services coordonne des flux d'expertises nationaux et internationaux. Nos filiales connectent l'Afrique et l'Amérique du Nord (Canada) pour concevoir et déployer des solutions de niveau mondial.
              </p>

              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="border-l-2 border-secondary pl-4">
                  <span className="text-2xl font-bold block text-white">Afrique</span>
                  <span className="text-[10px] text-white/50 tracking-wider uppercase font-bold">Siège & Opérations</span>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <span className="text-2xl font-bold block text-white">Canada</span>
                  <span className="text-[10px] text-white/50 tracking-wider uppercase font-bold">Hub Technologique (Inter-IT)</span>
                </div>
              </div>
            </div>

            {/* Colonne Droite : Carte SVG vectorielle épurée style Accenture */}
            <div className="lg:col-span-7 flex justify-center items-center relative">
              <div className="w-full max-w-xl aspect-[1.8/1] opacity-75 relative">
                {/* Carte du Monde SVG Stylisée minimaliste en lignes */}
                <svg viewBox="0 0 1000 500" className="w-full h-full fill-none stroke-white/10" strokeWidth="1">
                  {/* Tracés simplifiés de continents */}
                  {/* Amériques */}
                  <path d="M 150 100 Q 180 150 200 250 T 250 400 T 220 480" />
                  <path d="M 100 120 L 150 180 T 120 280 T 80 400" />
                  {/* Afrique / Europe */}
                  <path d="M 450 120 Q 520 100 580 150 T 550 280 T 600 420 T 620 480" />
                  <path d="M 420 180 Q 480 220 460 300 T 520 420" />
                  {/* Asie / Océanie */}
                  <path d="M 600 120 Q 750 80 880 150 T 820 350 T 860 480" />
                  <path d="M 850 380 Q 900 420 920 480" />

                  {/* Lignes de flux interactives entre Cameroun et Canada */}
                  {/* Hub Yaoundé Cameroun (coordonnées approx cx=500, cy=280) */}
                  {/* Hub Canada Montréal (coordonnées approx cx=220, cy=140) */}
                  <path
                    d="M 500 280 Q 360 180 220 140"
                    stroke="#F28C28"
                    strokeWidth="2.5"
                    strokeDasharray="6 3"
                    className="animate-pulse-flow"
                  />

                  {/* Hub Cameroun */}
                  <circle cx="500" cy="280" r="6" fill="#F28C28" />
                  <circle cx="500" cy="280" r="14" stroke="#F28C28" strokeWidth="1" className="animate-ping" />

                  {/* Hub Canada */}
                  <circle cx="220" cy="140" r="5" fill="#F28C28" />
                  <circle cx="220" cy="140" r="10" stroke="#F28C28" strokeWidth="1" className="opacity-75" />
                </svg>
              </div>
            </div>

          </div>
        </section>

        {/* ======================================== */}
        {/* 7. CEO / LEADERSHIP MESSAGE SECTION       */}
        {/* ======================================== */}
        <section id="leadership" className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Photo de l'Équipe de Direction / Éditorial (Col 5) */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-[450px] sm:h-[550px] w-full overflow-hidden shadow-2xl border border-black/5 bg-[#0b0e27]">
                  <Image
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=800"
                    alt="Équipe de direction d'Inter-Solutions Services"
                    fill
                    className="object-cover hover:scale-[1.02] transition-all duration-700"
                  />
                </div>
                {/* Cadre orange décoratif */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 -z-10" />
              </div>

              {/* Message de leadership (Col 7) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                  <span className="w-6 h-[1.5px] bg-secondary" />
                  Vision de Direction
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight mb-8 leading-tight">
                  Garantir l'excellence, orchestrer le progrès
                </h2>

                <div className="relative mb-8">
                  <Quote size={48} className="text-secondary/10 absolute -top-6 -left-6 -z-10" />
                  <p className="text-primary/95 text-base sm:text-lg italic leading-relaxed font-light">
                    "Notre vocation chez ISS dépasse le cadre classique de la gestion de filiales. Nous pensons chaque entité comme un pôle de compétences d'élite, interconnecté à notre écosystème global. C'est de cette concertation transversale que naissent les solutions les plus innovantes et durables pour nos partenaires."
                  </p>
                </div>

                <div className="space-y-1 mb-8">
                  <h4 className="font-bold text-primary text-base">Le Comité de Direction</h4>
                  <p className="text-xs uppercase tracking-widest text-primary/50 font-bold">Inter-Solutions Services</p>
                </div>

                <div className="flex items-center gap-4 border-t border-black/5 pt-8 w-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wide text-primary">Gouvernance Structurée</h5>
                    <p className="text-xs text-neutral-dark/60 mt-0.5">Audit et respect strict des normes de conformité internationales.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 8. CONTACT SECTION                       */}
        {/* ======================================== */}
        <section id="contact" className="py-32 bg-neutral-light border-t border-black/5 relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Infos Gauche (Col 5) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                    <span className="w-6 h-[1.5px] bg-secondary" />
                    Hub Institutionnel
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight mb-6 leading-tight">
                    Nous joindre
                  </h2>
                  <p className="text-neutral-dark/70 text-xs sm:text-sm leading-relaxed mb-10">
                    Pour toute demande d'investissement, de partenariat global ou d'orientation vers nos filiales spécialisées, contactez nos conseillers de la holding.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-sm bg-white border border-black/5 flex items-center justify-center text-secondary shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <h4 className="text-[9px] font-bold tracking-widest uppercase text-primary/50 mb-1">E-mail institutionnel</h4>
                        <Link href="mailto:contact@inter-solutionsservices.com" className="text-sm font-semibold hover:text-secondary transition-colors duration-200">
                          contact@inter-solutionsservices.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-sm bg-white border border-black/5 flex items-center justify-center text-secondary shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <h4 className="text-[9px] font-bold tracking-widest uppercase text-primary/50 mb-1">Téléphones</h4>
                        <span className="text-sm font-semibold">+237 695296446 / 679033398</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-sm bg-white border border-black/5 flex items-center justify-center text-secondary shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h4 className="text-[9px] font-bold tracking-widest uppercase text-primary/50 mb-1">Siège social</h4>
                        <span className="text-sm font-semibold">Tradex Tsinga Yaoundé Cameroun</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Placeholder */}
                <div className="h-44 rounded-sm overflow-hidden border border-black/5 relative mt-12 group hidden lg:block">
                  <div className="absolute inset-0 bg-neutral-800 flex flex-col items-center justify-center p-4 text-center">
                    <MapPin size={32} className="text-secondary mb-2.5 animate-bounce" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-white">Localisation</h4>
                    <p className="text-[10px] text-white/50 mt-1">Tradex Tsinga, Yaoundé, Cameroun</p>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Formulaire de Contact Droite (Col 7) */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-black/5 p-8 sm:p-10 shadow-sm">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                          className="bg-neutral-light border border-black/5 rounded-none px-4 py-3.5 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs"
                          placeholder="Jean Martin"
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
                          className="bg-neutral-light border border-black/5 rounded-none px-4 py-3.5 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs"
                          placeholder="Entreprise Inc."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                          E-mail professionnel
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                          className="bg-neutral-light border border-black/5 rounded-none px-4 py-3.5 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs"
                          placeholder="jean.martin@entreprise.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="bg-neutral-light border border-black/5 rounded-none px-4 py-3.5 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs"
                          placeholder="Ex: +237 695 296 446"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                        Sujet de la demande
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleFormChange}
                        required
                        className="bg-neutral-light border border-black/5 rounded-none px-4 py-3.5 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs"
                        placeholder="Ex: Demande de partenariat global"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                        Message détaillé
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        rows={5}
                        className="bg-neutral-light border border-black/5 rounded-none px-4 py-3.5 text-neutral-dark placeholder-neutral-dark/30 focus:outline-none focus:border-secondary transition-colors text-xs resize-none"
                        placeholder="Détaillez votre demande ici..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitted}
                      className="w-full py-4 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-none hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                    >
                      {formSubmitted ? (
                        <>Transmission...</>
                      ) : (
                        <>
                          Transmettre à la holding
                          <Send size={12} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modale interactive pour le détail des filiales */}
        <AnimatePresence>
          {selectedFiliale && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFiliale(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-none border border-black/10 overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
              >
                {/* Header Image */}
                <div className="relative h-64 w-full flex-shrink-0">
                  <Image
                    src={selectedFiliale.image}
                    alt={selectedFiliale.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                  
                  {/* Icône et Titre */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl border border-white/10">
                        <selectedFiliale.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-white tracking-wide">
                          {selectedFiliale.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Bouton de fermeture */}
                  <button
                    onClick={() => setSelectedFiliale(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 hover:scale-105 transition-all duration-200 cursor-pointer"
                    aria-label="Fermer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modale Content */}
                <div className="p-8 overflow-y-auto flex-grow">
                  <p className="text-neutral-dark/80 text-sm leading-relaxed mb-6 font-medium">
                    {selectedFiliale.description}
                  </p>

                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-secondary mb-4">
                    Services & Solutions proposées
                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {selectedFiliale.services.map((srv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-dark/70">
                        <Check size={14} className="text-secondary mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{srv}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-black/5 pt-6">
                    {selectedFiliale.website ? (
                      <Link
                        href={selectedFiliale.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 bg-secondary text-white font-bold text-xs uppercase tracking-wider rounded-none hover:bg-secondary-light transition-all duration-200 flex items-center justify-center gap-2 group"
                      >
                        Visiter le site officiel
                        <ExternalLink size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    ) : (
                      <div className="text-xs text-neutral-dark/40 font-medium">Site web en cours de déploiement</div>
                    )}
                    <button
                      onClick={() => {
                        setSelectedFiliale(null);
                        const contactSec = document.getElementById("contact");
                        if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-none hover:bg-primary-light transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Demander un devis
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Institutionnel étendu */}
      <Footer />
    </div>
  );
}
