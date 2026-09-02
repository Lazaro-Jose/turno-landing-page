"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "O Crachá do Téo", href: "#cracha" },
    { label: "Setores Atendidos", href: "#setores" },
    { label: "Perguntas Frequentes", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-bancada/95 backdrop-blur-sm border-b border-aco-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo & Operational Status */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-7 w-28">
              <Image
                src="/assets/images/turno_logo_transparente-black-letters.png"
                alt="Turno"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-aco-light text-xs font-mono text-aco">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPERAÇÃO ATIVA</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-aco hover:text-grafite transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="#demonstracao"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[8px] bg-laranja hover:bg-laranja-hover text-white text-sm font-semibold transition-colors shadow-none"
          >
            <span>Contratar o Téo</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href="#demonstracao"
            className="px-3 py-1.5 rounded-[8px] bg-laranja text-white text-xs font-semibold"
          >
            Contratar
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[8px] text-grafite hover:bg-aco-light transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-aco-light bg-bancada px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white border border-aco-light text-xs font-mono text-aco w-fit mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPERAÇÃO ATIVA</span>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-grafite hover:text-laranja"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#demonstracao"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-[8px] bg-laranja text-white text-sm font-semibold"
            >
              <span>Contratar o Téo</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
