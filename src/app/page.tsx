"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform 
} from "framer-motion";
import { 
  ArrowRight, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Code, 
  Database, 
  FileText, 
  Globe, 
  HardHat, 
  HeartHandshake, 
  Home, 
  Lightbulb, 
  Mail, 
  MapPin, 
  Phone, 
  Rocket, 
  Scale, 
  Send, 
  Settings, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Users,
  Building,
  CheckCircle2,
  ExternalLink,
  Laptop,
  X
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

// Interface pour les filiales
interface Filiale {
  id: string;
  name: string;
  website?: string;
  description: string;
  icon: any;
  image: string;
  services: string[];
  color: string;
}

export default function HomeApp() {
  const [selectedFiliale, setSelectedFiliale] = useState<Filiale | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Canvas pour les particules
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Initialiser les particules
    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 140, 40, ${p.opacity})`; // Orange ISS
        ctx.fill();

        // Mettre à jour la position
        p.x += p.speedX;
        p.y += p.speedY;

        // Rebonds sur les bords
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Données des filiales
  const filiales: Filiale[] = [
    {
      id: "inter-it",
      name: "INTER-IT SERVICES",
      website: "https://inter-itservices.ca",
      description: "Solutions numériques et technologiques de pointe pour propulser la croissance des entreprises et simplifier le quotidien des particuliers.",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      services: [
        "Design & Créativité Augmentée",
        "Digital & Web \"AI-Native\"",
        "IA & Communication",
        "Marketing Numérique",
        "Storytelling & Création",
        "Formations"
      ],
      color: "from-blue-600 to-indigo-800"
    },
    {
      id: "inter-rh",
      name: "INTER-RH",
      website: "https://www.inter-rh.com",
      description: "Gestion stratégique des talents, conseil organisationnel et recrutement de haut niveau pour bâtir des équipes d'excellence.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
      services: [
        "Recrutement de talents nationaux et internationaux",
        "Gestion RH externalisée & Audit social",
        "Coaching de dirigeants & Formations managériales",
        "Gestion de projets RH complexes",
        "Conseil stratégique en ressources humaines"
      ],
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "inter-immo",
      name: "INTER-IMMO",
      description: "Gestion immobilière rigoureuse et accompagnement sur-mesure pour tous vos projets d'investissement et d'administration de biens.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      services: [
        "Gestion locative complète et sécurisée",
        "Transaction immobilière (Achat, Vente, Location)",
        "Administration de copropriétés & de biens",
        "Conseil en investissement et ingénierie financière"
      ],
      color: "from-emerald-500 to-teal-700"
    },
    {
      id: "electromeca",
      name: "ELECTROMECA+",
      description: "Ingénierie avancée, maintenance industrielle préventive et solutions techniques robustes pour garantir vos performances opérationnelles.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      services: [
        "Maintenance et conception mécanique",
        "Électrotechnique et automatisme industriel",
        "Maintenance industrielle sur-mesure (24/7)",
        "Études techniques de faisabilité",
        "Location et gestion d'engins industriels"
      ],
      color: "from-rose-600 to-red-800"
    }
  ];

  // Données des témoignages
  const testimonials = [
    {
      quote: "Le groupe INTER-SOLUTIONS SERVICES a su nous accompagner sur plusieurs aspects clés de notre croissance : l'intégration de notre ERP par Inter-IT et le recrutement de notre direction technique par Inter-RH. Une synergie unique et un professionnalisme exemplaire.",
      author: "Jean-Marc Dubois",
      role: "Directeur Général, MétalTech Canada",
      company: "MétalTech Canada"
    },
    {
      quote: "La réactivité des équipes d'Electromeca+ lors de notre panne de chaîne de montage a évité des pertes majeures. Parallèlement, nous confions la gestion de nos parcs immobiliers à Inter-Immo avec une totale sérénité. Un partenaire de confiance !",
      author: "Hélène Laroche",
      role: "VP Opérations, LogiNord S.A.",
      company: "LogiNord S.A."
    },
    {
      quote: "Leur expertise multidisciplinaire est un atout inestimable. Au lieu de gérer quatre prestataires différents, nous avons un interlocuteur unique chez ISS qui coordonne nos besoins technologiques, humains et logistiques de manière fluide.",
      author: "Stéphane Gauthier",
      role: "Fondateur, Innova Solutions",
      company: "Innova Solutions"
    }
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi du formulaire
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
      alert("Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Header />

      <main className="flex-grow">
        {/* ======================================== */}
        {/* HERO SECTION                             */}
        {/* ======================================== */}
        <section
          id="accueil"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#0f1335] to-[#252c67] pt-20"
        >
          {/* Canvas de particules */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />

          {/* Background overlay design */}
          <div className="absolute inset-0 bg-black/45 z-0" />
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-primary-light/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Grid lines décoratifs */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10 text-white flex flex-col items-center">
            {/* Tag d'innovation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-secondary uppercase mb-8"
            >
              <Sparkles size={14} className="animate-pulse" />
              Groupe Multidisciplinaire
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-secondary-light"
            >
              INTER-SOLUTIONS SERVICES <span className="text-secondary">(ISS)</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed mb-12 font-light"
            >
              Votre partenaire global pour des solutions durables, innovantes et hautement performantes.
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full max-w-md sm:max-w-none"
            >
              <Link
                href="#nos-filiales"
                className="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-semibold rounded-full hover:bg-secondary-light hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group tracking-wide"
              >
                Découvrir le Groupe
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/15 hover:border-white/40 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center tracking-wide"
              >
                Nous contacter
              </Link>
            </motion.div>

            {/* Indicateur de scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
            >
              <span className="text-xs uppercase tracking-widest text-white/45">Faire défiler</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 h-1.5 bg-secondary rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION CHIFFRES CLÉS                   */}
        {/* ======================================== */}
        <section className="bg-primary py-16 relative overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { count: 4, suffix: "+", label: "Filiales spécialisées" },
                { count: 100, suffix: "+", label: "Projets accompagnés" },
                { count: 10, suffix: "+", label: "Domaines d'expertise" },
                { count: 100, suffix: "%", label: "Engagement qualité" }
              ].map((item, index) => (
                <div key={index} className="text-center flex flex-col items-center justify-center">
                  <div className="text-3xl sm:text-5xl font-extrabold text-secondary mb-3 flex items-center">
                    <AnimatedCounter value={item.count} suffix={item.suffix} />
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest font-semibold">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION À PROPOS                         */}
        {/* ======================================== */}
        <section id="a-propos" className="py-24 bg-neutral-light relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image & Illustration side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-black/5"
              >
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                  alt="Bâtiment d'architecture moderne représentant la solidité du groupe ISS"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm uppercase tracking-wide">Standard d'excellence</h4>
                    <p className="text-xs text-neutral-dark/80 mt-0.5">Nous mettons l'innovation au service de vos ambitions.</p>
                  </div>
                </div>
              </motion.div>

              {/* Text & Values side */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm">
                  <span className="w-8 h-[2px] bg-secondary" />
                  Qui sommes-nous ?
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  Un groupe multidisciplinaire au service de votre croissance
                </h2>
                <p className="text-neutral-dark/80 text-base leading-relaxed">
                  <strong>Inter-Solutions Services (ISS)</strong> est un groupe multidisciplinaire réunissant plusieurs filiales hautement spécialisées dans des secteurs stratégiques : informatique, ressources humaines, immobilier, ingénierie et mécanique.
                </p>
                <p className="text-neutral-dark/80 text-base leading-relaxed">
                  Notre mission est d’accompagner particuliers, entreprises et institutions avec des solutions complètes, fiables et parfaitement adaptées à leurs besoins grâce à un réseau d’experts chevronnés et des technologies de pointe.
                </p>

                {/* Grid des Valeurs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {[
                    { title: "Innovation", desc: "Toujours à la pointe pour devancer vos besoins de demain.", icon: Lightbulb },
                    { title: "Excellence", desc: "La recherche constante de la qualité absolue dans nos livrables.", icon: Award },
                    { title: "Proximité", desc: "Un accompagnement humain, direct, fluide et personnalisé.", icon: HeartHandshake },
                    { title: "Fiabilité", desc: "Le respect strict de nos engagements et une confiance totale.", icon: ShieldCheck }
                  ].map((val, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="p-5 rounded-2xl bg-white border border-black/5 hover:border-secondary/30 shadow-md shadow-black/2 transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                        <val.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-sm mb-1">{val.title}</h3>
                        <p className="text-xs text-neutral-dark/70 leading-relaxed">{val.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION FILIALES                         */}
        {/* ======================================== */}
        <section id="nos-filiales" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
              <div className="flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-2">
                <span className="w-6 h-[2px] bg-secondary" />
                Nos filiales spécialisées
                <span className="w-6 h-[2px] bg-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
                Une synergie d'expertises uniques
              </h2>
              <p className="text-neutral-dark/70 text-sm sm:text-base max-w-xl">
                Découvrez nos structures dédiées, conçues pour répondre de manière experte à chaque type de défi professionnel.
              </p>
            </div>

            {/* Grid des Filiales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filiales.map((f, index) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-black/5 flex flex-col h-full hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image de la carte */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Badge Icône */}
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-lg shadow-black/10`}>
                      <f.icon size={22} />
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {f.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description et Services */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-neutral-dark/80 mb-5 leading-relaxed line-clamp-3">
                        {f.description}
                      </p>
                      
                      {/* Services list snippet */}
                      <ul className="space-y-2 mb-6 text-xs text-neutral-dark/70">
                        {f.services.slice(0, 3).map((srv, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2">
                            <CheckCircle2 size={12} className="text-secondary shrink-0" />
                            <span className="truncate">{srv.split(" (")[0]}</span>
                          </li>
                        ))}
                        {f.services.length > 3 && (
                          <li className="text-[10px] text-secondary font-medium tracking-wide">
                            + {f.services.length - 3} autres services
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Bouton découvrir */}
                    <button
                      onClick={() => setSelectedFiliale(f)}
                      className="w-full py-3 bg-neutral-light border border-black/5 hover:border-secondary text-primary hover:text-white hover:bg-secondary font-bold text-xs rounded-xl tracking-wide uppercase transition-all duration-300 cursor-pointer"
                    >
                      Découvrir
                    </button>
                  </div>
                </motion.div>
              ))}
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
                className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
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
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedFiliale.color} flex items-center justify-center text-white shadow-xl`}>
                        <selectedFiliale.icon size={26} />
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

                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-secondary mb-4">
                    Services & Solutions proposées
                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {selectedFiliale.services.map((srv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-dark/70">
                        <CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" />
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
                        className="w-full sm:w-auto px-6 py-3.5 bg-secondary text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary-light transition-all duration-200 flex items-center justify-center gap-2 group"
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
                      className="w-full sm:w-auto px-6 py-3.5 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-light transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Demander un devis
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================== */}
        {/* SECTION POURQUOI NOUS CHOISIR            */}
        {/* ======================================== */}
        <section className="py-24 bg-primary relative overflow-hidden">
          {/* Abstract designs background */}
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
              <div className="flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-2">
                <span className="w-6 h-[2px] bg-secondary" />
                Pourquoi choisir ISS ?
                <span className="w-6 h-[2px] bg-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Une structure unique, des expertises multiples
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  id: "01",
                  title: "Expertise multidisciplinaire",
                  desc: "Une seule et unique structure pour répondre à l'ensemble de vos besoins professionnels.",
                  icon: LayersIcon
                },
                {
                  id: "02",
                  title: "Innovation continue",
                  desc: "L'application constante et rigoureuse des technologies de pointe pour vos projets.",
                  icon: TrendingUp
                },
                {
                  id: "03",
                  title: "Accompagnement sur-mesure",
                  desc: "Des solutions personnalisées, pensées et calibrées pour s'adapter à vos objectifs.",
                  icon: HeartHandshake
                },
                {
                  id: "04",
                  title: "Excellence opérationnelle",
                  desc: "Un haut standard de qualité et de performance garanti à chaque étape de notre collaboration.",
                  icon: ShieldCheck
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-card-dark p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-5xl font-extrabold text-secondary block mb-6 font-mono">
                      {item.id}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION PROCESSUS                        */}
        {/* ======================================== */}
        <section className="py-24 bg-neutral-light relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
              <div className="flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-2">
                <span className="w-6 h-[2px] bg-secondary" />
                Notre Processus
                <span className="w-6 h-[2px] bg-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Une méthodologie rigoureuse pour garantir le succès
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative col-span-12">
              {/* Ligne médiane pour desktop */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/25 -translate-x-1/2 hidden lg:block" />

              <div className="space-y-12 lg:space-y-0">
                {[
                  {
                    step: "01",
                    title: "Analyse des besoins",
                    desc: "Nous étudions minutieusement vos demandes, enjeux et contraintes opérationnelles afin de concevoir un cadre de collaboration parfaitement clair.",
                    align: "left"
                  },
                  {
                    step: "02",
                    title: "Étude et planification",
                    desc: "Nos experts des filiales concernées dessinent les spécifications techniques, les plannings de déploiement et définissent les budgets nécessaires.",
                    align: "right"
                  },
                  {
                    step: "03",
                    title: "Mise en œuvre",
                    desc: "Nous déployons nos équipes et technologies spécialisées pour implémenter vos solutions avec une rigueur absolue de réalisation.",
                    align: "left"
                  },
                  {
                    step: "04",
                    title: "Suivi et optimisation",
                    desc: "Nous mesurons l'impact de nos réalisations et restons à vos côtés pour ajuster, maintenir et faire évoluer les systèmes mis en place.",
                    align: "right"
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`relative flex flex-col lg:flex-row items-center justify-between lg:even:flex-row-reverse`}>
                    {/* Contenu textuel */}
                    <div className="w-full lg:w-[45%] bg-white p-8 rounded-3xl shadow-lg border border-black/5 relative z-10">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                        Étape {item.step}
                      </span>
                      <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                      <p className="text-neutral-dark/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Point central de la timeline */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-white shadow-md z-20 hidden lg:block" />

                    {/* Espaceur invisible pour desktop */}
                    <div className="w-[45%] hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION TÉMOIGNAGES                      */}
        {/* ======================================== */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col items-center">
              <div className="flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-2">
                <span className="w-6 h-[2px] bg-secondary" />
                Témoignages
                <span className="w-6 h-[2px] bg-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Ils nous font confiance
              </h2>
            </div>

            {/* Testimonials Slider */}
            <div className="relative bg-neutral-light rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xl min-h-[250px] flex flex-col justify-between">
              {/* Quotes Icon Background */}
              <div className="absolute top-6 left-6 text-secondary/10 text-8xl font-serif select-none pointer-events-none">
                “
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <p className="text-primary/90 text-sm sm:text-base md:text-lg italic leading-relaxed mb-8">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-primary text-sm sm:text-base">
                      {testimonials[activeTestimonial].author}
                    </h4>
                    <p className="text-xs text-neutral-dark/60 mt-0.5">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center justify-end gap-3 mt-8 border-t border-black/5 pt-6">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="w-10 h-10 rounded-full bg-white border border-black/5 hover:border-secondary hover:text-secondary flex items-center justify-center text-primary shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="w-10 h-10 rounded-full bg-white border border-black/5 hover:border-secondary hover:text-secondary flex items-center justify-center text-primary shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION CONTACT & GOOGLE MAPS            */}
        {/* ======================================== */}
        <section id="contact" className="bg-primary py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Informations de contact (colonne 5) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-10">
                <div>
                  <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
                    <span className="w-6 h-[2px] bg-secondary" />
                    Restons en contact
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight">
                    Discutons de vos projets d'avenir
                  </h2>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                    Notre équipe d'experts est disponible pour vous guider et concevoir les solutions de vos futurs succès opérationnels et digitaux.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-white/55 font-bold mb-1">E-mail direct</h4>
                        <Link
                          href="mailto:contact@inter-solutionsservices.com"
                          className="text-sm font-semibold hover:text-secondary transition-colors duration-200"
                        >
                          contact@inter-solutionsservices.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-white/55 font-bold mb-1">Téléphones</h4>
                        <span className="text-sm font-semibold">+237 695296446 / 679033398</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-white/55 font-bold mb-1">Adresse</h4>
                        <span className="text-sm font-semibold">Tradex Tsinga Yaoundé Cameroun</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Placeholder */}
                <div className="h-48 rounded-3xl overflow-hidden border border-white/10 relative group">
                  <div className="absolute inset-0 bg-neutral-800 flex flex-col items-center justify-center p-4 text-center">
                    <MapPin size={36} className="text-secondary mb-3 animate-bounce" />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-white">Localisation interactive</h4>
                    <p className="text-[10px] text-white/60 mt-1 max-w-[200px]">Tradex Tsinga, Yaoundé, Cameroun</p>
                  </div>
                  {/* Overlay opaque simulé et interactif pour l'intégration de maps */}
                  <div className="absolute inset-0 bg-primary/45 opacity-30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Formulaire de Contact (colonne 7) */}
              <div className="lg:col-span-7">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-white/65">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-secondary transition-colors text-sm"
                          placeholder="Ex: Jean Martin"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-white/65">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-secondary transition-colors text-sm"
                          placeholder="Ex: Entreprise Inc."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-white/65">
                          E-mail professionnel
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-secondary transition-colors text-sm"
                          placeholder="Ex: jean.martin@entreprise.com"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-white/65">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-secondary transition-colors text-sm"
                          placeholder="Ex: +237 695 296 446"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-white/65">
                        Objet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleFormChange}
                        required
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-secondary transition-colors text-sm"
                        placeholder="Ex: Demande de services ou d'informations"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-white/65">
                        Votre message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        rows={4}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-secondary transition-colors text-sm resize-none"
                        placeholder="Veuillez détailler vos besoins ou votre question..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitted}
                      className="w-full py-4 bg-secondary text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-secondary-light transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-secondary/15 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                    >
                      {formSubmitted ? (
                        <>Envoi en cours...</>
                      ) : (
                        <>
                          Envoyer le message
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Composant LayersIcon personnalisé pour remplacer les icônes obsolètes
function LayersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-10 5 10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}
