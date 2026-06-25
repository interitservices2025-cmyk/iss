"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Écosystème", href: "/ecosystem" },
    { name: "Nos filiales", href: "/subsidiaries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-black/5 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo ISS horizontal officiel bien visible sur fond blanc */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-11 w-44 sm:w-48 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png?v=3"
                alt="Logo ISS"
                className="h-full w-full object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Cabinet de Conseil Style */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-300 border-b-2 pb-1 ${
                    isActive
                      ? "text-secondary border-secondary font-bold"
                      : "text-primary/80 hover:text-secondary border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-xs font-semibold tracking-widest uppercase px-6 py-3 border bg-secondary border-secondary text-white hover:bg-secondary-light hover:border-secondary-light transition-all duration-300 shadow-sm"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none text-primary transition-colors"
            aria-label="Menu principal"
          >
            {isMobileMenuOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 bg-primary/98 backdrop-blur-2xl z-40 shadow-2xl border-b border-white/10 md:hidden flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ${
                    isActive ? "text-secondary font-bold" : "text-white/80 hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 border border-secondary bg-secondary text-white text-xs font-semibold tracking-widest uppercase px-8 py-3.5 hover:bg-secondary-light hover:border-secondary-light transition-colors duration-200 shadow-lg shadow-secondary/20"
            >
              Nous contacter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
