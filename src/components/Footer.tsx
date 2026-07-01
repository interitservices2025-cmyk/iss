"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

// Icônes de réseaux sociaux personnalisées
function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-white/5 relative overflow-hidden">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/10 rounded-full blur-[120px] pointer-events-none -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-20 pb-10 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Manifesto Column */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="flex items-center">
              <div className="bg-white px-4 py-2 rounded flex items-center justify-center relative w-64 h-24 shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Logo ISS"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              Inter-Solutions Services (ISS) est un groupe multidisciplinaire international. Nous orchestrons des filiales leaders pour structurer l'avenir de la technologie, des ressources humaines, de l'immobilier et de la maintenance industrielle.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>

          {/* Column 2: Groupe & Gouvernance */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-secondary">
              Groupe & Gouvernance
            </h3>
            <ul className="flex flex-col gap-3 text-xs">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors duration-200">
                  Le Groupe ISS
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors duration-200">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-white/60 hover:text-white transition-colors duration-200">
                  Écosystème Connecté
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="text-white/60 hover:text-white transition-colors duration-200">
                  Message du CEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Nos Filiales */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-secondary">
              Nos Structures
            </h3>
            <ul className="flex flex-col gap-3 text-xs">
              <li>
                <Link href="/subsidiaries" className="text-white/60 hover:text-white transition-colors duration-200">
                  Inter-IT Services
                </Link>
              </li>
              <li>
                <Link href="/subsidiaries" className="text-white/60 hover:text-white transition-colors duration-200">
                  Inter-RH
                </Link>
              </li>
              <li>
                <Link href="/subsidiaries" className="text-white/60 hover:text-white transition-colors duration-200">
                  Inter-Immo
                </Link>
              </li>
              <li>
                <Link href="/subsidiaries" className="text-white/60 hover:text-white transition-colors duration-200">
                  Electromeca+
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Institutionnel */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-secondary">
              Contact Cameroun
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-white/60">
              <li className="flex items-start">
                <span className="text-white font-semibold w-24 shrink-0">Adresse :</span>
                <span className="lg:whitespace-nowrap">Tradex Tsinga Yaoundé Cameroun</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-semibold w-24 shrink-0">Téléphones :</span>
                <span className="whitespace-nowrap">+237 695296446 / 679033398</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-semibold w-24 shrink-0">E-mail :</span>
                <Link href="mailto:contact@inter-solutionsservices.com" className="hover:text-white transition-colors duration-200 inline-block whitespace-nowrap" title="contact@inter-solutionsservices.com">
                  contact@inter-solutionsservices.com
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-white/5 my-10" />

        {/* Extended Footer Legal and Copyright Bar - Deloitte/Accenture inspired */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3">
            <p className="text-[10px] text-white/40 tracking-wider">
              &copy; {currentYear} Inter-Solutions Services (ISS). Tous droits réservés.
            </p>
            <span className="text-white/10 hidden lg:inline">|</span>
            <Link href="/" className="text-[10px] text-white/40 hover:text-white tracking-wider transition-colors duration-200">
              Politique de Confidentialité
            </Link>
            <Link href="/" className="text-[10px] text-white/40 hover:text-white tracking-wider transition-colors duration-200">
              Mentions Légales
            </Link>
            <Link href="/" className="text-[10px] text-white/40 hover:text-white tracking-wider transition-colors duration-200">
              Politique des Cookies
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Retour en haut"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
