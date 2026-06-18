"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#a-propos" },
    { name: "Nos filiales", href: "#nos-filiales" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-header shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo ISS */}
          <Link href="#accueil" className="flex items-center gap-3 group">
            <div className="relative w-16 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Logo INTER-SOLUTIONS SERVICES"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-semibold tracking-wider text-xs hidden sm:block transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              INTER-SOLUTIONS SERVICES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide relative py-2 transition-colors duration-300 hover:text-secondary ${
                  isScrolled ? "text-primary" : "text-white/90 hover:text-white"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className={`text-sm font-semibold px-6 py-2.5 rounded-full tracking-wide transition-all duration-300 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-secondary hover:shadow-lg hover:shadow-secondary/20"
                  : "bg-white text-primary hover:bg-secondary hover:text-white hover:shadow-lg hover:shadow-secondary/20"
              }`}
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-primary" : "text-white"} size={28} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-white"} size={28} />
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
            className="fixed inset-x-0 top-0 pt-24 pb-8 bg-primary/98 backdrop-blur-xl z-40 shadow-2xl border-b border-white/10 md:hidden flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-secondary text-lg font-medium tracking-wide transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-secondary text-white text-base font-semibold px-8 py-3 rounded-full hover:bg-secondary-light tracking-wide transition-colors duration-200 shadow-lg shadow-secondary/20"
            >
              Nous contacter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
