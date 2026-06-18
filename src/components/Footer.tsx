"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

// Icônes de réseaux sociaux personnalisées pour éviter les incompatibilités de build
function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
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
      width="24"
      height="24"
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
    <footer className="bg-primary text-white border-t border-white/10 relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description Column */}
          <div className="flex flex-col gap-5 col-span-1 md:col-span-1">
            <div className="flex items-center">
              <div className="relative w-16 h-12">
                <Image
                  src="/logo.png"
                  alt="Logo ISS"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-2">
              Ensemble, construisons vos solutions de demain. Un groupe multidisciplinaire pour vous accompagner dans vos projets stratégiques.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </Link>
            </div>
          </div>

          {/* Groupe Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary">
              Groupe
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="#accueil"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#a-propos"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#nos-filiales"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  Nos filiales
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Filiales Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary">
              Filiales
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="https://inter-itservices.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  Inter-IT Services
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.inter-rh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  Inter-RH
                </Link>
              </li>
              <li>
                <Link
                  href="#nos-filiales"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  Inter-Immo
                </Link>
              </li>
              <li>
                <Link
                  href="#nos-filiales"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  Electromeca+
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <span className="block text-white font-medium mb-0.5">E-mail :</span>
                <Link
                  href="mailto:contact@inter-solutionsservices.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@inter-solutionsservices.com
                </Link>
              </li>
              <li>
                <span className="block text-white font-medium mb-0.5">Téléphones :</span>
                <span>+237 695296446 / 679033398</span>
              </li>
              <li>
                <span className="block text-white font-medium mb-0.5">Adresse :</span>
                <span>Tradex Tsinga Yaoundé Cameroun</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; {currentYear} INTERNATIONAL SOLUTIONS SERVICES (ISS). Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
