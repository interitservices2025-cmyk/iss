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
  CheckCircle2, 
  ArrowUpRight, 
  X,
  ExternalLink,
  ChevronRight
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
  stats: { label: string; value: string }[];
  detailedServices: { title: string; desc: string }[];
}

export default function SubsidiariesPage() {
  const [selectedSub, setSelectedSub] = useState<Subsidiary | null>(null);

  const subsidiaries: Subsidiary[] = [
    {
      id: "inter-it",
      name: "Inter-IT Services",
      website: "https://inter-itservices.ca",
      tagline: "Intelligence Numérique & Design Augmenté",
      description: "Notre filiale technologique orchestre l'innovation digitale, l'implémentation d'architectures logicielles IA-Native et les stratégies de communication visuelle à fort impact entre le Canada et l'Afrique.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      stats: [
        { label: "Projets livrés", value: "80+" },
        { label: "Satisfaction", value: "99%" },
        { label: "Experts", value: "25+" }
      ],
      detailedServices: [
        { title: "Design & Créativité Augmentée", desc: "Création d'identités visuelles percutantes, chartes graphiques, UI/UX premium et supports de marque haut de gamme." },
        { title: "Digital & Web \"AI-Native\"", desc: "Développement d'applications web et mobiles modernes intégrant l'intelligence artificielle pour maximiser la productivité." },
        { title: "IA & Communication", desc: "Stratégies d'automatisation de contenu, chatbots personnalisés et intégration des LLMs dans les processus d'affaires." },
        { title: "Marketing Numérique & SEO", desc: "Positionnement stratégique sur les moteurs de recherche, campagnes de conversion ciblées et pilotage de la e-réputation." },
        { title: "Storytelling & Création", desc: "Production éditoriale, stratégies de contenu de marque et copywriting de haute conversion." }
      ]
    },
    {
      id: "inter-rh",
      name: "Inter-RH",
      website: "https://www.inter-rh.com",
      tagline: "Capital Humain & Recrutement International",
      description: "Cabinet de conseil stratégique en gestion des talents. Inter-RH gère l'acquisition de compétences clés, la transformation managériale et le recrutement transfrontalier pour combler le déficit de compétences.",
      icon: Users2,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
      stats: [
        { label: "Placements réussis", value: "450+" },
        { label: "Rétention des talents", value: "95%" },
        { label: "Partenaires mondiaux", value: "30+" }
      ],
      detailedServices: [
        { title: "Recrutement Stratégique National & International", desc: "Chasse de têtes, sourcing de profils hautement qualifiés et intermédiation pour l'immigration professionnelle." },
        { title: "Gestion Externalisée des RH (RPO)", desc: "Délégation complète ou partielle du processus de recrutement pour fluidifier et optimiser les embauches." },
        { title: "Coaching Exécutif & Leadership", desc: "Accompagnement personnalisé des cadres dirigeants et développement des compétences managériales du futur." },
        { title: "Transformation Organisationnelle", desc: "Conseil en restructuration, conduite du changement et alignement de la culture d'entreprise avec les objectifs stratégiques." },
        { title: "Audit Social & Rémunération", desc: "Diagnostics de conformité légale, enquêtes salariales et structuration de packages d'avantages compétitifs." }
      ]
    },
    {
      id: "inter-immo",
      name: "Inter-Immo",
      tagline: "Asset Management & Conseil Immobilier",
      description: "Spécialisée dans l'ingénierie et la gestion d'actifs immobiliers, Inter-Immo sécurise, valorise et administre vos investissements fonciers et patrimoniaux avec une transparence absolue.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      stats: [
        { label: "Biens sous gestion", value: "120M€+" },
        { label: "Taux d'occupation", value: "98.5%" },
        { label: "Clients fidélisés", value: "150+" }
      ],
      detailedServices: [
        { title: "Gestion Locative d'Actifs d'Entreprise & Résidentiels", desc: "Suivi des baux, encaissement des loyers, gestion technique et relations quotidiennes avec les locataires." },
        { title: "Administration de Copropriétés Complexes", desc: "Syndic professionnel, gestion comptable rigoureuse et entretien préventif des structures et parties communes." },
        { title: "Transactions, Cessions & Acquisitions", desc: "Courtage de haut niveau, négociations d'actifs commerciaux et résidentiels, et valorisation patrimoniale." },
        { title: "Conseil Stratégique en Investissement & Fiscalité", desc: "Optimisation de portefeuilles, montages financiers immobiliers et planification de la transmission de patrimoine." }
      ]
    },
    {
      id: "electromeca",
      name: "Electromeca+",
      tagline: "Ingénierie Avancée & Maintenance Industrielle",
      description: "Garant des performances techniques et industrielles de nos clients. Electromeca+ déploie des solutions de conception, de maintenance préventive haute précision et de logistique d'équipements lourds.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      stats: [
        { label: "Disponibilité machines", value: "99.2%" },
        { label: "Interventions rapides", value: "24/7" },
        { label: "Contrats industriels", value: "45+" }
      ],
      detailedServices: [
        { title: "Maintenance Mécanique Industrielle Haute Précision", desc: "Diagnostic vibratoire, lignage laser, révision complète de machines tournantes et d'équipements de production." },
        { title: "Automatismes & Réseaux Électrotechniques", desc: "Programmation d'automates, câblage d'armoires électriques industrielles et intégration de systèmes de contrôle-commande." },
        { title: "Ingénierie de Conception & Études Techniques", desc: "Modélisation CAO/DAO, dimensionnement de structures et amélioration continue de process industriels existants." },
        { title: "Location & Gestion Logistique d'Engins de Chantier", desc: "Mise à disposition de flottes d'engins lourds révisés et accompagnement logistique sur site." }
      ]
    }
  ];

  // Animation variants
  const subContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const subItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-neutral-dark font-sans overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* ======================================== */}
        {/* HERO BANNER SECTION (Alignée sous le menu)*/}
        {/* ======================================== */}
        <section className="relative bg-neutral-950 py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
              alt="ISS Groupe Bureau Teamwork"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-neutral-950/90 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-primary/20 z-10" />
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-4"
            >
              <span className="w-6 h-[1.5px] bg-secondary" />
              Nos Branches Sectorielles
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight mb-4 leading-tight"
            >
              Des structures d'élite, <br />
              <span className="text-secondary">une expertise globale</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 text-sm max-w-xl leading-relaxed font-light"
            >
              Le groupe ISS pilote ses filiales avec une rigueur stratégique, leur offrant le support nécessaire pour dominer leurs marchés respectifs et offrir des prestations de classe mondiale.
            </motion.p>
          </div>
        </section>

        {/* ======================================== */}
        {/* FILIALES LIST SHOWCASE (Avec Animations) */}
        {/* ======================================== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 space-y-24">
            {subsidiaries.map((sub, index) => {
              const IconComponent = sub.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={sub.id} 
                  id={sub.id}
                  variants={subContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-b border-black/5 pb-16 lg:pb-24 last:border-b-0 scroll-mt-24"
                >
                  {/* Image Column */}
                  <motion.div 
                    variants={subItemVariants}
                    className={`lg:col-span-5 relative ${isEven ? "lg:order-first" : "lg:order-last"}`}
                  >
                    <div className="relative h-[350px] sm:h-[420px] w-full overflow-hidden shadow-xl border border-black/5 bg-[#0b0e27]">
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="absolute inset-0 w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </div>
                    {/* Decorative colored badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary/10 -z-10" />
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/5 -z-10" />
                  </motion.div>

                  {/* Content Column */}
                  <motion.div 
                    variants={subItemVariants}
                    className="lg:col-span-7 flex flex-col items-start space-y-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-secondary block">
                          Entité du Groupe ISS
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                          {sub.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-primary-light/90 italic leading-relaxed">
                      "{sub.tagline}"
                    </p>

                    <p className="text-neutral-dark/85 text-xs sm:text-sm leading-relaxed font-light">
                      {sub.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-black/5 w-full">
                      {sub.stats.map((stat, idx) => (
                        <div key={idx} className="text-center lg:text-left">
                          <span className="text-lg sm:text-2xl font-extrabold text-primary block">
                            {stat.value}
                          </span>
                          <span className="text-[9px] font-bold text-neutral-dark/50 tracking-wider uppercase">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Primary Services Sneak-Peek */}
                    <div>
                      <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-3">
                        Expertises & Prestations
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sub.detailedServices.slice(0, 4).map((srv, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-neutral-dark/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                            <span className="font-light">{srv.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-2 w-full">
                      <button
                        onClick={() => setSelectedSub(sub)}
                        className="px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-primary-light transition-colors duration-200 cursor-pointer flex items-center gap-2"
                      >
                        Consulter la fiche détaillée
                        <ChevronRight size={14} />
                      </button>
                      
                      {sub.website && (
                        <Link
                          href={sub.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 border border-black/10 text-primary hover:bg-neutral-light text-xs font-bold uppercase tracking-widest rounded-none transition-colors duration-200 flex items-center justify-center gap-2 group"
                        >
                          Visiter le site officiel
                          <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      {/* ======================================== */}
      {/* INTERACTIVE DETAIL DIALOG                */}
      {/* ======================================== */}
      <AnimatePresence>
        {selectedSub && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-none border border-black/10 overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
            >
              {/* Header Image */}
              <div className="relative h-48 sm:h-60 w-full flex-shrink-0">
                <img
                  src={selectedSub.image}
                  alt={selectedSub.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent" />
                
                {/* Title and Icon */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary border border-white/10 text-white flex items-center justify-center shadow-xl">
                      <selectedSub.icon size={22} />
                    </div>
                    <div>
                      <span className="text-[8px] font-bold tracking-widest uppercase text-secondary block">
                        Fiche filiale globale
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                        {selectedSub.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedSub(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 hover:scale-105 transition-all duration-200 cursor-pointer"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
                <p className="text-neutral-dark/80 text-xs sm:text-sm leading-relaxed font-light">
                  {selectedSub.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-secondary border-b border-black/5 pb-2">
                    Catalogue des solutions
                  </h4>
                  
                  <div className="space-y-4">
                    {selectedSub.detailedServices.map((srv, idx) => (
                      <div key={idx} className="flex gap-3">
                        <CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" />
                        <div>
                          <h5 className="font-bold text-xs text-primary">{srv.title}</h5>
                          <p className="text-[11px] text-neutral-dark/60 mt-0.5 leading-relaxed font-light">{srv.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer action bar */}
              <div className="p-6 bg-neutral-light border-t border-black/5 flex flex-col sm:flex-row gap-3 justify-between items-center flex-shrink-0">
                {selectedSub.website ? (
                  <Link
                    href={selectedSub.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 bg-secondary text-white hover:bg-secondary-light text-[10px] font-bold tracking-widest uppercase transition-colors duration-200 flex items-center justify-center gap-2 group"
                  >
                    Visiter le site officiel
                    <ExternalLink size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  <span className="text-[10px] text-primary/40 font-bold tracking-widest uppercase">
                    Site web en cours d'intégration
                  </span>
                )}
                
                <Link
                  href="/contact"
                  onClick={() => setSelectedSub(null)}
                  className="w-full sm:w-auto px-5 py-3 bg-primary text-white hover:bg-primary-light text-[10px] font-bold tracking-widest uppercase transition-colors duration-200 flex items-center justify-center"
                >
                  Entrer en contact
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
