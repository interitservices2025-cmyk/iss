"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Award, 
  ShieldCheck, 
  Quote, 
  Users2, 
  TrendingUp, 
  Target, 
  Compass, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Notre Mission",
      desc: "Piloter et catalyser la croissance de nos filiales en leur fournissant une assise stratégique, financière et technologique solide, garantissant l'excellence opérationnelle pour tous nos partenaires mondiaux."
    },
    {
      icon: Compass,
      title: "Notre Vision",
      desc: "Devenir un groupe multidisciplinaire de référence reliant l'Afrique et l'Amérique du Nord, reconnu pour sa capacité à anticiper les mutations technologiques et organisationnelles."
    },
    {
      icon: Sparkles,
      title: "Nos Valeurs",
      desc: "La synergie collective, l'intégrité absolue, l'innovation permanente et l'engagement d'excellence guident chacune des décisions d'investissement et de pilotage du groupe."
    }
  ];

  const timeline = [
    {
      phase: "Étape 1 : Juin 2023",
      title: "Création de INTER-IT SERVICES",
      desc: "Lancement des activités de la filiale technologique et développement des services numériques."
    },
    {
      phase: "Étape 2",
      title: "Création de INTER-RH",
      desc: "Développement des services de ressources humaines, de coaching managérial et de recrutement international."
    },
    {
      phase: "Étape 3",
      title: "Création des nouvelles filiales",
      desc: "Diversification des activités et lancement des filiales Inter-Immo, Electromeca+ et Happy Food."
    },
    {
      phase: "Étape 4 : Aujourd'hui",
      title: "Groupe multiservices d'excellence",
      desc: "Inter-Solutions Services devient un groupe multiservices d'orientation et de pilotage stratégique de référence."
    }
  ];

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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
              alt="ISS Groupe Bureau"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-neutral-950/80 z-10" />
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
              Groupe Institutionnel
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight"
            >
              Gouvernance, Engagement <br />
              <span className="text-secondary">& Excellence Intégrée</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/80 text-sm sm:text-base max-w-xl leading-relaxed font-light"
            >
              Découvrez l'histoire, la structure de gouvernance et les valeurs cardinales qui guident l'évolution et les investissements du groupe Inter-Solutions Services (ISS).
            </motion.p>
          </div>
        </section>

        {/* ======================================== */}
        {/* PRESENTATION & HISTORY                   */}
        {/* ======================================== */}
        <section className="py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px]">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Origines & Vocation
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                Plus qu'un groupe, un architecte de synergies
              </h2>
              <p className="text-neutral-dark/80 text-xs sm:text-sm leading-relaxed font-light">
                Fondé sur une vision multidisciplinaire, le groupe **Inter-Solutions Services (ISS)** orchestre l'innovation au sein de filiales spécialisées et interconnectées. Notre ambition est de combler les ponts technologiques et opérationnels entre l'Afrique (depuis notre siège à Yaoundé) et l'Amérique du Nord.
              </p>
              <p className="text-neutral-dark/70 text-xs sm:text-sm leading-relaxed font-light">
                Depuis notre création, nous veillons à ce que chaque filiale conserve une autonomie agile tout en bénéficiant de la force de frappe financière, juridique et technologique du groupe. Cette approche collaborative transversale permet à ISS de proposer des solutions de classe mondiale dans l'Informatique, le recrutement stratégique, la maintenance industrielle et l'administration immobilière.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative h-96 w-full shadow-2xl border border-black/5 bg-primary overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="ISS Corporate Collaboration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/10 -z-10" />
            </motion.div>
          </div>
        </section>

        {/* ======================================== */}
        {/* MISSION, VISION, VALUES                  */}
        {/* ======================================== */}
        <section className="py-24 bg-neutral-light border-y border-black/5 relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {values.map((v, idx) => {
                const IconComponent = v.icon;
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="bg-white border border-black/5 p-8 shadow-sm flex flex-col items-start hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-6">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">{v.title}</h3>
                    <p className="text-neutral-dark/70 text-xs sm:text-sm leading-relaxed font-light">{v.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* TIMELINE                                 */}
        {/* ======================================== */}
        <section className="py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Notre Trajectoire
                <span className="w-6 h-[1.5px] bg-secondary" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
                L'évolution continue d'ISS
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-primary/5 -translate-x-1/2 hidden lg:block" />

              <div className="space-y-10 lg:space-y-0">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="relative flex flex-col lg:flex-row items-center justify-between lg:even:flex-row-reverse"
                  >
                    <div className="w-full lg:w-[44%] bg-neutral-light border border-black/5 p-8 shadow-sm relative z-10 hover:shadow-md transition-all duration-300">
                      <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-3">
                        {item.phase}
                      </span>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-dark/70 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-md z-20 hidden lg:block" />
                    <div className="w-[44%] hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* QUALITY STANDARDS                        */}
        {/* ======================================== */}
        <section className="bg-primary text-white py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px]">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Qualité & Normes
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Un engagement qualité sans compromis
              </h2>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-light">
                Nous croyons que l'excellence opérationnelle n'est pas un objectif ponctuel, mais un standard quotidien. ISS déploie des cadres d'audit stricts et des processus certifiés pour assurer la conformité internationale de toutes ses filiales.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Audit rigoureux des processus internes",
                  "Alignement avec les normes de conformité",
                  "Formation continue de nos équipes d'experts",
                  "Indicateurs de satisfaction client mesurés"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-secondary shrink-0" />
                    <span className="text-xs sm:text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 border border-white/10 bg-white/5 p-8 backdrop-blur-sm relative"
            >
              <h3 className="text-lg font-bold text-secondary mb-4">Indices de performance du Groupe</h3>
              <ul className="space-y-4 text-xs sm:text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-light">Taux de satisfaction filiales</span>
                  <span className="font-bold text-secondary">98.4%</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-light">Conformité réglementaire</span>
                  <span className="font-bold text-secondary">100%</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-light">Projets réalisés</span>
                  <span className="font-bold text-secondary">10+</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-light">Rétention des talents (Inter-RH)</span>
                  <span className="font-bold text-secondary">95.0%</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ======================================== */}
        {/* CEO & LEADERSHIP                         */}
        {/* ======================================== */}
        <section id="leadership" className="py-28 bg-white relative scroll-mt-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 relative"
              >
                <div className="relative h-[450px] sm:h-[500px] w-full overflow-hidden shadow-2xl border border-black/5 bg-primary">
                  <img
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=800"
                    alt="Équipe de direction d'Inter-Solutions Services"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 -z-10" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 flex flex-col items-start"
              >
                <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">
                  <span className="w-6 h-[1.5px] bg-secondary" />
                  Vision de Direction
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight mb-8 leading-tight">
                  Garantir l'excellence, orchestrer le progrès
                </h2>

                <div className="relative mb-8">
                  <Quote size={48} className="text-secondary/10 absolute -top-6 -left-6 -z-10" />
                  <p className="text-primary/95 text-xs sm:text-sm md:text-base italic leading-relaxed font-light">
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
