"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { 
  ArrowRight, 
  Building2, 
  ChevronRight, 
  Cpu, 
  Users2, 
  Wrench,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Utensils
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

interface Sector {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: any;
  image: string;
  link: string;
}

export default function HomeGroup() {
  const sectors: Sector[] = [
    {
      id: "inter-it",
      name: "Inter-IT Services",
      tagline: "Intelligence Numérique & Design Augmenté",
      description: "Notre filiale technologique orchestre l'innovation digitale, l'implémentation d'architectures logicielles IA-Native et les stratégies de communication visuelle.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      link: "/subsidiaries#inter-it"
    },
    {
      id: "inter-rh",
      name: "Inter-RH",
      tagline: "Capital Humain & Recrutement International",
      description: "Cabinet de conseil stratégique en gestion des talents. Inter-RH gère l'acquisition de compétences clés et le recrutement transfrontalier.",
      icon: Users2,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
      link: "/subsidiaries#inter-rh"
    },
    {
      id: "inter-immo",
      name: "Inter-Immo",
      tagline: "Promotion Immobilière & Sécurisation Foncière",
      description: "Spécialisée dans la promotion immobilière, l'achat de terrains et la gestion locative au Cameroun, Inter-Immo sécurise vos transactions foncières et gère vos biens.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
      link: "/subsidiaries#inter-immo"
    },
    {
      id: "electromeca",
      name: "Electromeca+",
      tagline: "Maintenance Industrielle & Groupes Électrogènes",
      description: "Expert en maintenance industrielle au Cameroun. Electromeca+ assure l'installation d'armoires électriques, l'entretien de moteurs et la maintenance de groupes électrogènes.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      link: "/subsidiaries#electromeca"
    },
    {
      id: "happy-food",
      name: "Happy Food",
      tagline: "Restauration & Traiteur d'Excellence",
      description: "Services traiteur, restauration d'entreprise et livraison de repas au Cameroun, alliant saveurs de la cuisine africaine et gastronomie internationale.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=800",
      link: "/subsidiaries#happy-food"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-neutral-dark font-sans overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* ======================================== */}
        {/* HERO BANNER SECTION (Alignée net en bas)  */}
        {/* ======================================== */}
        <section className="relative min-h-[75vh] flex items-center justify-center bg-neutral-950 overflow-hidden py-24">
          <div className="absolute inset-0 z-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
              alt="ISS Groupe Bureau Collaboration"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-neutral-950/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-primary/20 z-10" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] z-10 pointer-events-none animate-pulse" />

          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-20 text-white w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-secondary uppercase mb-6"
              >
                <Layers size={12} className="text-secondary" />
                Groupe Multidisciplinaire
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight mb-6 leading-[1.15]"
              >
                Bâtir l'avenir à travers la synergie <br />
                <span className="text-secondary">d'expertises sectorielles</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-sm sm:text-base text-white/75 max-w-xl leading-relaxed mb-10 font-light"
              >
                Inter-Solutions Services (ISS) pilote un écosystème de filiales spécialisées et interconnectées afin de créer de la valeur à long terme dans l'Informatique, l'ingénierie, l'immobilier et le capital humain.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <Link
                  href="/subsidiaries"
                  className="w-full sm:w-auto px-7 py-3.5 bg-secondary text-white text-xs font-bold uppercase tracking-widest hover:bg-secondary-light transition-all duration-300 flex items-center justify-center gap-2.5 group"
                >
                  Explorer nos filiales
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center"
                >
                  Prendre contact
                </Link>
              </motion.div>
            </div>

            {/* Right Graphics */}
            <div className="lg:col-span-4 hidden lg:flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-80 h-80 rounded-full border border-white/5 flex items-center justify-center relative"
              >
                <div className="absolute inset-8 rounded-full border border-white/10 animate-pulse" />
                
                <div className="w-28 h-28 rounded-full bg-white border-4 border-neutral-light flex items-center justify-center relative z-10 shadow-2xl">
                  <div className="relative w-20 h-10">
                    <img
                      src="/logo.jpg"
                      alt="ISS Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="absolute w-full h-full rounded-full border border-dashed border-white/10 animate-spin-orbit" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* STATISTICS SECTION                       */}
        {/* ======================================== */}
        <section className="bg-primary text-white py-16 border-y border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {[
                { number: 5, suffix: "", label: "Filiales spécialisées" },
                { number: 10, suffix: "+", label: "Projets réalisés" },
                { number: 2, suffix: "+", label: "Pays desservis" },
                { number: 100, suffix: "%", label: "Engagement d'excellence" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center lg:items-start lg:text-left border-l border-white/5 pl-6 lg:first:border-none">
                  <span className="text-4xl sm:text-5xl font-extrabold text-secondary mb-2">
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
        {/* À PROPOS DU GROUPE                       */}
        {/* ======================================== */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px]">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Vocation & Gouvernance
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-tight">
                Une gouvernance éthique pour un développement durable
              </h2>
              <p className="text-neutral-dark/80 text-xs sm:text-sm leading-relaxed font-light">
                Le groupe **Inter-Solutions Services (ISS)** agit en tant que groupe d'orientation et de pilotage stratégique. Notre vocation est de catalyser le développement de filiales hautement performantes à travers des investissements technologiques, juridiques et financiers ciblés.
              </p>
              <div className="flex gap-4 pt-2">
                <Link 
                  href="/about" 
                  className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors flex items-center gap-2 group"
                >
                  Découvrir notre histoire
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative h-80 w-full shadow-xl border border-black/5 bg-primary overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
                  alt="ISS Corporate Vocation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================== */}
        {/* FILIALES CARDS SECTION                   */}
        {/* ======================================== */}
        <section className="py-24 bg-neutral-light border-y border-black/5 relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                  <span className="w-6 h-[1.5px] bg-secondary" />
                  Expertises Sectorielles
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  Nos branches stratégiques
                </h2>
              </div>
              <Link
                href="/subsidiaries"
                className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors flex items-center gap-2 group shrink-0"
              >
                Toutes nos filiales
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
            >
              {sectors.map((sub, index) => {
                const IconComp = sub.icon;
                const gridSpan = index < 3 
                  ? "lg:col-span-2" 
                  : index === 3 
                    ? "lg:col-span-3" 
                    : "md:col-span-2 lg:col-span-3 md:max-w-xl md:mx-auto w-full lg:mx-0 lg:max-w-none";
                return (
                  <motion.div 
                    key={sub.id}
                    variants={itemVariants}
                    className={`bg-white border border-black/5 p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group min-h-[240px] ${gridSpan}`}
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center transition-colors group-hover:bg-secondary group-hover:text-white">
                        <IconComp size={20} />
                      </div>
                      <h3 className="text-base font-bold text-primary transition-colors group-hover:text-secondary">
                        {sub.name}
                      </h3>
                      <p className="text-xs text-neutral-dark/80 leading-relaxed font-light">
                        {sub.description}
                      </p>
                    </div>
                    
                    <Link
                      href={sub.link}
                      className="text-[10px] font-bold tracking-widest uppercase text-primary/70 hover:text-secondary flex items-center gap-1.5 pt-3 border-t border-black/5 mt-4 transition-colors group"
                    >
                      Découvrir l'entité
                      <ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ======================================== */}
        {/* WORLD MAP PRESENCE (Carte Diminuée)       */}
        {/* ======================================== */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Text Column (Col 7 - Prends plus d'importance) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px]">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Présence & Vision
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-tight">
                Une envergure internationale connectée
              </h2>
              <p className="text-neutral-dark/80 text-xs sm:text-sm leading-relaxed font-light">
                Basé au Cameroun (Yaoundé), Inter-Solutions Services coordonne des flux d'expertises nationaux et internationaux. Nos filiales connectent l'Afrique et l'Amérique du Nord (Canada) pour concevoir et déployer des solutions de niveau mondial.
              </p>

              <div className="grid grid-cols-2 gap-4 w-full border-t border-black/5 pt-6">
                <div className="border-l-2 border-secondary pl-3">
                  <span className="text-base font-bold block text-primary">Afrique</span>
                  <span className="text-[9px] text-neutral-dark/50 tracking-wider uppercase font-bold">Siège & Opérations</span>
                </div>
                <div className="border-l-2 border-secondary pl-3">
                  <span className="text-base font-bold block text-primary">Canada</span>
                  <span className="text-[9px] text-neutral-dark/50 tracking-wider uppercase font-bold">Hub Technologique (Inter-IT)</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/ecosystem"
                  className="px-5 py-3 bg-primary text-white hover:bg-secondary text-[10px] font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2"
                >
                  Découvrir l'écosystème
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* SVG Map Column (Col 5 - Taille diminuée / max-w-sm) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center items-center relative bg-primary p-6 shadow-md rounded"
            >
              <div className="w-full max-w-sm aspect-[1.8/1] opacity-90 relative">
                <svg viewBox="0 0 1000 500" className="w-full h-full fill-none stroke-white/10" strokeWidth="1">
                  <path d="M 150 100 Q 180 150 200 250 T 250 400" />
                  <path d="M 450 120 Q 520 100 580 150 T 550 280 T 600 420" />
                  <path d="M 600 120 Q 750 80 880 150" />
                  <path
                    d="M 500 280 Q 360 180 220 140"
                    stroke="#F7941D"
                    strokeWidth="2.5"
                    strokeDasharray="6 3"
                    className="animate-pulse-flow"
                  />
                  <circle cx="500" cy="280" r="5" fill="#F7941D" />
                  <circle cx="220" cy="140" r="4" fill="#F7941D" />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================== */}
        {/* GOUVERNANCE & QUALITÉ                    */}
        {/* ======================================== */}
        <section className="bg-primary text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px]">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Qualité & Normes
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                L'assurance qualité au cœur de nos processus
              </h2>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
                Chaque filiale d'ISS déploie des standards d'audit internes rigoureux pour garantir le respect des normes internationales de conformité et de satisfaction de nos clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Audit rigoureux des processus",
                  "Alignement avec les réglementations",
                  "Formation continue de nos experts",
                  "Mesure constante de la satisfaction"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    <span className="text-xs text-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
            >
              <h3 className="text-base font-bold text-secondary mb-4">Objectifs de Performance</h3>
              <ul className="space-y-3.5 text-xs">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-light">Satisfaction filiales</span>
                  <span className="font-bold text-secondary">98.4%</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-light">Conformité réglementaire</span>
                  <span className="font-bold text-secondary">100%</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-light">Rétention des talents</span>
                  <span className="font-bold text-secondary">95.0%</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ======================================== */}
        {/* CALL TO ACTION CONTACT                   */}
        {/* ======================================== */}
        <section className="bg-white py-20 text-center relative border-t border-black/5">
          <div className="max-w-4xl mx-auto px-8 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-tight">
              Collaborer avec ISS ou l'une de nos filiales
            </h2>
            <p className="text-neutral-dark/75 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              Que vous soyez un partenaire stratégique, un investisseur ou un futur collaborateur, nos services de groupe et de filiales se tiennent à votre écoute.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-secondary border border-secondary text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-secondary-light hover:border-secondary-light transition-all duration-300 inline-block shadow-lg shadow-secondary/15"
              >
                Prendre contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
