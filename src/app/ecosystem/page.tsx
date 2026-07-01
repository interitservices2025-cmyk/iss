"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Users2, 
  Building2, 
  Wrench, 
  Check, 
  ArrowUpRight,
  Layers,
  Network,
  Utensils
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Subsidiary {
  id: string;
  name: string;
  website?: string;
  tagline: string;
  description: string;
  icon: any;
  image: string;
  services: string[];
  angle: number; // Degrees around orbit
}

export default function EcosystemPage() {
  const [activeSub, setActiveSub] = useState<string>("inter-it");
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);

  const subsidiaries: Subsidiary[] = [
    {
      id: "inter-it",
      name: "Inter-IT Services",
      website: "https://inter-itservices.ca",
      tagline: "Intelligence Numérique & Design Augmenté",
      description: "Notre filiale technologique orchestre l'innovation digitale, l'implémentation d'architectures logicielles IA-Native et les stratégies de communication visuelle.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      services: [
        "Design & Créativité Augmentée",
        "Digital & Web \"AI-Native\"",
        "IA & Communication",
        "Marketing Numérique",
        "Storytelling & Création",
        "Formations"
      ],
      angle: 0
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
      angle: 72
    },
    {
      id: "inter-immo",
      name: "Inter-Immo",
      tagline: "Promotion Immobilière & Sécurisation Foncière",
      description: "Spécialisée dans la promotion immobilière, l'achat de terrains et la gestion locative au Cameroun, Inter-Immo sécurise vos transactions foncières et administre vos actifs.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
      services: [
        "Achat de terrains & Vente de maisons",
        "Location & Gestion immobilière",
        "Promotion immobilière",
        "Accompagnement administratif & Titres fonciers",
        "Sécurisation stricte des transactions"
      ],
      angle: 144
    },
    {
      id: "electromeca",
      name: "Electromeca+",
      tagline: "Maintenance Industrielle & Groupes Électrogènes",
      description: "Garant des performances industrielles au Cameroun. Electromeca+ déploie des solutions de maintenance préventive et de gestion de groupes électrogènes.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      services: [
        "Maintenance mécanique industrielle haute précision",
        "Installation & Entretien de Groupes Électrogènes",
        "Automatismes & Armoires électriques de puissance",
        "Ingénierie de conception & Maintenance préventive"
      ],
      angle: 216
    },
    {
      id: "happy-food",
      name: "Happy Food",
      tagline: "Restauration & Traiteur d'Excellence",
      description: "Happy Food propose des services de restauration, traiteur événementiel de prestige et plateaux-repas d'entreprise, mariant cuisine africaine et gastronomie internationale.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=800",
      services: [
        "Restauration & Traiteur événementiel",
        "Cuisine africaine traditionnelle & internationale",
        "Livraison de repas de bureaux",
        "Repas d'entreprise & Cocktails de prestige"
      ],
      angle: 288
    }
  ];

  const currentSub = subsidiaries.find(s => s.id === activeSub) || subsidiaries[0];

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-neutral-dark font-sans overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* ======================================== */}
        {/* HERO BANNER SECTION                      */}
        {/* ======================================== */}
        <section className="relative py-20 flex items-center justify-center bg-neutral-950 overflow-hidden">
          <div className="absolute inset-0 z-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600"
              alt="Ecosystem Tech Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-neutral-950/90 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-primary/20 z-10" />
          </div>

          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-20 text-white w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-4"
            >
              <span className="w-6 h-[1.5px] bg-secondary" />
              Synergies Connectées
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight"
            >
              L'écosystème <span className="text-secondary">interconnecté d'ISS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/80 text-sm sm:text-base max-w-xl leading-relaxed font-light"
            >
              Notre groupe structure des collaborations intelligentes et transversales. Découvrez comment nos branches co-créent de la valeur à travers le monde.
            </motion.p>
          </div>
        </section>

        {/* ======================================== */}
        {/* INTERACTIVE DIAGRAM SECTION              */}
        {/* ======================================== */}
        <section className="py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-start max-w-3xl mb-20"
            >
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Architecture de Groupe
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight mb-4">
                Interactivité & Flux transversaux
              </h2>
              <p className="text-neutral-dark/70 text-xs sm:text-sm leading-relaxed font-light">
                Sélectionnez une filiale sur le diagramme interactif pour comprendre ses connexions et sa valeur ajoutée au sein de notre écosystème global.
              </p>
            </motion.div>

            {/* Interactive Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Circular Diagram (Col 7 - Desktop Only) */}
              <div className="lg:col-span-7 hidden lg:flex justify-center items-center h-[500px] relative">
                
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {subsidiaries.map((sub) => {
                    const angleRad = (sub.angle * Math.PI) / 180;
                    const r = 180; // orbit radius
                    const cx = 250;
                    const cy = 250;
                    const x2 = cx + r * Math.cos(angleRad);
                    const y2 = cy + r * Math.sin(angleRad);

                    const isActive = activeSub === sub.id;
                    const isHovered = hoveredSub === sub.id;

                    return (
                      <g key={sub.id}>
                        <line
                          x1={cx}
                          y1={cy}
                          x2={x2}
                          y2={y2}
                          stroke={isActive || isHovered ? "rgba(247, 148, 29, 0.4)" : "rgba(35, 39, 75, 0.08)"}
                          strokeWidth={isActive || isHovered ? 2.5 : 1}
                          className="transition-all duration-300"
                        />
                        {(isActive || isHovered) && (
                          <line
                            x1={cx}
                            y1={cy}
                            x2={x2}
                            y2={y2}
                            stroke="#F7941D"
                            strokeWidth={3}
                            className="animate-pulse-flow"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Decorative orbit dot circle */}
                <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-primary/5 pointer-events-none animate-pulse" />

                {/* Central Node (ISS) */}
                <div className="w-28 h-28 rounded-full bg-white border-4 border-neutral-light shadow-2xl flex items-center justify-center z-10 transition-transform duration-500 hover:scale-105 overflow-hidden">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <img
                      src="/logo.jpg"
                      alt="ISS Central"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>

                {/* Peripheral nodes */}
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
                          ? "bg-secondary text-white scale-110 shadow-secondary/20 border-2 border-white"
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

              {/* Detail Fiche (Col 5) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                
                {/* Mobile selector */}
                <div className="lg:hidden flex flex-wrap gap-2.5 mb-10">
                  {subsidiaries.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSub(s.id)}
                      className={`px-4 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                        activeSub === s.id
                          ? "bg-secondary text-white shadow-md"
                          : "bg-neutral-light text-primary/70 hover:bg-neutral-light/80"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>

                {/* Active subsidiary content card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSub}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-start bg-neutral-light p-8 lg:p-10 border border-black/5 shadow-sm"
                  >
                    <span className="text-[9px] font-bold tracking-widest uppercase text-secondary mb-2 block">
                      Filiale du Groupe ISS
                    </span>
                    <h3 className="text-2xl font-extrabold text-primary mb-4">
                      {currentSub.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary-light italic mb-6 leading-relaxed">
                      "{currentSub.tagline}"
                    </p>
                    <p className="text-neutral-dark/80 text-xs sm:text-sm leading-relaxed mb-8 font-light">
                      {currentSub.description}
                    </p>

                    <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-4">
                      Secteurs clés & expertises
                    </h4>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                      {currentSub.services.map((srv, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-dark/70">
                          <Check size={14} className="text-secondary mt-0.5 shrink-0" />
                          <span className="leading-relaxed font-light">{srv}</span>
                        </li>
                      ))}
                    </ul>

                    {currentSub.website && (
                      <Link
                        href={currentSub.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 bg-primary text-white hover:bg-secondary text-[10px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        Visiter le portail filiale
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* GEOGRAPHICAL MAP SECTION                 */}
        {/* ======================================== */}
        <section className="py-28 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Présence & Vision
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6 leading-tight">
                Une envergure internationale
              </h2>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-8 font-light">
                Basé au Cameroun (Yaoundé), Inter-Solutions Services coordonne des flux d'expertises nationaux et internationaux. Nos filiales connectent l'Afrique et l'Amérique du Nord (Canada) pour concevoir et déployer des solutions de niveau mondial.
              </p>

              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="border-l-2 border-secondary pl-4">
                  <span className="text-xl font-bold block text-white">Afrique</span>
                  <span className="text-[10px] text-white/50 tracking-wider uppercase font-bold">Siège & Opérations</span>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <span className="text-xl font-bold block text-white">Canada</span>
                  <span className="text-[10px] text-white/50 tracking-wider uppercase font-bold">Hub Technologique (Inter-IT)</span>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 flex justify-center items-center relative">
              <div className="w-full max-w-xl aspect-[1.8/1] opacity-75 relative">
                <svg viewBox="0 0 1000 500" className="w-full h-full fill-none stroke-white/10" strokeWidth="1">
                  <path d="M 150 100 Q 180 150 200 250 T 250 400 T 220 480" />
                  <path d="M 100 120 L 150 180 T 120 280 T 80 400" />
                  <path d="M 450 120 Q 520 100 580 150 T 550 280 T 600 420 T 620 480" />
                  <path d="M 420 180 Q 480 220 460 300 T 520 420" />
                  <path d="M 600 120 Q 750 80 880 150 T 820 350 T 860 480" />
                  <path d="M 850 380 Q 900 420 920 480" />

                  <path
                    d="M 500 280 Q 360 180 220 140"
                    stroke="#F7941D"
                    strokeWidth="2.5"
                    strokeDasharray="6 3"
                    className="animate-pulse-flow"
                  />

                  <circle cx="500" cy="280" r="6" fill="#F7941D" />
                  <circle cx="500" cy="280" r="14" stroke="#F7941D" strokeWidth="1" className="animate-ping" />

                  <circle cx="220" cy="140" r="5" fill="#F7941D" />
                  <circle cx="220" cy="140" r="10" stroke="#F7941D" strokeWidth="1" className="opacity-75" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
